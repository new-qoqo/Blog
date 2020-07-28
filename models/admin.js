const sequelize = require('./db');
const {DataTypes} = require('sequelize');
//创建一个模型对象
const Admin = sequelize.define('Admin',{
    loginId:{
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: true,
    paranoid: true //该表的数据不会被真正的删除，而是增加一列deletedAt，记录删除的时间
});


module.exports = Admin;