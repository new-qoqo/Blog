const express = require('express')
const router = express.Router();
const arList = require('../../server/articleListService')
const article = require('../../server/articleService')



router.get('/', async (req, res)=>{
    const page = req.query.page;
    const results = await arList.getArcs(page);
    res.send(results);
});

router.post('/', async (req, res)=>{
    const datas = req.body;
    console.log(datas)
    const art = await arList.addArcHeard(datas);
    res.send(art);
});

router.put('/', async (req, res)=>{
    const id = req.body.id;
    const result = arList.updataArc()
})



module.exports = router;