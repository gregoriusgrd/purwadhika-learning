import { Router } from "express";
import { AddExpenseController, GetExpenseDetailsController, GetExpensesController } from "../controller/expense.controller";

const router = Router();

router.get("/", GetExpensesController);
router.get("/:id", GetExpenseDetailsController)
router.post("/", AddExpenseController)

export default router;