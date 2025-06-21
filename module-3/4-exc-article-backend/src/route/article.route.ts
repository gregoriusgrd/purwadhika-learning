import { Router } from "express";
import articleController from "../controller/article.controller";

const router = Router()

router.post("/" , articleController.create);

export default router