// Conexão Banco

const Sequelize = require("sequelize");
const mysql = require('mysql');

const sequelize = new Sequelize ("escolaMusica1", "root", "teste", {
    host: "localhost",
    dialect: "mysql" 
});

sequelize.authenticate( ).then(function(){
  console.log("Conectado com sucesso!")
}).catch(function(erro){
  console.log("Falha ao se conectar: "+erro);
}); 
/*
-- CRIA TABELAS --
sequelize.sync({ alter: true }).then(() => {
  console.log("Músico inserido com sucesso!");
}).catch((erro) => {
  console.log("Erro ao inserir músico: " + erro);
});
*/

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}



