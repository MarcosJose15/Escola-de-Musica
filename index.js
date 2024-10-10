const express = require("express");
const mysql = require('mysql2');
const { engine }  = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post.js");
const port = 8081;
const app = express();

// Config
// Template Engine
  app.engine("handlebars", engine({defaultLayout: "main"}));
  app.set("view engine", "handlebars");

  // Body Parser
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  // Rotas
  app.get("/cad", function(req, res){
    res.render("cadastro")
  });

  app.get("/", function(req, res){
    res.render("home");
  });

  app.post("/add", function(req, res){
    console.log(req.body); // Adicione esta linha para verificar os dados recebidos
    Post.create({
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone,
      dataNascimento: req.body.dataNascimento,
      funcao: req.body.funcao
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)
    });
    /*res.send("Formulário Recebido! "+req.body.nome+" "+req.body.dataNascimento+" "+req.body.funcao+" "+req.body.senha+" "+" ")*/
  });


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});



 /* Site
app.get("/site", function(req, res){
  res.sendFile(__dirname + "/html/index.html");
});

// Rota para visualizar os dados
app.get('/dados', (req, res) => {
  connection.query('SELECT * FROM escolaMusica1', (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});



/*connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar: ' + err.stack);
    return;
  }
  console.log('Conectado como ID ' + connection.threadId);
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM tabela', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}*/