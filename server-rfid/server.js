/* author: wahyuhadi */

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var helmet = require('helmet')
var index = require('./routes/index');
var user = require('./routes/user')
require('dotenv').config()
const app = express();
/* Cross Domain */
const allowCrossDomain = async (req, res, next) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Xss-Protection', true);
    res.header('Sql-Injection-Protection', true)
    res.header('Connection-From', ip)
    next();
};

app.use(allowCrossDomain)
app.use(helmet())
app.use(helmet.noCache())
app.use(helmet.frameguard())
app.use(bodyParser.json({limit:1024102420, type:'application/json'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json({limit:1024102420, type:'application/json'}));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());

/* for handle the routers */
app.use('/v1/', index.router);
app.use('/v1/users', user.router);



/* for app listen */
app.listen(process.env.PORT)
