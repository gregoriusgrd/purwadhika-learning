import { Router } from "express";
import articleController from "../controller/article.controller";
import userController from "../controller/user.controller";

const router = Router();

router.post("/", articleController.create);
router.get("/", articleController.findAll);
// router.get("/:id", articleController.findById); 
router.patch("/:id", articleController.update)

export default router;
