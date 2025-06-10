import { Request, Response, NextFunction } from "express";
import { GetExpensesService } from "../service/expense.service";

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
