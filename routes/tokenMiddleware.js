const {getErr} = require('./getSendResult')
const {pathToRegexp} = require("path-to-regexp")
const jwt = require('./jwt')
const needTokenApi = [
    {method: "POST", path: '/api/admin'},
    {method: "POST", path: '/api/articleList'},
    {method: "POST", path: '/api/article'}
];

module.exports = (req, res, next)=>{
    const apis = needTokenApi.filter((api)=>{
        const reg = pathToRegexp(api.path);
        return api.method === req.method && reg.test(req.path);
    });
    if(apis.length === 0){
        next();
        return;
    }
    const result = jwt.verify(req);
    if(result){
        //认证通过
        req.userId = result.indexOf;
        next();
    }else{
        //认证失败
        handleNonToken(req, res, next);
    }
};

function handleNonToken(req, res, next){
    res.status(403).send(getErr("you dont have any token to access the api", 403))
}