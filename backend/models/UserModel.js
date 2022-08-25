module.exports = (sequelize,Sequelize) => {
    const Users = sequelize.define('users',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false,
        }
    },{
        freezeTableName: true,
        timestamps: true,
    });
    return Users;
}
