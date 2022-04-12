var express = require('express');
var router = express.Router();

const ip = require('ip');
const ipAddress = ip.address() ;

//var os = require("os");
//var hostname = os.hostname();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<div style="font-family: Verdana ; font-size: 28">Hello from serviceb: ' +  ipAddress + '</div>\n');
});

module.exports = router;
