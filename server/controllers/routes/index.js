const routes = require('express').Router();
const sgMail = require('@sendgrid/mail');
const messages = require('../messages/messages');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'mercado_axel@hotmail.com',
    from: 'mercado_axel@hotmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

routes.get('/',(request,response)=>{
    response.status(200).json(messages.welcome);
})

routes.get('/maintenance',(request,response)=>{
    response.status(200).json(messages.maintenance);
})
//test route to send mail
routes.get('/mail',(request,response)=>{
    sgMail.send(msg).then(() => {
        response.status(200).json(messages.maintenance);
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })
})
module.exports = routes;