import fs from "fs";
import { Expense } from "../interface/expense.interface";

export function GetExpensesService(): Expense[] {
  const data = fs.readFileSync("src/db.json", "utf-8");

  const parsedData = JSON.parse(data);

  return parsedData.expenses;
}
