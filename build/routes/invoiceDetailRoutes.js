"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoiceDetailController_1 = require("../controllers/invoiceDetailController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
const invoiceDetailController = new invoiceDetailController_1.InvoiceDetailController();
router.post('/api/invoice-details', authMiddleware_1.default, invoiceDetailController.create.bind(invoiceDetailController));
router.get('/api/invoice-details', authMiddleware_1.default, invoiceDetailController.getAll.bind(invoiceDetailController));
router.get('/api/invoice-details/:id', authMiddleware_1.default, invoiceDetailController.getById.bind(invoiceDetailController));
router.put('/api/invoice-details/:id', authMiddleware_1.default, invoiceDetailController.update.bind(invoiceDetailController));
router.delete('/api/invoice-details/:id', authMiddleware_1.default, invoiceDetailController.delete.bind(invoiceDetailController));
exports.default = router;
//# sourceMappingURL=invoiceDetailRoutes.js.map