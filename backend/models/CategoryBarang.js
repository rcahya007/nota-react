module.exports = (sequelize,Sequelize) => {
    const CategoryBarang = sequelize.define('category_barang',{
        id_category:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category: {
            type: Sequelize.STRING
        }
    },{
        freezeTableName: true,
        timestamps: false,
    });
    return CategoryBarang;
}