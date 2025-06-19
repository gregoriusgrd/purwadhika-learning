import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";

import { PORT, BASE_FE_URL } from "./config"; // url domain website
import userRoute from "./route/user.route";

const corsOptions = {
  origin: BASE_FE_URL || "http://localhost:3000", // website mana yang boleh akses, cth: domain website kita
};

const port = PORT || 8080;

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

// ROUTE
app.use("/api/auth", userRoute);

// ERROR HANDLING MIDDLEWARE
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send("Something went wrong");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
