import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const detail_transactions = db.define('detail_transactions',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_transaction: {
        type: DataTypes.INTEGER,
        references:{
            model: 'transactions',
            key: 'id'
        },
    },
    nama_barang: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    banyak_barang: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    harga_barang: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    total_harga_barang: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
},{
    freezeTableName: true,
}); 

export default detail_transactions;