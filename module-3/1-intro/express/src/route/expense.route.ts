import { Router } from "express";
import { AddExpenseController, GetExpensesController } from "../controller/expense.controller";

const router = Router();

router.get("/", GetExpensesController);
router.post("/", AddExpenseController)

export default router;