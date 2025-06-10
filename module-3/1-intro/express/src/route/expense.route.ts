import { Router } from "express";
import { GetExpensesController } from "../controller/expense.controller";

const router = Router();

router.get("/", GetExpensesController);

export default router;