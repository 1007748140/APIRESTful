import { Router } from 'express';
import { InvoiceDetailController } from '../controllers/invoiceDetailController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();
const invoiceDetailController = new InvoiceDetailController();

router.post('/api/invoice-details', authMiddleware, invoiceDetailController.create.bind(invoiceDetailController));
router.get('/api/invoice-details', authMiddleware, invoiceDetailController.getAll.bind(invoiceDetailController));
router.get('/api/invoice-details/:id', authMiddleware, invoiceDetailController.getById.bind(invoiceDetailController));
router.put('/api/invoice-details/:id', authMiddleware, invoiceDetailController.update.bind(invoiceDetailController));
router.delete('/api/invoice-details/:id', authMiddleware, invoiceDetailController.delete.bind(invoiceDetailController));

export default router;
