"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetExpensesService = GetExpensesService;
exports.AddExpenseService = AddExpenseService;
const fs_1 = __importDefault(require("fs"));
function GetExpensesService() {
    const data = fs_1.default.readFileSync("src/db.json", "utf-8");
    const parsedData = JSON.parse(data);
    return parsedData.expenses;
}
function AddExpenseService(newExpense) {
    const data = fs_1.default.readFileSync("src/db.json", "utf-8");
    const parsedData = JSON.parse(data);
    parsedData.expenses.push(newExpense);
    fs_1.default.writeFileSync('src/db.json', JSON.stringify({ expenses: parsedData.expenses }, null, 2));
    return newExpense;
}
