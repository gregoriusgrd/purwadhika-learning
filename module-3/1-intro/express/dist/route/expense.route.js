"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expense_controller_1 = require("../controller/expense.controller");
const router = (0, express_1.Router)();
// untuk menghubungkan url ke controller
router.get("/", expense_controller_1.GetExpensesController);
router.get("/:id", expense_controller_1.GetExpenseDetailsController);
router.post("/", expense_controller_1.AddExpenseController);
exports.default = router;
