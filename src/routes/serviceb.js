var express = require('express');
var router = express.Router();

//Get hostname
var os = require("os");
var hostname = os.hostname();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<div style="font-family: Verdana ; font-size: 28">Hello from serviceb (v1.6) : ' +  hostname + '</div>\n');
});

module.exports = router;
