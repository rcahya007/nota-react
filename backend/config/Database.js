import {Sequelize} from "sequelize";

const db = new Sequelize('nota_react','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;