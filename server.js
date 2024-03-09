

//npm init -y

//npm install nodemon@3.0.1 - instalar nodemon

//npm run dev - Para inicializar o nodemon



//Importando biblioteca http do proprio node.
// import http from "http";

import "dotenv/config.js"
import app from "./src/app.js";




//Passando uma informação estática com a variavel 3000
const PORT = 3000;

//Criando uma rota a partir de um objeto JSON.
const rotas = {
    "/" : "Curso de Node.js",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
};

//Criando o servidor local http.
// const server = http.createServer((req, res)=>{

//     //definindo o cabeçalho da response.
//     res.writeHead(200, {"content-Type": "text/plain"});

//     //Chamando a propiedade url(propriedade do objeto req)
//     res.end(rotas[req.url]);
// });

//Usando o método listen para conexões a esse server na porta lógica 3000
app.listen(3000, () =>{
    console.log("Servidor funcionando!!!");
});

