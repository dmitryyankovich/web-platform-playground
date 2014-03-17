Set of code samples built around accepted and experimental Web specifications, useful for learning and teaching various aspects of the Web Platform.

Topics
======
Following topics are covered:
* Examples of live interactive Web applications
* Offline Storage
 * Web Storage
    * Local Storage
    * Session Storage
 * WebSQL
 * IndexedDB
* Audio
* Video
* Canvas
* Media Capture and Streams
 * HTML Media Capture
 * Device Tag (Legacy)
 * User Media API
* Web Messaging
 * Direct address space access
 * Hash-tag hack
 * Web Messaging API
* Real-time Communications
 * Polling / Long-polling / HTTP Streaming
 * Server-sent Events
 * Web Sockets


Getting Started
================
1. Download and install [node.js]

2. Install required npm packages

 ```npm install```

3. Almost all of the samples require simple Web server to operate correctly, so:

 ```node shared/server.js```

 or some samples have specific server behavior that can be found in server directory within code sample, for these kind of samples you should execute following command instead:
 
 ```node <path_to_code_sample>/server/app.js```


Roadmap
=======
Add code samples on following topics:

* FileSystem API
* Text Track API
* Media Source Extensions
* Encrypted Media Extensions
* Audio DSP
* 3D Graphics
* Web Messaging
* Binary Data
* Web Workers
* Web Sockets
* WebRTC
* XMLHttpRequest 2
* Geolocation API
* Device Orientation
* CSS3


[node.js]:http://nodejs.org
