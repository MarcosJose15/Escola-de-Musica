// Conexão Banco
const Sequelize = require("sequelize")
const sequelize = new Sequelize ("EscolaMusica", "root", "teste", {
    host: "localhost",
    dialect: "mysql"
});

const connection = mysql.createConnection({
    host: 'localhost',          /* //127.0.0.1/3306 */
    user: 'root',
    password: 'teste',
    database: 'EscolaMusica'
  });


  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }

sequelize.authenticate( ).then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro);
});

