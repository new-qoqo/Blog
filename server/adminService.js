const md5 = require('md5')
const Admin = require('../models/admin')
exports.addAdmin = async function(adminObj){
    //判断adminObj的各种属性是否合理，以及账号是否存在
    adminObj.loginPwd = md5(adminObj.loginPwd);
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
}
exports.deleteAdmin = async function(adminId){
    const result = await Admin.destroy({
        where :{
            id : adminId
        }
    })
}

exports.updateAdmin = async function(id,adminObj){
    if(adminObj,loginPwd){
        adminObj.loginPwd = md5(adminObj.loginPwd);
    }
    const result = await Admin.update(adminObj, {
        where : {
            id
        }
    })
    return result;
}

exports.login = async function(loginId, loginPwd){
    loginPwd = md5(loginPwd);
    const result = await Admin.findOne({
        where : {
            loginId,
            loginPwd,
        }
    });
    if(result && result.loginId === loginId){
        return result.toJSON();
    }
    return null
}

exports.getAdminById = async function(id){
    const result = await Admin.findByPk(id);
    if(result){
        return result.toJSON();
    }
    return null;
}

exports.getAdmins = async function(){
    const result = await Admin.findAll();
    return JSON.parse(JSON.stringify(result))
}