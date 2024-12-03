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
exports.InvoiceDetailController = void 0;
const invoiceDetailModel_1 = __importDefault(require("../models/invoiceDetailModel"));
class InvoiceDetailController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detail = yield invoiceDetailModel_1.default.create(req.body);
                res.status(201).json(detail);
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
                const details = yield invoiceDetailModel_1.default.findAll();
                res.status(200).json(details);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detail = yield invoiceDetailModel_1.default.findByPk(req.params.id);
                if (!detail) {
                    res.status(404).json({ error: 'Detalle no encontrado' });
                    return;
                }
                res.status(200).json(detail);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detail = yield invoiceDetailModel_1.default.findByPk(req.params.id);
                if (!detail) {
                    res.status(404).json({ error: 'Detalle no encontrado' });
                    return;
                }
                yield detail.update(req.body);
                res.status(200).json(detail);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detail = yield invoiceDetailModel_1.default.findByPk(req.params.id);
                if (!detail) {
                    res.status(404).json({ error: 'Detalle no encontrado' });
                    return;
                }
                yield detail.destroy();
                res.status(204).send();
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.InvoiceDetailController = InvoiceDetailController;
//# sourceMappingURL=invoiceDetailController.js.map