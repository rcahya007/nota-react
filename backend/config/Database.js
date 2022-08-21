import {Sequelize} from "sequelize";

const db = new Sequelize('freedb_nota_react','freedb_blog-root','%s@4@68t89@qxKZ',{
    host: "sql.freedb.tech",
    dialect: "mysql"
});

export default db;