var express = require('express');
var bodyParser = require("body-parser");

var app = express();


var messages = [{
  	text : 'Some Text' ,
  	owner : 'Tim'
  	},
  	{
  		text : 'Othe Message',
  		owner : 'Fasid'
	}];

	app.use(bodyParser.json());
	app.use(function(req , res , next) {
		res.header("Access-Control-Allow-Origin" , "*");res.header("Access-Control-Allow-Origin" , "*");
		res.header("Access-Control-Allow-Origin" , "*");res.header("Access-Control-Allow-Headers" , "Origin , X-Requested-With , Content-Type , Accept");
		next();
	});

	var api = express.Router();


api.get("/messages/:user?" , function(req , res) {
	if (req.params.user) {
		var user = req.params.user;
		var result = messages.filter(message => message.owner == user);
		return res.json(result);
	}
	return res.json(messages);
});

api.post("/messages" , function(req , res) {
	messages.push(req.body);	
	res.status(200).json(req.body);
});

app.use('/api' , api);
app.listen(9597);