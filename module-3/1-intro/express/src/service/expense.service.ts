import fs from "fs";
import { Expense } from "../interface/expense.interface";

export function GetExpensesService(): Expense[] {
  const data = fs.readFileSync("src/db.json", "utf-8");
  const parsedData = JSON.parse(data);

  return parsedData.expenses;
}

export function AddExpenseService(newExpense: Expense): Expense {
  const data = fs.readFileSync("src/db.json", "utf-8");
  const parsedData = JSON.parse(data);

  parsedData.expenses.push(newExpense)

  fs.writeFileSync('src/db.json', JSON.stringify({expenses: parsedData.expenses}, null, 2))

  return newExpense
}
