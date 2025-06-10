import { Request, Response, NextFunction } from "express";
import { GetExpensesService } from "../service/expense.service";

export async function GetExpensesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {filter} = req.query

    const data = GetExpensesService({filter: String(filter)})

    res.status(200).json({
      status: "OK",
      data: {
        message: "success",
      },
    });
  } catch (err) {
    next(err);
  }
}
