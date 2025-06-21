// template (?)

import express, { Request, Response, Application, NextFunction } from "express";
import userRoute from "./route/user.route";
import expenseRoute from "./route/expense.route";
import db from "./db";

const PORT = 8080;

const app: Application = express();

// MIDDLEWARE
// pasang express.json jika ingin bisa mengakses request.body
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(
    "Masuk application level middleware, semua route akan mengakses ini terlebih dahulu"
  );
  next();
});

// REQUEST
// url: http://localhost:8080/api
// method: GET

// ROUTES

app.use("/expenses", expenseRoute);

app.get("/students", async (req: Request, res: Response) => {
  try {
    const data = await db.query("SELECT * FROM purwadhika.student");

    res.status(200).json({
      status: "OK",
      data: data.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      status: "NG",
      message: err?.message,
    });
  }
});

app.post("/students", async (req: Request, res: Response) => {
  try {
    const { firstname, lastname } = req.body;
    const data = await db.query(
      "INSERT INTO purwadhika.student(firstname, lastname) values($1, $2) RETURNING *",
      [firstname, lastname]
    );

    res.status(200).json({
      status: "OK",
      data: data.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      status: "NG",
      message: err?.message,
    });
  }
});

// CHECK DB CONNECTION
db.connect((err, client, release) => {
  if (err) {
    release();
    return console.log("DB connection failed", err.stack);
  }

  console.log("DB connected successfully");
  release();
});

// START SERVER

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
