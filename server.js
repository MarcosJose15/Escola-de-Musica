const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'nome_do_banco'
});

connection.connect(err => {
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

/*app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}*/