import fs from "fs";
import { IExpense } from "../interface/expense.interface";

export function GetExpensesService(): IExpense[] {
  const data = fs.readFileSync("src/db.json", "utf-8");
  const parsedData = JSON.parse(data);

  return parsedData.expenses;
}

export function AddExpenseService(newExpense: IExpense): IExpense {
  const data = fs.readFileSync("src/db.json", "utf-8");
  const parsedData = JSON.parse(data);

  parsedData.expenses.push(newExpense)

  fs.writeFileSync('src/db.json', JSON.stringify({expenses: parsedData.expenses}, null, 2))

  return newExpense
}
