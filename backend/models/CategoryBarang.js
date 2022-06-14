import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import Barang from "./Barang.js";

const category_barang = db.define('category_barang',{
    id_category:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    category: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false,
});

export default category_barang;