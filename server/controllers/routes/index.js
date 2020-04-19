const routes = require('express').Router();
const messages = require('../messages/messages');

routes.get('/',(request,response)=>{
    response.status(200).json(messages.welcome);
})

routes.get('/maintenance',(request,response)=>{
    response.status(200).json(messages.maintenance);
})

module.exports = routes;