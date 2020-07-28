// const Sort = require('../models/sort')
// const { async } = require('validate.js')

// exports.addSort = async function(sortObj){
//     const there = await Sort.findOne({where:{sort_name: sortObj.sort_name}});
//     if(there){
//         return there;
//     }
//     const s = await Sort.create(sortObj);
//     return s.toJSON;
// }

// exports.updataSort = async function(id,sortObj){
//     const result = await Sort.update(sortObj,{
//         where:{
//             id: id
//         }
//     })
//     return result;
// }

// exports.deleteSort = async function(id){
//     const result = await Sort.destroy({
//         where:{
//             id: id
//         }
//     })
// }

// exports.getSort = async function(className){
//     const result = await Sort.findOne({where:{sort_name:className}});
//     return JSON.parse(JSON.stringify(result))
// }

// exports.getSortAll = async function(){
//     const result = await Sort.findAll();
//     return JSON.parse(JSON.stringify(result))
// }