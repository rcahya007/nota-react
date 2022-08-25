module.exports = (sequelize,Sequelize) => {
    const Barang = sequelize.define('barang',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama_barang:{
            type: Sequelize.STRING,
            allowNull: true,
        },
        harga_barang:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        id_category_barang:{
            type: Sequelize.INTEGER,
            references:{
                model: 'category_barang',
                key: 'id_category'
            },
        },
        stok_barang:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        deskripsi_barang:{
            type: Sequelize.TEXT,
            allowNull: true,
        },
        foto_barang:{
            type: Sequelize.STRING,
            allowNull: true,
        },
        url:{
            type: Sequelize.STRING,
            allowNull: true,
        }
    },{
        freezeTableName: true,
    });
    return Barang;
}
