"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const paymentModel_1 = __importDefault(require("../models/paymentModel"));
class PaymentController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield paymentModel_1.default.create(req.body);
                res.status(201).json(payment);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                const payments = yield paymentModel_1.default.findAll();
                res.status(200).json(payments);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield paymentModel_1.default.findByPk(req.params.id);
                if (!payment) {
                    res.status(404).json({ error: 'Pago no encontrado' });
                    return;
                }
                res.status(200).json(payment);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield paymentModel_1.default.findByPk(req.params.id);
                if (!payment) {
                    res.status(404).json({ error: 'Pago no encontrado' });
                    return;
                }
                yield payment.update(req.body);
                res.status(200).json(payment);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield paymentModel_1.default.findByPk(req.params.id);
                if (!payment) {
                    res.status(404).json({ error: 'Pago no encontrado' });
                    return;
                }
                yield payment.destroy();
                res.status(204).send();
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.PaymentController = PaymentController;
//# sourceMappingURL=paymentController.js.map