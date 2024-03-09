import express from "express";

import LivroController from "../controllers/livroController.js";

const routes = express.Router();

/************************************    GET   ***********************************/

//Todos os livros
routes.get("/livros", LivroController.listarLivros)

//Busca por editora
routes.get("/livros/busca", LivroController.listarLivrosPorEditora)

//Listando livro por ID
routes.get("/livros/:id", LivroController.listarLivrosById)



/************************************    POST   **********************************/

//Criando um novo livro
routes.post("/livros", LivroController.cadastrarLivro)

/************************************    PUT   ***********************************/

//Atualizando um novo livro
routes.put("/livros/:id", LivroController.AtualizarLivro)

/************************************    DELETE   ********************************/

routes.delete("/livros/:id", LivroController.excluirLivro)

export default routes;