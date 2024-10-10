const db = require("./db");
const Post = db.sequelize.define(
  "musico",
  {
    idMusico: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    dataNascimento: {
      type: db.Sequelize.DATE,
      allowNull: false,
    },
    funcao: {
      type: db.Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "musico", // Especifica o nome da tabela
    timestamps: true, // Isso cria campos createdAt e updatedAt automaticamente
    freezeTableName: true, // Desativa a pluralização automática
  }
);

module.exports = Post;

//Post.sync({force: true})
