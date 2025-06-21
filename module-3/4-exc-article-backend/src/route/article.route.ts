import { Router } from "express";
import articleController from "../controller/article.controller";

const router = Router();

router.post("/", articleController.create);
router.get("/", articleController.findAll);

export default router;
