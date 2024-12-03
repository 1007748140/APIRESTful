import { Request, Response } from 'express';
import Payment from '../models/paymentModel';

export class PaymentController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const payment = await Payment.create(req.body);
      res.status(201).json(payment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      console.log(req);
      const payments = await Payment.findAll();
      res.status(200).json(payments);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (!payment) {
        res.status(404).json({ error: 'Pago no encontrado' });
        return;
      }
      res.status(200).json(payment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (!payment) {
        res.status(404).json({ error: 'Pago no encontrado' });
        return;
      }
      await payment.update(req.body);
      res.status(200).json(payment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (!payment) {
        res.status(404).json({ error: 'Pago no encontrado' });
        return;
      }
      await payment.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
