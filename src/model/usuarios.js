import mongoose from "mongoose"

const usuarios_schema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    email: { type: String },
    senha: { type: String }
}, { versionKey: false })

const usuario = mongoose.model("usuarios", usuarios_schema)

export default usuario;