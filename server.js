import app from "./src/app.js"
import chalk from "chalk"

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(chalk.bgGreenBright("Servidor conectado!"))
})