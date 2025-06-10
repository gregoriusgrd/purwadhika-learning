import { Request, Response, NextFunction } from "express";

export function GetUsersController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
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
    };
  } catch (err) {
    next(err);
  }
}
