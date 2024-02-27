var express = require('express');
const { Server } = require('http');
var router = express.Router();
//const ip = require('ip');
//const ipAddress = ip.address() ;
'use strict';

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

//Get hostname
var os = require("os");
var hostname = os.hostname();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'microservice-b (v1.4)  TEMP: ' +  hostname , details: JSON.stringify(results) });
});

module.exports = router;
