const express = require("express")
const router = express.Router();
const article = require('../../server/articleService')

//获取文章
router.get('/:id',async (req, res)=>{
    const id = req.query.id;
    const result = await article.getArticle(id);
    res.send(result);
});

//添加文章
router.post('/',async (req,res)=>{
    const content = req.body;
    const result = await article.addArticle(content);
    res.send(result);
});

router.post('/modify', async(req, res)=>{
    const content = req.body.article;
    const id = req.body.id;
    const result = await article.updataArticle(id,content);
    res.send(result);
})

//删除文章
router.delete('/:id',(req, res)=>{
    res.send('删除一篇文章')
})



module.exports = router;

