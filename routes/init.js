const express = require('express')
const app = express();
const cors = require('cors');
// const history = require('connect-history-api-fallback')
// app.use(history())

//映射public目录下的静态资源
/**
 * 当请求时，会根据请求路径(req.path去掉基路径) ，从指定的目录中寻找是否存在该文件，如果存在，直接响应文件内容，而不再移交给后续的中间件
 * 如果不存在文件，则直接移交给后续的中间件处理
 * 默认情况下，如果映射的结果是一个目录，则会自动使用index.html文件，第二个参数可以配置（详情见文档）
 */
const path = require('path');
const staticRoot = path.resolve(__dirname, '../public');
//处理静态资源的请求
app.use(express.static(staticRoot,{
    setHeaders(res, path){
        if(!path.endsWith(".html")){
            res.header("Cache-Control",`max-age=${3600*24*365*100}`)
        }
    }
}));


app.use(cors());
// {
//     origin(origin, callback){
//         if(!oragin){
//             callback(null, "*");
//             return;
//         }
//         callback(null, origin);
//     },
//     credentials: true
// }
// app.use(require('./corsMiddleware'))
//解析 application/x-www-from-urlencoded格式的请求体
app.use(express.urlencoded({extended:true}));

//解析application/json格式的请求体
app.use(express.json());

app.use('/api/admin', require('./api/admin'))

//处理article请求
app.use('/api/article', require('./api/article'));

//处理author请求
app.use('/api/author', require('./api/author'));

//处理sort请求
// app.use('/api/sort', require('./api/sort'));

//处理articleList请求
app.use('/api/articleList', require('./api/articleList'));

//处理图片
app.use("/api/upload", require('./api/upload'))

//处理错误
app.use(require('./errorMiddleware'));

const port = 80;
app.listen(port, () => {
    console.log(`server listen on ${port}`)
})