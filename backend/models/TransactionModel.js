import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const transactions = db.define('transactions',{
    total_semua:{
        type: DataTypes.FLOAT,
        allowNull:true
    },
    uang_bayar:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    uang_kembali:{
        type: DataTypes.FLOAT,
        allowNull: true
    },
    nama_pembeli:{
        type: DataTypes.STRING,
        allowNull: true
    },
    pembuat:{
        type: DataTypes.STRING,
        allowNull: true
    },
    metode_pembayaran:{
        type: DataTypes.STRING,
        allowNull: true 
    },
    jenis_transaksi: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bukti_tf:{
        type: DataTypes.STRING,
        allowNull: true
    },
    url:{
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    freezeTableName: true,
    timestamps: true,
});

export default transactions;
