const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const Article = sequelize.define('Article',{
    content:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    imgurl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    comment_count:{
        type: DataTypes.BIGINT,
    }
},{
    paranoid: true
});


// (async function(){
//     await Admin.sync({
//         alter: true
//     })
// })()

module.exports = Article