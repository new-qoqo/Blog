const articleList = require('./articleList')
const article = require('./article')
// const sort = require('./sort')

articleList.belongsTo(article);
// article.hasOne(articleList)
// articleList.belongsTo(sort);
// sort.hasMany(articleList);


