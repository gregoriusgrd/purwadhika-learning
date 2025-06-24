import express, { Express, json, Request, Response, urlencoded } from "express"
import cors from "cors"
import UserRoute from "./routes/user.route";
import { url } from "inspector";

const PORT = 8000

export default class App {
    private app: Express

    constructor() {
        this.app = express();

        this.configure();
    }

    private configure(): void {
        this.app.use(cors())
        this.app.use(json())
        this.app.use(urlencoded({extended: true}))
    }

    private initializeRoutes () {
        this.app.get('/', (req: Request, res: Response) => {
            res.status(200).send("Hello Purwadhika")
        })

        this.app.use("/users")
    }

    public start() :void {
        this.app.listen(PORT, () => {
            console.log(`App is running on PORT: ${PORT}`)
        })
    }
}