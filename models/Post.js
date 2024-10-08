const db = require("./db")

const Post = db.sequelize.define("postagens", {
    nome: {
        type: db.Sequelize.STRING
    },

});

// Post.sync({force: true})