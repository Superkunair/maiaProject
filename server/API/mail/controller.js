const apiMessages = require('../apiResponses.json');
const messaging = require('./mail');
const routes = require('express').Router();
const sgMail = require('@sendgrid/mail');
const {success,failed,info} = apiMessages.mail;
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

routes.get('/mail', (request,response)=>{
        response.status(200).json(info);
})

//check the post reference of express
routes.post('/mail/send',(request,response)=>{
    const {email,name,telephone,comment} = request.body.data;
        const msg = messaging.getNewFormMessage(email,comment,name,telephone);
    sgMail.send(msg).then(() => {
        response.status(200).json(success);
    }).catch((error) => {
        response.status(400).json(failed);
        console.log(error.response.body)
    })
})
module.exports = routes;