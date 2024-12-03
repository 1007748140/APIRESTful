import { Request, Response } from 'express';
import InvoiceDetail from '../models/invoiceDetailModel';

export class InvoiceDetailController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const detail = await InvoiceDetail.create(req.body);
      res.status(201).json(detail);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      console.log(req);
      const details = await InvoiceDetail.findAll();
      res.status(200).json(details);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const detail = await InvoiceDetail.findByPk(req.params.id);
      if (!detail) {
        res.status(404).json({ error: 'Detalle no encontrado' });
        return;
      }
      res.status(200).json(detail);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const detail = await InvoiceDetail.findByPk(req.params.id);
      if (!detail) {
        res.status(404).json({ error: 'Detalle no encontrado' });
        return;
      }
      await detail.update(req.body);
      res.status(200).json(detail);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const detail = await InvoiceDetail.findByPk(req.params.id);
      if (!detail) {
        res.status(404).json({ error: 'Detalle no encontrado' });
        return;
      }
      await detail.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
