import UsuariosController from "../controller/UsuariosController.js";
import express from "express"

const route = express.Router()

route.get("/usuarios", UsuariosController.busca_lista_registros)
route.get("/usuarios/:id", UsuariosController.busca_usuario)
route.post("/usuarios", UsuariosController.criar_novo_usuario)
route.put("/usuarios/:id", UsuariosController.atualizar_dados_usuario)
route.delete("/usuarios/:id", UsuariosController.deletar_usuario)

export default route;
