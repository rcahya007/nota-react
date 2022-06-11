import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import Barang from "./Barang.js";

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

// CategoryBarang.hasMany(Barang,{
//     foreignKey:'id_category_barang'
// },
// Barang.belongsTo(CategoryBarang));

export default CategoryBarang;