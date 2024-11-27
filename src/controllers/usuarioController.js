import { configAssociations, Usuario } from '../models/associations.js';
configAssociations();

async function listarUsuarios(req, res) {
    try {
        const listaUsuarios = await Usuario.findAll();
        res.json(listaUsuarios);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
async function buscarUsuario(req, res) {
    try {
        const { id } = req.params;
        const usuarioAlvo = await Usuario.findByPk(id);
        res.status(201).json(usuarioAlvo);
    } catch (error) {
        res.status(400).json({error: error.message});
    }    
}
async function criarUsuario(req, res) {
    try {
        const { nome, endereco, email, telefone } = req.body;
        const criacaoUsuario = await Usuario.create({ nome, endereco, email, telefone });
        res.status(201).json(criacaoUsuario);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
async function atualizarUsuario(req,res) {
    try {
        const { id } = req.params;
        const { nome, endereco, email, telefone } = req.body;
        const atualizacaoUsuario = await Usuario.findByPk(id);
        await atualizacaoUsuario.update({ nome, endereco, email, telefone });
        await atualizacaoUsuario.save();
        res.status(201).json(atualizacaoUsuario);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
async function deletaUsuario(req,res) {
    try {
        const { id } = req.params;
        const delecaoUsuario = await Usuario.findByPk(id);
        await delecaoUsuario.destroy();
        res.status(201).json(delecaoUsuario);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
export { listarUsuarios, buscarUsuario, criarUsuario, atualizarUsuario, deletaUsuario };