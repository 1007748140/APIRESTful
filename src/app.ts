// src/app.ts
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import YAML from 'yamljs'; // Asegúrate de tener esta importación
import swaggerUi from 'swagger-ui-express';
import errorHandler from './middlewares/errorHandler';
import userRoutes from './routes/userRoutes';
import roleRoutes from './routes/roleRoutes';
import userRoleRoutes from './routes/userRoleRoutes';

const app: Application = express();

// Middlewares globales
app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Rutas
app.use(userRoutes);
app.use(roleRoutes);
app.use(userRoleRoutes);
// swagger
const swaggerDocument = YAML.load('./docs/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Middleware para servir la documentación

// Middleware de manejo de errores
app.use(errorHandler);
app.get('/', (_req, res) => {
  res.send('Api Itp');
});
export default app;
