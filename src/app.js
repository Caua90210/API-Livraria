//Importando a biblioteca express
import express from "express";

//importando a conexão com o db connect
import conectaNaDataBase from "./config/dbconnect.js";

import routes from "./routes/index.js";


const conexao = await conectaNaDataBase();

//Tratativa de erro ao conexão do banco de dados
conexao.on("error", (erro) => {
    console.error("Erro de cone~xão", erro)
});

//Tratativa de conexão com o banco feito com sucesso
conexao.once("open", () => {
    console.log("Conexão com o banco feito com sucesso!!");
})


//Executando o express
const app = express()
routes(app);


//Middleware - São utilizados para ter acesso as requisições e modifica-las
//express.json vai ser usado para converter arquivo no body, para ser compativel com json 
// app.use(express.json())

//Criando um array de livros
// const livros = [

//     {
//             id: 1,
//             titulo: "Além do bem e do mal."

//     },
//     {
//             id: 2,
//             titulo: "Assim falou Zaratustra."
//     }

// ];

// function buscaLivros(id){
//     //findIndex(método callback) retorna em qual indice do array está determinado o elemento que passar para ele 
//     return livros.findIndex(livro =>{
//         //Convertendo id(String) em Number
//         return livro.id === Number(id);
//     });
// };

//Criando uma rota para testar express
// app.get("/", (req, res) =>{
//     res.status(200).send("Curso de Node.js")
//     res.end(rotas[req.url])
// });

//Criando Endpoint para rota livros
// app.get("/livros", async (req, res) => {
//     const listaLivros = await livro.find({})
//     res.status(200).json(listaLivros)
// });

//Criando um Endpoint para chamar um livro pelo ID
// app.get("/livros/:id", (req, res) => {

//     //Criando uma variavel que chama a função buscar livros usando o params para chamar o id
//     const index = buscaLivros(req.params.id);
    
//     //Criando uma res que chama livros com a variavel index(id)
//     res.status(200).json(livros[index]);
// });

//Criando endpoint para cadastrar livro
// app.post("/livros", (req, res) =>{
//      livros.push(req.body);
//      res.status(201).send("Livro cadastrado com sucesso!!")
// });

//Criando endpoint para alterar livro
// app.put("/livros/:id", (req, res) =>{
//     const index = buscaLivros(req.params.id)
//     livros[index].titulo = req.body.titulo;
//     res.status(200).send(livros)
    
// });

//Criando endpoint para deletar a partir do id
// app.delete("/livros/:id", (req, res) =>{
//     const index = buscaLivros(req.params.id)
//     //slipe - apagar conteudo
//     livros.splice(index, 1)
//     res.status(200).send("Livro removido com sucesso!!")
// });

//exportando para server.js
export default app;



