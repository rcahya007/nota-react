import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import category_barang from "./CategoryBarang.js";

const barang = db.define('barang',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_barang:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    harga_barang:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_category_barang:{
        type: DataTypes.INTEGER,
        references:{
            model: 'category_barang',
            key: 'id_category'
        },
    },
    stok_barang:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    deskripsi_barang:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    foto_barang:{
        type: DataTypes.STRING,
        allowNull: true,
    }
},{
    freezeTableName: true,
});

export default barang;
