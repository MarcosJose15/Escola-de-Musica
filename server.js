const express = require("express");
const mysql = require('mysql2');
const app = express();
const  { engine }  = require("express-handlebars");
const bodyParser = require("body-parser");
const port = 8083;

//Config
//Template Engine
app.engine("handlebars", engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Conexão Banco
const Sequelize = require("sequelize")
const sequelize = new Sequelize ("EscolaMusica", "root", "teste", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate( ).then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro);
});

const connection = mysql.createConnection({
  host: 'localhost',          /* //127.0.0.1/3306 */
  user: 'root',
  password: 'teste',
  database: 'EscolaMusica'
});

app.get("/site", function(req, res){
  res.sendFile(__dirname + "/html/index.html");
});

// Rota para visualizar os dados
app.get('/dados', (req, res) => {
  connection.query('SELECT * FROM EscolaMusica', (error, results) => {
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