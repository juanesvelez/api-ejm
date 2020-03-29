const { createContainer, asClass, asValue, asFunction} = require('awilix');

//config

const config = require('../config')
const app = require('.')

//service
const {HomeService} = require('../services')

//controllers
const { HomeController } = require('../controllers')

//routes
const { HomeRoutes } = require('../routes/index.routes')
const Routes = require('../routes')

//models
const {User, Comment, Idea} = require('../models')

//repositories

const {UserRepository, CommentRepositoy,IdeaRepository} = require('../repositories');


const container = createContainer();

container
   .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    HomeService : asClass(HomeService).singleton()
}).register({
    HomeController : asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton() 
}).register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
}).register({
    UserRepository : asClass(UserRepository).singleton(),
    IdeaRepository : asClass(IdeaRepository).singleton(),
    CommentRepositoy : asClass(CommentRepositoy).singleton()
})

module.exports = container