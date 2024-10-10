const express = require("express");
const mysql = require('mysql2');
const app = express();
const  { engine }  = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post.js")
const port = 8081;

// Config
// Template Engine
app.engine("handlebars", engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Rotas
app.get("/cad", function(req, res){
  res.render("cadastro")
});

app.get("/", function(req, res){
  //res.render("home")
});

app.post("/add", function(req, res){
  Post.create({
    nome: req.body.nome,
    dataNascimento: req.body.dataNascimento,
    email: req.body.email,
    telefone: req.body.telefone,
    posicao: req.body.posicao
  }).then(function(){
      res.redirect("/")
  }).catch(function(erro){
      res.send("Houve um erro: " + erro)
  })
  //res.send("Formulário Recebido! "+req.body.nome+" "+req.body.dataNascimento+" "+req.body.funcao+" "+req.body.senha+" "+" ")
});

// Site
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

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
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