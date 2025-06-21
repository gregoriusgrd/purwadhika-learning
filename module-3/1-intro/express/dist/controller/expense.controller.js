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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetExpensesController = GetExpensesController;
exports.GetExpenseDetailsController = GetExpenseDetailsController;
exports.AddExpenseController = AddExpenseController;
const expense_service_1 = require("../service/expense.service");
const expense_service_2 = require("../service/expense.service");
// tangani permintaan client
function GetExpensesController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const expenses = (0, expense_service_1.GetExpensesService)(); // service untuk ambil data
            res.status(200).json({
                status: "OK",
                data: expenses,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function GetExpenseDetailsController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const expenses = (0, expense_service_1.GetExpensesService)();
            const expense = expenses.find(exp => exp.id === parseInt(id));
            res.status(200).json({
                status: "OK",
                data: expense,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function AddExpenseController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newExpense = req.body;
            const addExpenses = (0, expense_service_2.AddExpenseService)(newExpense);
            res.status(201).json({
                status: "OK",
                data: addExpenses,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
