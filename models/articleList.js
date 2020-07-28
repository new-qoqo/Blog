const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const articleList = sequelize.define('ArticleList',{
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    article_intridyce:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    article_type:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    updatedAt: false,
})
module.exports = articleList;