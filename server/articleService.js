const Article = require('../models/article');
const { async } = require('validate.js');

exports.addArticle = async function(articleObj){
    const r = await Article.create(articleObj);
    return r.toJSON();
}

exports.getArticle = async function(id){
    const t = await Article.findByPk(id);
    return JSON.parse(JSON.stringify(t));
}

exports.deleteArticle = async function(id){
    await Article.destroy({
        where: {
            id: id
        }
    })
}

exports.updataArticle = async function(id,articleObj){
    const result = await Article.update(articleObj,{
        where:{
            id
        }
    });
    if(result){
        return {
            status: 200,
            type: 'success'
        }
    }
}