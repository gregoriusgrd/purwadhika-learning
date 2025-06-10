import { Request, Response, NextFunction } from "express";
import { GetExpensesService } from "../service/expense.service";
import { Expense } from "../interface/expense.interface";
import { AddExpenseService } from "../service/expense.service";

export async function GetExpensesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const expenses = GetExpensesService();
    res.status(200).json({
      status: "OK",
      data: expenses,
    });
  } catch (err) {
    next(err);
  }
}

export async function AddExpenseController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newExpense: Expense = req.body;
    const addExpenses = AddExpenseService(newExpense);
    res.status(201).json({
      status: "OK",
      data: addExpenses,
    });
  } catch (err) {
    next(err);
  }
}
