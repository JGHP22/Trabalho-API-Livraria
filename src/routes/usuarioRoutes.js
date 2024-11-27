import { configAssociations } from '../models/associations.js';
configAssociations();
import { listarUsuarios, buscarUsuario, criarUsuario, atualizarUsuario, deletaUsuario } from "../controllers/usuarioController.js";
import { Router } from "express";

const usuarioRouter = Router();

usuarioRouter.get('/usuario', listarUsuarios);
usuarioRouter.get('/usuario/:id', async (req, res) => {
    await buscarUsuario(req, res)});
usuarioRouter.post('/usuario', async (req, res) => { 
    await criarUsuario(req, res)});
usuarioRouter.put('/usuario/:id', async (req, res) => {
    await atualizarUsuario(req, res)});
usuarioRouter.delete('/usuario/:id', async (req, res) => {
    await deletaUsuario(req, res)});

export default usuarioRouter;