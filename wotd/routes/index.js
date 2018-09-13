var express = require('express');
var request = require('request');
var parser = require('rss-to-json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var ticketRateUrl = 'https://2g70tu7zpb.execute-api.us-west-2.amazonaws.com/Prod';

	var url = 'https://wordsmith.org/awad/rss1.xml';
	parser.load(url, function(error, rss) {
		console.log("RSS: " + JSON.stringify(rss));
		//parsedRes = parser.parseString(body);
		//console.log(parsedRes);
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		var today  = new Date();
		var ticketRateTitle = "Tickets posted in the past hour:";
		todayFormatted = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
		request(ticketRateUrl, function(error, data) {
			res.render('index', { title: todayFormatted, word: rss['items'][0]['title'], definition: rss['items'][0]['description'], ticketTitle: ticketRateTitle, ticketRate: data.body});
		});

		
	});
  
});

module.exports = router;
