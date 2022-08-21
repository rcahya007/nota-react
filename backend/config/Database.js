import {Sequelize} from "sequelize";

const db = new Sequelize('freedb_nota_react','freedb_blog-root','9Dt7jW*d@7nuDK6',{
    host: "sql.freedb.tech",
    dialect: "mysql"
});

export default db;