

//var config = "developmentConfig";
var config = "productionConfig";

var mysql = require('mysql');

if(config == "productionConfig"){
var connection = mysql.createConnection({
	host: "l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "rpez98m8pfedim3k",
	password: "mn0h26rmwvenxi9p",
	database: "wlmu9u7lfbmgmuag"
});
}
else if(config == "developmentConfig"){
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Koisuru2050',
	database: 'burger_db'
});
}


connection.connect(function (err) {
	if (err) {
		console.error('error connecting to database: ' + err.stack);
		return;
	}
	console.log('connected  as id ' + connection.threadId);
});

module.exports = connection;