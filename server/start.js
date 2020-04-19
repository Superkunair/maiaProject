const express = require('express')
const routes = require('./controllers/routes/index');
const bodyParser = require('body-parser');
const app = express();
const User = require('./database/models/defaultmodel');

    app.use('/',routes);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
app.listen('9080',()=>{
    console.log('SERVER NOW RUNNING ON PORT 9080')
})