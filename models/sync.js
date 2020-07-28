require('./admin');
require('./article');
require('./author');
// require('./sort')
require('./articleList')
const sequelize = require('./db');
sequelize.sync({alter: true}).then(console.log('模型同步成功'))  