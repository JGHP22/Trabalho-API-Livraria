import { Op } from "sequelize";
import { configAssociations, Livro, Usuario, Registro} from '../models/associations.js';
import { atualizarLivro, listarLivros } from "./livroController.js";
import { atualizarUsuario, listarUsuarios } from "./usuarioController.js";
configAssociations();

//EmprestarLivro(), DevolverLivro(), LivrosPopulares(), UsuariosPendentes()
async function EmprestarLivro(email, titulo, res) {

    try { 
        const usuario = await listarUsuarios({ where: { email: email, n_registro_ativo: { [Op.lt]: 4 }}});

    if (!usuario) {
        throw new Error('Usuário não encontrado ou limite de registros atingido.');
        };

        const livro = await listarLivros({ where: { titulo: {[Op.iLike]: titulo}, disponivel: true }});
    
    if (!livro) {
        throw new Error('Livro não encontrado.');
        };

        const data_emprestimo = moment().format("YYYY-MM-DD");
        const data_devolucao_prevista = moment().add(14, "days").format("YYYY-MM-DD");

        const registro = await Registro.create({
            id_livro: livro.id,
            id_usuario: usuario.id,
            data_emprestimo: data_emprestimo,
            data_devolucao_prevista: data_devolucao_prevista
        });
        
        await Livro.update({ disponivel: false }, { where: { id_livro: livro.id_livro } });
        await Usuario.update({ n_registro_ativo: usuario.n_registro_ativo+1}, {where:{id_usuario: usuario.id_usuario}});

        res.status(201).json(registro);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
async function a(req, res) {
    try {
        res.status(201).json();
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
async function a(req, res) {
    try {
        res.status(201).json();
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
async function a(req, res) {
    try {
        res.status(201).json();
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
export { EmprestarLivro };