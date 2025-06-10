"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    console.log("Masuk ke middleware METHOD GET /users");
    next();
}, user_controller_1.GetUsersController);
// Route Parameter
router.get("/:userId", (req, res) => {
    const { userId } = req.params;
    res.status(200).json({
        status: "OK",
        data: {
            id: 1,
            name: "budi",
        },
    });
});
// REQ BODY
// url: http://localhost:8080/users
router.post("/", (req, res) => {
    const { id, name } = req.body;
    res.status(200).json({
        status: "OK",
        data: {
            id,
            name,
        },
    });
});
router.patch("/:userId", (req, res) => {
    const { userId } = req.params;
    const { name } = req.body;
    res.status(200).json({
        status: "OK",
        data: {
            id: userId,
            name,
        },
    });
});
exports.default = router;
