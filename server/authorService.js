const Author = require('../models/author');
const { async } = require('validate.js');

exports.addAuthor = async function(authorObj){
    //判断属性是否合理
    const ins = await Author.create(authorObj);
    return ins.toJSON();
}

exports.updateAuthor = async function(id,authorObj){
    const result = await Author.update(authorObj, {
        where: {
            id
        }
    })
    return result;
}

exports.getAuthor = async function(id){
    const result = await Author.findByPk(id);
    if(result){
        return result.toJSON();
    }
}