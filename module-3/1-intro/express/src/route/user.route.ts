import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get(
  "/users",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Masuk ke middlewarea METHOD GET /users");
    next();
  },
  (req: Request, res: Response) => {
    const { page, access_token } = req.query;

    res.status(200).json({
      status: "OK",
      data: [
        {
          id: 1,
          name: "budi",
        },
        {
          id: 2,
          name: "sara",
        },
        {
          id: 3,
          name: "john",
        },
      ],
      filter: {
        page,
        access_token,
      },
    });
  }
);

// ROUTER PARAMETER

router.get("/user/user:id", (req: Request, res: Response) => {
  const { userId } = req.params;

  res.status(200).json({
    status: "OK",
    data: {
      id: userId,
      name: "budi",
    },
  });
});

router.post("/users", (req: Request, res: Response) => {
  const { id, name } = req.body;

  res.status(200).json({
    status: "OK",
    data: {
      id,
      name,
    },
  });
});

router.patch("/users/:userId", (req: Request, res: Response) => {
  const { userId } = req.params;
  const { name } = req.body;

  res.status(200).json({
    status: "OK",
    data: {
      id: userId,
      name,
    },
  });
});

export default function userRoute() {

}