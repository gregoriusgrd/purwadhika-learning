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
      });
    } catch (err) {
      next(err);
    }
  },

  // async findById(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = req.params;
  //     const article = await articleService.findById(Number(id));

  //     if (!article) {
  //       return res.status(404).json({ message: "Article not found" });
  //     }

  //     res.json({
  //       message: "Article detail fetched successfully",
  //       data: article,
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // },

  async update(req: Request, res: Response, next: NextFunction){
    try {
      const {id} = req.params;
      const {title, content} = req.body

      const updated = await articleService.update(Number(id), title, content);

      res.json({
        message: "Article updated successfully",
        data: updated,
      })
    } catch (err) {
      next(err)
    }
  }
};

export default articleController;
