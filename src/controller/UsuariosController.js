import usuario from "../model/usuarios.js";

class UsuariosController {
    static async busca_lista_registros(req, res) {
        try {
            const lista = await usuario.find({})
            res.status(200).json(lista)
        } catch (error) {
            res.status(500).send("Falha ao buscar lista de registro!!!")
        }
    }

    static async busca_usuario(req, res) {
        try {
            const id = req.params.id
            const usuario_encontrado = await usuario.findById(id)
            res.status(200).json(usuario_encontrado)
        } catch (error) {
            res.status(500).send("Usuário não encontrado!!!")
        }
    }

    static async criar_novo_usuario(req, res) {
        try {
            const dados_usuario = req.body
            await usuario.create(dados_usuario)
            res.status(201).send("Usuario criado!")
        } catch (error) {
            res.status(500).send("Falha ao criar usuario!!!")
        }
    }

    static async atualizar_dados_usuario(req, res) {
        try {
            const id = req.params.id
            const novos_dados = req.body
            await usuario.findByIdAndUpdate(id, novos_dados)
            res.status(200).send("Dados atualizado!")
        } catch (error) {
            res.status(500).send("Falha ao fazer atualização!!!")
        }
    }

    static async deletar_usuario(req, res) {
        try {
            const id = req.params.id
            await usuario.findByIdAndDelete(id)
            res.status(200).send("Usuário deletado!")
        } catch (error) {
            res.status(500).send("Falha ao remover usuário!!!")
        }
    }
}

export default UsuariosController;