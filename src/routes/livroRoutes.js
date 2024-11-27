import { configAssociations } from '../models/associations.js';
configAssociations();
import { listarLivros, buscarLivro, criarLivro, atualizarLivro, deletaLivro } from "../controllers/livroController.js";
import { Router } from "express";

const livroRouter = Router();

livroRouter.get('/', listarLivros);
livroRouter.get('/:id', async (req, res) => {
    await buscarLivro(req, res)});
livroRouter.post('/', async (req, res) => { 
    await criarLivro(req, res)});
livroRouter.put('/:id', async (req, res) => {
    await atualizarLivro(req, res)});
livroRouter.delete('/:id', async (req, res) => {
    await deletaLivro(req, res)});

export default livroRouter;