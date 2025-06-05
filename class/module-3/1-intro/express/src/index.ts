import express, { Request, Response, Application } from "express"

const PORT = 8080;

const app: Application = express();

// REQUEST
// url: http://localhost:8080/api
app.get("/api", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "/api",
    })
})

app.get("/api/auth", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "Ini GET"
    })
})

app.post("/api/auth", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "Ini POST"
    })
})

app.put("/api/auth", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "Ini PUT"
    })
})

app.patch("/api/auth", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "Ini PATCH"
    })
})

app.delete("/api/auth", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "Ini DELETE"
    })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

