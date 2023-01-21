const express=require('express');
const engine=require('ejs-mate');
const session=require('express-session');
const path=require('path');
const app=express();
const ip = require('ip');

// Settings
require('dotenv').config();
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine','ejs');

// Middlewares
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false
}));

// Routes
app.use(require('./routes/routes'));

// server is listening
app.listen(app.get("port"), () => {
    console.log("Server on port http://localhost:"+ app.get("port"));
    console.log("On your network: http://"+ ip.address() +":"+ app.get("port"));
});