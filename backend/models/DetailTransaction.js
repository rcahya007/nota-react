module.exports = (sequelize,Sequelize) => {
    const DetailTransaction = sequelize.define('detail_transactions',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_transaction: {
            type: Sequelize.INTEGER,
            references:{
                model: 'transactions',
                key: 'id'
            },
        },
        id_barang: {
            type: Sequelize.INTEGER,
            references:{
                model: 'barang',
                key: 'id'
            },
        },
        deskripsi_pembelian: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        banyak_barang: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        total_harga_barang: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
    },{
        freezeTableName: true,
    }); 
    return DetailTransaction;
}


