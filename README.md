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

1. We created a Proxy Server which would redirect our requests to the main instance.

i. This proxy has a sliding window, which checks if a request is made by a particular ip address beyond a threshold value.
ii. The proxy also maintains a Bot list.

2. If the threshold value is crossed or the ip is found in the Bot list, the request is forwarded to the Decoy instead of the main server.

3. The Decoy Monkey on the Decoy server maintains two lists: User and Bot.

i. If the ip exists on the Bot list, the Decoy monkey keeps the request to itself.
ii. If the ip exists on the User list, the request is forwarded to the main server.
iii. if this is a new ip, a Captcha form is displayed. If the user passes the test, he is declared legitimate and the request is forwarded.




<h3>Screencast </h3>
 <i>Click here to watch the screencast </i>
[![Click here to watch the screencast] (http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=drVdHQMedyI)
