import { Request, Response, NextFunction } from "express";
import { GetExpensesService } from "../service/expense.service";
import { IExpense } from "../interface/expense.interface";
import { AddExpenseService } from "../service/expense.service";

// tangani permintaan client
export async function GetExpensesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {             
    const expenses = GetExpensesService(); // service untuk ambil data
    res.status(200).json({
      status: "OK",
      data: expenses,
    });
  } catch (err) {
    next(err);
  }
}

export async function GetExpenseDetailsController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {id} = req.params;
    const expenses: IExpense[] = GetExpensesService();
    const expense = expenses.find(exp => exp.id === parseInt(id))

    res.status(200).json({
      status: "OK",
      data: expense,
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
    const newExpense: IExpense = req.body;
    const addExpenses = AddExpenseService(newExpense);
    res.status(201).json({
      status: "OK",
      data: addExpenses,
    });
  } catch (err) {
    next(err);
  }
}
