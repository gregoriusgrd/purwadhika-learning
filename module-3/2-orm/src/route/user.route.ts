import { Router } from "express";
import userController from "../controller/user.controller";

const router = Router()

router.post("/register", userController.register)
router.post("/login", userController.login)
router.patch("/:id", userController.update)
router.get("/", userController.findAll)

export default router;