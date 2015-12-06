var http = require('http'),
    httpProxy = require('http-proxy');
var url = require( "url"); 

// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var ipAddress;
var flag = 0;
var timer = 0;

var threshold = 2;
var blocked = {};
var count = {};

var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and thendo  proxy the request.

 setInterval(function(){
 timer++;
 if(timer == 10)
   timer = 0;
}, 1*1000);

if( timer == 0)
{
 count = {};
}

 ipAddress = req.connection.remoteAddress;

calculate();

 if (flag == 0) {
       // 30% to canary
       console.log("Redirect to main")
       targetUrl = 'http://52.34.244.10:5000';
    } else {
       // 90% to stable
       console.log("Redirect to decoy")
       targetUrl = 'http://52.34.244.167:8000';
    }
    
//	res.writeHead(200, { 'Content-Type': 'text/plain' });
 // 	res.write('request successfully proxied: ' + req.url +'\n' + JSON.stringify(req.headers, true, 1));
//  res.end();

	proxy.web(req, res, { target: targetUrl });
    flag = 0;
});

console.log("Proxy server listening on port 80")

server.listen(8080);

function calculate()
{
 if(!count[ipAddress] )
 {
	console.log("in if:");
      count[ipAddress] =1;
	console.log(count[ipAddress]);
}
  else
      count[ipAddress]+=1;

 console.log(ipAddress+":"+count[ipAddress]);
  if(count[ipAddress] > threshold || blocked[ipAddress] == 1 )
  {
        blocked[ipAddress] = 1;
        flag = 1;
  }
}

