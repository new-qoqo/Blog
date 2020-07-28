const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, path.resolve(__dirname,"../../public/upload"))
    },
    filename: function(req, file, cb){
        //时间戳-6位随机字符.文件后缀
        const timeStamp = Date.now();
        const randomStr = Math.random().toString(36).slice(-6);
        const ext = path.extname(file.originalname); // 客户端文件名称
        const filename = `${timeStamp}-${randomStr}${ext}`;
        cb(null, filename)
    }
})


const upload = multer({
    storage,
    fileFilter(req, file, cb){
        //验证文件后缀名
        const extname = path.extname(file.originalname);
        const whitelist = ['.jpg','.gif','.jpeg','.png'];
        if(whitelist.includes(extname)){
            cb(null, true);
        }else{
            cb(new Error(`your ext name of ${extname} is not support`))
        }
    }
})

router.post('/', upload.single('image'),(req,res)=>{
    const url = `http://`+ req.headers.host +`/upload/${req.file.filename}`;
    res.send({
        code:0,
        mag: "",
        data:url
    })
})

module.exports = router;