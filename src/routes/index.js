import express from "express"
import usuarios from "./usuariosRoute.js"

function routes(app) {
    app.get("/", (req, res) => {
        res.status(200).send("Teste mongoDB!")
    })
    app.use(express.json(), usuarios)
}

export default routes;