import { NextFunction, Request, Response } from "express";
import prisma from "../prisma";
import UserService from "../services/user.service";

export default class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

  async getUsers(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getUsers();
        //   const users = await prisma.user.findMany();

      res.status(200).send({
        data: users,
        status: "SUCCESS",
        message: "Get users successfull",
      })
    } catch (error) {
      next(error);
    }
  }
}
