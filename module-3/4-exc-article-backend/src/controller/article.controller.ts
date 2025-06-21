import { Request, Response, NextFunction } from "express";
import articleService from "../service/article.service";

const articleController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, content } = req.body;
      const result = await articleService.create(title, content);

      res.status(201).json({
        message: "Article created successfully",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await articleService.findAll();

      res.json({
        message: "Article list fetched successfully",
        data: result,
      })
    } catch (err) {
      next(err);
    }
  },
};

export default articleController;
