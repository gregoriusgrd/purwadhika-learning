"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8080;
const app = (0, express_1.default)();
// REQUEST
// url: http://localhost:8080/api
app.get("/api", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "/api",
    });
});
app.get("/api/auth", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "/api/auth"
    });
});
app.post("/api/auth", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Ini POST"
    });
});
app.put("/api/auth", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Ini PUT"
    });
});
app.patch("/api/auth", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Ini PATCH"
    });
});
app.delete("/api/auth", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Ini DELETE"
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
