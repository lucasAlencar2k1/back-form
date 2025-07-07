import express from "express"
import routes from "./routes/index.js"
import connectionDb from "./config/connectionDb.js"
import chalk from "chalk"
import cors from "cors"
import "dotenv/config"

const app = express()
app.use(cors({ origin: "*"}))
routes(app)

const connectionMongo = await connectionDb()

connectionMongo.once("open", () => {
    console.log(chalk.bgGreenBright("Conectado ao banco de dados!"))
})

connectionMongo.on("error", () => {
    console.log(chalk.bgRedBright("Falha ao se conctar ao banco!"))
})

export default app;