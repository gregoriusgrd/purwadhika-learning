import express from "express"

import userRoute from "./route/user.route"

const port = 8080;

const app = express();

// MIDDLEWARE
app.use(express.json())

// ROUTE
app.use("/api/auth", userRoute)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})