const express = require('express')
const router = express.Router();
const sortSev = require('../../server/sortService');

router.post('/', async (req, res)=>{
    const result = await sortSev.addSort(req.body);
    res.send(result);
})

router.get('/:id', async (req, res)=>{
    const className = await sortSev.getSort(req.query.sort_name);
    res.send(className);
})

router.get('/', async (req, res)=>{
    const cla = await sortSev.getSortAll();
    res.send(cla);
})

module.exports = router;