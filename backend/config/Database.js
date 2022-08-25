module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "nota_react",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
};

// const { Sequelize } = require('sequelize');

// const db = new Sequelize('nota_react','root','',{
//     host: "localhost",
//     dialect: "mysql"
// });
