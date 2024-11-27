import { configAssociations, Livro } from '../models/associations.js';
configAssociations();

async function listarLivros(req, res) {
    try {
        const listaLivros = await Livro.findAll();
        res.json(listaLivros);
    } catch (error) {
        res.status(400).json({error: error.menssage});
    }
}
async function buscarLivro(req, res) {
    try {
        const { id } = req.params;
        const livroAlvo = await Livro.findByPk(id);
        res.status(201).json(livroAlvo);
    } catch (error) {
        res.status(400).json({error: error.menssage});
    }    
}
async function criarLivro(req, res) {
    try {
        const { titulo, autor, genero, ano_publicacao } = req.body;
        const criacaoLivro = await Livro.create({ titulo, autor, genero, ano_publicacao });
        res.status(201).json(criacaoLivro);
    } catch (error) {
        res.status(400).json({error: error.menssage});
    }
}
async function atualizarLivro(req,res) {
    try {
        const { id } = req.params;
        const { titulo, autor, genero, ano_publicacao } = req.body;
        const atualizacaoLivro = await Livro.findByPk(id);
        await atualizacaoLivro.update({ titulo, autor, genero, ano_publicacao });
        await atualizacaoLivro.save();
        res.status(201).json(atualizacaoLivro);
    } catch (error) {
        res.status(400).json({error: error.menssage});
    }
}
async function deletaLivro(req,res) {
    try {
        const { id } = req.params;
        const delecaoLivro = await Livro.findByPk(id);
        await delecaoLivro.destroy();
        res.status(201).json(delecaoLivro);
    } catch (error) {
        res.status(400).json({error: error.menssage});
    }
}
export { listarLivros, buscarLivro, criarLivro, atualizarLivro, deletaLivro };