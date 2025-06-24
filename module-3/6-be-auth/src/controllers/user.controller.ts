import { NextFunction, Request, Response } from "express";
import prisma from "../prisma";
import emailer from "../utils/emailer";

export class UserController {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("File", req.file);

      const users = await prisma.user.findMany();

      await emailer({
        to: "gregorius.gerald21@gmail.com",
        subject: "test email",
        pathToHtml: "src/emails/test.html",
        replacements: {
          name: "Gregorius Geraldin",
        }
      })

      res.status(201).send({
        data: users,
        status: "SUCCESS",
        message: "Get users successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}