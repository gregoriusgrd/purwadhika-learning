import { Request, Response, NextFunction } from "express";

import userService from "../service/user.service";
import { register } from "module";

const userController = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await userService.register(email, password);

      res.status(201).json({
        message: "OK",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await userService.login(email, password);

      res.json({
        message: "OK",
        data: result,
      });
    } catch (err) {
      next(err); // kalau error ke index.ts error handling
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { email, password, avatar } = req.body;

      await userService.update(Number(id), email, password, avatar);

      res.status(204).json({
        message: "OK",
      });
    } catch (err) {
      next(err);
    }
  },

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { page = 1, pageSize = 10 } = req.query;
      const result = await userService.findAll(Number(page), Number(pageSize));

      res.json({
        message: "OK",
        content: result,
      });
    } catch (err) {
      next(err);
    }
  },
};

export default userController;
