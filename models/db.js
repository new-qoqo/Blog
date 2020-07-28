const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('Blog', 'root', 'five5-qiu', {
    host: '39.105.182.195',
    dialect:'mysql',
    logging: null
});

module.exports = sequelize;