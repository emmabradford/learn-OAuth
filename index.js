var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var guard = require('express-jwt-permissions')();

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit:true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-9c3c8d9h.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://www.challenges-api.com',
    issuer: 'https://dev-9c3c8d9h.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/challenges', guard.check(['read:challenges']), function (req, res){
    res.json({challenge1: "challenge numero uno", challenge2: "challenge numero dos"});
});

app.listen(port);