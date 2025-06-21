import { Request, Response, NextFunction } from "express";
import userService from "../service/user.service";
import { register } from "module";

const userController = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await userService.register(email, password);

      res.status(201).json({
        message: "User Registered Successfully",
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
        message: "Login successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },
};

export default userController;
