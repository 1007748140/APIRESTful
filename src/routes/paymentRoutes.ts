import { Router } from 'express';
import { PaymentController } from '../controllers/paymentController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();
const paymentController = new PaymentController();

router.post('/api/payments', authMiddleware, paymentController.create.bind(paymentController));
router.get('/api/payments', authMiddleware, paymentController.getAll.bind(paymentController));
router.get('/api/payments/:id', authMiddleware, paymentController.getById.bind(paymentController));
router.put('/api/payments/:id', authMiddleware, paymentController.update.bind(paymentController));
router.delete('/api/payments/:id', authMiddleware, paymentController.delete.bind(paymentController));

export default router;
