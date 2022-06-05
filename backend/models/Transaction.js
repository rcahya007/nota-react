import { DataTypes } from "sequelize/types";
import db from "../config/Database";

const Transaksi = db.define('transactions',{
    total_semua:{
        type: DataTypes
    },

});

export default Transaksi;
