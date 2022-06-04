import { DataTypes  } from "sequelize";
import db from "../config/Database.js";

const Users = db.define('users',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: true,
});


export default Users;
