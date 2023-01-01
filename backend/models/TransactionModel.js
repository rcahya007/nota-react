module.exports = (sequelize,Sequelize) => {
    const TransactionModel = sequelize.define('transactions',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        total_semua:{
            type: Sequelize.FLOAT,
            allowNull:true
        },
        uang_bayar:{
            type: Sequelize.INTEGER,
            allowNull:true
        },
        uang_kembali:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        nama_pembeli:{
            type: Sequelize.STRING,
            allowNull: true
        },
        pembuat:{
            type: Sequelize.STRING,
            allowNull: true
        },
        metode_pembayaran:{
            type: Sequelize.STRING,
            allowNull: true 
        },
        jenis_transaksi: {
            type: Sequelize.STRING,
            allowNull: true
        },
        bukti_tf:{
            type: Sequelize.STRING,
            allowNull: true
        },
        url:{
            type: Sequelize.STRING,
            allowNull: true
        }
    },{
        freezeTableName: true,
        timestamps: true,
    });
    return TransactionModel;
}


