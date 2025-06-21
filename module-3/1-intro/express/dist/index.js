"use strict";
// template (?)
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expense_route_1 = __importDefault(require("./route/expense.route"));
const db_1 = __importDefault(require("./db"));
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
// ROUTES
app.use("/expenses", expense_route_1.default);
app.get("/students", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield db_1.default.query("SELECT * FROM purwadhika.student");
        res.status(200).json({
            status: "OK",
            data: data.rows,
        });
    }
    catch (err) {
        res.status(500).json({
            status: "NG",
            message: err === null || err === void 0 ? void 0 : err.message,
        });
    }
}));
app.post("/students", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname } = req.body;
        const data = yield db_1.default.query("INSERT INTO purwadhika.student(firstname, lastname) values($1, $2) RETURNING *", [firstname, lastname]);
        res.status(200).json({
            status: "OK",
            data: data.rows,
        });
    }
    catch (err) {
        res.status(500).json({
            status: "NG",
            message: err === null || err === void 0 ? void 0 : err.message,
        });
    }
}));
// CHECK DB CONNECTION
db_1.default.connect((err, client, release) => {
    if (err) {
        release();
        return console.log("DB connection failed", err.stack);
    }
    console.log("DB connected successfully");
    release();
});
// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
