import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const CategoryBarang = db.define('category_barang',{
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

export default CategoryBarang;