import { configAssociations, Registro } from '../models/associations.js';
import { buscarLivro, atualizarLivro } from "./livroController.js";
import { buscarUsuario, atualizarUsuario } from "./usuarioController.js";
configAssociations();

//EmprestarLivro(), DevolverLivro(), LivrosPopulares(), UsuariosPendentes()
async function EmprestarLivro(livro, usuario, res) {
    try {
        const { id_livro } = livro.params;
        const { id_usuario } = usuario.params;
        const livroAlvo = buscarLivro(id_livro);
        console.log(livroAlvo);
        res.status(201).json();
    } catch (error) {
        res.status(400).json({error: error.menssage});
    }
}
async function a(req, res) {
    try {
        res.status(201).json();
    } catch (error) {
        res.status(400).json({error: error.menssage});
    }
}
async function a(req, res) {
    try {
        res.status(201).json();
    } catch (error) {
        res.status(400).json({error: error.menssage});
    }
}
async function a(req, res) {
    try {
        res.status(201).json();
    } catch (error) {
        res.status(400).json({error: error.menssage});
    }
}
export { EmprestarLivro };