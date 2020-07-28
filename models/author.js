const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const Author = sequelize.define('Author',{
    author_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author_talk : {
        type: DataTypes.STRING,
        allowNull: true
    },
    author_img:{
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    paranoid: true
})

module.exports = Author;