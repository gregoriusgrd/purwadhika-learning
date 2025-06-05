"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = 8080;
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write("Ini API");
        res.end();
    }
    if (req.url === "/api/auth" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write("Ini API Auth");
        res.end();
    }
});
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
