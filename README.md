Milestone 4 - Special Milestone
===========

**Team Members :**

1. Ankit Agrawal (aagrawa5)
2. Apoorv Mahajan (amahaja3)
3. Shraddha Naik (sanaik2)

### Decoy Monkey

We implemented a Decoy Monkey to prevent DDOS attack.

![](https://github.com/apoorvmahajan/M4/blob/master/images/Screen%20Shot%202015-12-06%20at%207.10.33%20PM.png)

####Motivation
A web server can be inundated with a [DDOS(Distributed Denial of Service)](https://en.wikipedia.org/wiki/Denial-of-service_attack) attack. To prevent this, a Decoy Monkey can be used. The Decoy Monkey redirects all such DDOS requests to itself, leaving the other legitimate requests for the web server to handle. This prevents the web server from being inundated with a DDOS attack while ensuring that it continues to serve its clients in the event of such a scenario.

####Implementation
To identify a DDOS attack, a sliding window interval of time is maintained which is configurable. Within this sliding window interval, the number of requests from each client is maintained. If these requests exceed a threshold value, which is again configurable, then it is deemed to be a part of a DDOS attack. At this instance, all such requests from the offending IP addresses are forwarded to the Decoy Monkey which starts handling such requests from this instance in time.

####Added Capability
When any offending IP Address is redirected to the Decoy Monkey, that client is now presented with a simple [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA) challenge. The motivation behind this is to separate legitimate users from bots. Since the sliding window interval as well as the threshold value is configurable, it may so happen that some legitimate user is redirected to the Decoy Monkey. The Decoy Monkey then presents the user with a simple challenge, such as 2+2=4?. If the user can correctly solve this challenge, then the user is redirected to the main application. This is basically done to filter out bots from users.

### Steps:

Step 1. We create a Proxy Server which would redirect our requests to the main instance.

![Redirect to Main instance](https://github.com/apoorvmahajan/M4/blob/master/images/Screen%20Shot%202015-12-06%20at%2010.19.19%20PM.png)

* This proxy maintains a sliding window, which checks if a request is made by a particular IP address beyond a threshold value.
* The proxy also maintains a Bot list.

Step 2. If the threshold value is crossed or the IP is found in the Bot list, the request is forwarded to the Decoy instead of the main server.(This indicates a DDOS attack)

Step 3. The Decoy Monkey on the Decoy server maintains two lists: User and Bot.
* If the IP exists on the Bot list, the Decoy monkey keeps the request to itself.
* If the IP exists on the User list, the request is forwarded to the main server.
* The screenshot below shows that te requests are initially redirected to the main server, and on exceeding the rate limit threshold, redirected to the decoy.
![Redirect to Decoy](https://github.com/apoorvmahajan/M4/blob/master/images/Screen%20Shot%202015-12-06%20at%2010.19.37%20PM.png)

* If this is a new IP, a CAPTCHA form is displayed. If the user passes the test, he is declared legitimate and the request is forwarded.
* The screenshot below shows a sample challenge presented to the user.
![Captcha challenge presented](https://github.com/apoorvmahajan/M4/blob/master/images/Screen%20Shot%202015-12-06%20at%2010.19.50%20PM.png)

![Captcha passed](https://github.com/apoorvmahajan/M4/blob/master/images/Screen%20Shot%202015-12-06%20at%2010.20.13%20PM.png)



<h3>Screencast </h3>
 <i>Click here to watch the screencast </i>
[![Click here to watch the screencast] (http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://youtu.be/hWwJ2aBQZyE)
