import express, { Router, Request, Response, Application, NextFunction } from "express";
import userRoute from "./route/user.route"

const PORT = 8080;

const app: Application = express();


// MIDDLEWARE
// pasang express.json jika ingin bisa mengakases request.body
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Masuk ke application level middleware, semua route akan mengakses ini terlebih dahulu")
    next()
})

// REQUEST
// url: http://localhost:8080/api
// method: GET

app.use("/users", userRoute)

// query parameter

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});








// before (not used anymore)



/*
app.get("/api/auth", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Ini GET",
  });
});

app.post("/api/auth", (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(200).json({
    status: "OK",
    message: name,
  });
});

app.put("/api/auth", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Ini PUT",
  });
});

app.patch("/api/auth", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Ini PATCH",
  });
});

app.delete("/api/auth", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Ini DELETE",
  });
});
*/
