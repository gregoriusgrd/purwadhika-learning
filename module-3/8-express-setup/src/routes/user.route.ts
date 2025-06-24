import { Router } from "express";
import UserController from "../controllers/user.controller";

export default class UserRoute {
  public router: Router;

  private userController: UserController;

  constructor() {
    this.router = Router();

    this.userController = new UserController();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      "/",
      this.userController.getUsers.bind(this.userController)
    );
  }
}
