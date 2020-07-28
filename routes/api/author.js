const express = require('express');
const router = express.Router();
const auSer = require('../../server/authorService')

//获取作者
router.get('/', async (req, res)=>{
    // const result = auSer.getAuthor
    const id = req.query.id;
    console.log(id);
    const result = await auSer.getAuthor(id);
    res.send(result);
});

router.post('/' , async (req, res)=>{
    const result = await auSer.addAuthor(req.body);
});



module.exports = router;