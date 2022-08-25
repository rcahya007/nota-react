const dbConfig = require("../config/Database.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

const db ={}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./UserModel.js")(sequelize, Sequelize);
db.transaction = require("./TransactionModel.js")(sequelize,Sequelize);
db.detailTransaction = require("./DetailTransaction.js")(sequelize,Sequelize);
db.categoryBarang = require("./CategoryBarang.js")(sequelize,Sequelize);
db.barang = require("./Barang.js")(sequelize,Sequelize);

module.exports = db;

