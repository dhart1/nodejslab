var http = require('http');
var redis = require('redis');

var client = redis.createClient();


	/*client.mget{['awesome','gnarly'], function(error, responses){
		console.log(responses);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('awesomeCount: '+responses[0] +'<br /> gnarlyCount: '+responses[1]);
	});*/
	
http.createServer(function (req, res) {	
	client.get('awesome', function(error, awesomeCount){
		client.get('cool', function(error, coolCount){
			client.get('rad', function(error, radCount){
				client.get('gnarly', function(error, gnarlyCount){
					client.get('groovy', function(error, groovyCount){
	    				if(error) {
							awesomeCount=error;
	    				}
						res.writeHead(200, {'Content-Type': 'text/html'});
	    				res.end('awesomeCount: '+awesomeCount +'<br />'+
								'coolCount: '+ coolCount +'<br />'+
								'radCount: '+ radCount +'<br />'+
								'gnarlyCount: '+ gnarlyCount +'<br />'+
								'groovyCount: '+ groovyCount
						);		
					});
				});
			});
		});
	});
}).listen(3000);

console.log('Server running on port 3000');