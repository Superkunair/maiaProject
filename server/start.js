const express = require('express')
const routes = require('./API/mail/controller');
const bodyParser = require('body-parser');
const app = express();
const database = require('./Repository/adapters/connect');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
    app.use('/',routes);
app.listen('9080',()=>{
    console.log('SERVER NOW RUNNING ON PORT 9080')
// This is the dataBase connection uncomment to test database.establishDBConnection();
})