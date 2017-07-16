var express = require('express'),
	http = require('http');


function initApp() {
	var app = express();

	app.set('port', 3000);
	app.set('port.https', 3200);
	app.use('/', require('./router.js'));
	app.use(express.static('public'));

	http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
	});
}

initApp();
