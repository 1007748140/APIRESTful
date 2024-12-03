"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = require("../controllers/paymentController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
const paymentController = new paymentController_1.PaymentController();
router.post('/api/payments', authMiddleware_1.default, paymentController.create.bind(paymentController));
router.get('/api/payments', authMiddleware_1.default, paymentController.getAll.bind(paymentController));
router.get('/api/payments/:id', authMiddleware_1.default, paymentController.getById.bind(paymentController));
router.put('/api/payments/:id', authMiddleware_1.default, paymentController.update.bind(paymentController));
router.delete('/api/payments/:id', authMiddleware_1.default, paymentController.delete.bind(paymentController));
exports.default = router;
//# sourceMappingURL=paymentRoutes.js.map