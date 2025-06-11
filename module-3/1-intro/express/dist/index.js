"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expense_route_1 = __importDefault(require("./route/expense.route"));
const PORT = 8080;
const app = (0, express_1.default)();
// MIDDLEWARE
// pasang express.json jika ingin bisa mengakses request.body
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log("Masuk application level middleware, semua route akan mengakses ini terlebih dahulu");
    next();
});
// REQUEST
// url: http://localhost:8080/api
// method: GET
app.use("/expenses", expense_route_1.default);
// query parameter
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
