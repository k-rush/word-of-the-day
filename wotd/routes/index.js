var express = require('express');
var request = require('request');
var parser = require('rss-to-json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var url = 'https://wordsmith.org/awad/rss1.xml';
	parser.load(url, function(error, rss) {
		console.log("RSS: " + JSON.stringify(rss));
		//parsedRes = parser.parseString(body);
		//console.log(parsedRes);
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		var today  = new Date();

		todayFormatted = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

		res.render('index', { title: todayFormatted, word: rss['items'][0]['title'], definition: rss['items'][0]['description']});
	});
  
});

module.exports = router;
