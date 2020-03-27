const { createContainer, asClass, asValue, asFunction} = require('awilix');

//service

const {HomeService} = require('../services')

const container = createContainer();

container.register({
    HomeService : asClass(HomeService).singleton()
})

module.exports = container