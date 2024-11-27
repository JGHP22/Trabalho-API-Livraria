import express from 'express';
import livroRouter from './src/routes/livroRoutes.js';
import usuarioRouter from './src/routes/usuarioRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/livro', livroRouter);
app.use('/usuario', usuarioRouter);

export default app;