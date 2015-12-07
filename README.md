Milestone 4 - Special Milestone
===========

**Team Members :**

1. Ankit Agrawal (aagrawa5)
2. Apoorv Mahajan (amahaja3)
3. Shraddha Naik (sanaik2)

### Decoy Monkey

We implemented a Decoy Monkey to prevent DDOS attack.

![](https://github.com/apoorvmahajan/M4/blob/master/images/Screen%20Shot%202015-12-06%20at%207.10.33%20PM.png)

### Steps:

Step 1. We created a Proxy Server which would redirect our requests to the main instance.

* This proxy has a sliding window, which checks if a request is made by a particular ip address beyond a threshold value.
* The proxy also maintains a Bot list.

Step 2. If the threshold value is crossed or the ip is found in the Bot list, the request is forwarded to the Decoy instead of the main server.(This indicates a DDOS attack)

Step 3. The Decoy Monkey on the Decoy server maintains two lists: User and Bot.

* If the ip exists on the Bot list, the Decoy monkey keeps the request to itself.
* If the ip exists on the User list, the request is forwarded to the main server.
* The screenshot below shows that te requests are initially redirected to the main server, and on exceeding the rate limit threshold, redirected to the decoy.
![Redirect to Decoy](https://cloud.githubusercontent.com/assets/3266051/11618219/ccc0fb92-9c65-11e5-85e4-f2ffb1265f0a.png)

* If this is a new ip, a Captcha form is displayed. If the user passes the test, he is declared legitimate and the request is forwarded.
* The screenshot below shows a sample challenge presented to the user.
![Captcha challenge presented](https://cloud.githubusercontent.com/assets/3266051/11618258/5fe849c0-9c66-11e5-8176-b1c0e782bd78.png)



<h3>Screencast </h3>
 <i>Click here to watch the screencast </i>
[![Click here to watch the screencast] (http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://youtu.be/hWwJ2aBQZyE)
