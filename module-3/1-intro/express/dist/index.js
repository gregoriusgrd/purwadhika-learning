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
// USER
// query parameter
app.get("/api", (req, res) => {
    const { page, access_token } = req.query;
    res.status(200).json({
        status: "OK",
        data: [
            {
                id: 1,
                name: "budi",
            },
            {
                id: 2,
                name: "sara",
            },
            {
                id: 3,
                name: "john",
            },
        ],
        filter: {
            page,
            access_token,
        },
    });
});
// ROUTER PARAMETER
app.get("/users/user:id", (req, res) => {
    const { userId } = req.params;
    res.status(200).json({
        status: "OK",
        data: {
            id: userId,
            name: "budi",
        },
    });
});
app.post("/users", (req, res) => {
    const { id, name } = req.body;
    res.status(200).json({
        status: "OK",
        data: {
            id,
            name,
        },
    });
});
app.patch("/users/:userId", (req, res) => {
    const { userId } = req.params;
    const { name } = req.body;
    res.status(200).json({
        status: "OK",
        data: {
            id: userId,
            name,
        }
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
/*
app.get("/api/auth", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Ini GET",
  });
});

app.post("/api/auth", (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(200).json({
    status: "OK",
    message: name,
  });
});

app.put("/api/auth", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Ini PUT",
  });
});

app.patch("/api/auth", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Ini PATCH",
  });
});

app.delete("/api/auth", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Ini DELETE",
  });
});
*/
