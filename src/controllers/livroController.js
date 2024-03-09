import livro from "../models/livro.js";
import { autor } from "../models/Autor.js";
import { query } from "express";

class LivroController {

    //GET LIVROS
    static async listarLivros (req, res){
        try {
        const listaLivros = await livro.find({})
        res.status(200).json(listaLivros)
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição dos livros.`})
        }
    };

    static async listarLivrosById (req, res){
        try {
            const id = req.params.id
            const livroEncontrado =  await livro.findById(id)
        res.status(200).json(livroEncontrado)
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição dos livros do livro`})
        }
    };

    //POST LIVROS

    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;
        try {
          const autorEncontrado = await autor.findById(novoLivro.autor);
          const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
          const livroCriado = await livro.create(livroCompleto);
          res.status(201).json({ message: "criado com sucesso", livro: livroCriado });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
      }
    

    //PUT
    static async AtualizarLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "Livro atualizado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na Atualização do livro`})
        };
    };

    static async excluirLivro (req, res) {
        try {
          const id = req.params.id;
          await livro.findByIdAndDelete(id);
          res.status(200).json({ message: "livro excluído com sucesso" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
      };

      static async listarLivrosPorEditora (req, res) {
            const editora = req.query.editora
            try {
                const livrosPorEditora = await livro.find({ editora : editora })
                res.status(200).json(livrosPorEditora)
            } catch (erro) {
                res.status(500).json({ message: "Falha na busca"})
            }
      }

    

};


export default LivroController;