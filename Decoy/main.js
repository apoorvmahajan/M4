var http = require('http'),
httpProxy = require('http-proxy');
var url = require( "url" );
var express = require('express');

var user = {};
var bot = {};
var result = "4";
var proxy = httpProxy.createProxyServer({});
var targetUrl='52.34.244.10:5000';
var flag = 0;
var server=http.createServer(function(req,res){
   
	console.log(req.connection.remoteAddress);
	if(user[req.connection.remoteAddress])
	{
		console.log("Redirect to main, this is not a bot!")
		 
		proxy.web(req, res, { target: 'http://52.34.244.10:5000' });
    	}
	else if(bot[req.connection.remoteAddress]) 
	{
		console.log("bot detected!");
		res.end("Wrong Answer!");
	
	}
	
   	 if (req.method=='GET')
	{
        	res.end('<html><body align ="right"><h1>2+2 = 4? </h1><a href="http://52.34.244.10:5000"> <input type="button" value="yes" /> </a>  <input type="button" value="no" />  </body></html>');
   	 	/*if( flag == 1)
		{	
			proxy.web(req,res,{target:'http://52.34.244.10:5000'});
			flag = 0;
		}*/
	}
	//calculate();
	else
	{

		
		var chunk = '';
       		 req.on('data', function (data) {

            		chunk += data;
		});
        	req.on('end', function () {
       		console.log(chunk + "<-Posted Data Test");
		console.log(chunk == result);
		
		var str2 = chunk[chunk.length-1];
		console.log(str2);		
        	if( str2 == result)
		{
			console.log("Correct answer entered, not a bot!");
			user[req.connection.remoteAddress] = 1;
		//	redirect('http://52.34.244.10:5000');
		//	 proxy.web(req, res, { target: 'http://52.34.244.10:5000' });
		//	res.writeHead(302, {'Location': 'http://52.34.244.10:5000'});
		//	res.end();
		flag = 1;
		}

		else
		{
			console.log("user is a bot");
			bot[req.connection.remoteAddress] = 1;
			res.end("bot detected");
		}

        });
    }
}).listen(8000);

