const ArList = require('../models/articleList');

exports.addArcHeard = async function(arObj){
    //添加文章的标题和简介
    if(!arObj.title){
        return "标题不存在";
    }
    const title = ArList.findOne({where:{title: arObj.title}})
    if(title){
        const art = await ArList.create(arObj);
        return art.toJSON();
    }
    return title;
}
//删除文章
exports.deleteArc = async function(arcId){
    
        const result = await ArList.destroy({
            where:{
                id: arcId
            }
        })
   
}

//修改文章
exports.updataArc = async function(id, arcObj){
    
        const result = await ArList.update(arcObj,{
            where :{
                id
            }
        })
        return result;
    
}

//获取文章
exports.getArcs = async function(page = 1, limit = 10){
    const result = await ArList.findAll({
        offset: (page - 1) * limit,
        limit: +limit
    });
    const total = await ArList.count();
    const datas = JSON.parse(JSON.stringify(result));//先转化成JSON字符串，再转换成JS对象
    return {
        total,
        datas
    }
}

