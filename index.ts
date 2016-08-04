/// <reference path="typings/globals/node/index.d.ts" />
/// <reference path="typings/globals/express/index.d.ts" />
var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

var urlMongo = "localhost";
var url = "http://localhost";
var port = 4042;
var allowInsecureHTTP = true;

var server = new ParseServer({
    databaseURI: 'mongodb://'+urlMongo+':27017/notitec',
    appId: "AppNotItver",
    masterKey: 'E12020847',
    serverURL: url+':'+port,
    push: {
        android: {
            senderId: '730543388104',
            apiKey: 'AIzaSyB1R5ZfTtELINtUF57DKW_bXCkLSv0uR48'
        }
    }
});

var server2 = new ParseServer({
    databaseURI: 'mongodb://'+urlMongo+':27017/parse',
    appId: "AppNotItver2",
    masterKey: 'E12020848',
    serverURL: url+':'+port,
    push: {
        android: {
            senderId: '730543388104',
            apiKey: 'AIzaSyB1R5ZfTtELINtUF57DKW_bXCkLSv0uR48'
        }
    }
});

var dashboard = new ParseDashboard({
    "apps": [
        {
            "serverURL": url+":"+port+"/parse",
            "appId": "AppNotItver",
            "masterKey": "E12020847",
            "appName": "Nombre"
        },
        {
            "serverURL": url+":"+port+"/parse2",
            "appId": "AppNotItver2",
            "masterKey": "E12020848",
            "appName": "Nombre2"
        }
    ],
    "users": [
        {
            "user": "administrador",
            "pass": "newyork1209",
            "apps": [
                {
                    "appId": "AppNotItver"
                },
                {
                    "appId": "AppNotItver2"
                }
            ]
        }
    ]
}, allowInsecureHTTP);

var app = new express();
app.use('/parse',server);
app.use('/parse2',server);
app.use('/dashboard',dashboard);
var httpServer = require('http').createServer(app);
httpServer.listen(port);
