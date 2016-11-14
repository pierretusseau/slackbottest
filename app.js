var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

//main route
app.get('/', function (req, res) { res.status(200).send('Hello World!'); });

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/hello', function (req, res, next) {
  var userName = req.body.username;
  var botPayload = {
  	text : 'Hello ' + userName + ', welcome to BTF Slack, where we kill young babies every sunday night.'
  };

  if (userName !== 'slackbot') {
  	return res.status(200).json(botPayload);
  } else {
  	return res.status(200).end();
  }
});
