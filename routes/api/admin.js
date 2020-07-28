const express = require('express');
const router = express.Router();
const adminServ = require('../../server/adminService')
const { asyncHandler } = require("../getSendResult");
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('../jwt')

router.post(
    '/login',
    asyncHandler(async (req, res)=>{
        const result = await adminServ.login(req.body.loginId, req.body.loginPwd);
        if(result){
            let value = result.id;
            jwt.publish(res, undefined, {id: value})
        }
        return result;
    })
),

router.post('/', (req,res)=>{
    adminServ.addAdmin(req.body);
})

module.exports = router;