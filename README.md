# SwissJeese2014

Materials for my Swiss Jeese 2014 talk (if it even gets accepted)

## Abstract

__Title:__ From Gouda callbacks to Appenzeller CSP

__Subtitle:__ A quick survey of asynchronous programming models

JavaScript has arguably brought asynchronous programming into the mainstream. Front-end developers have been writing DOM event- and XHTTP response handlers for ages, reaping the benefits of parallel computing, without getting (much) into the horrors of multi-threading with shared memory and locking. Single-threaded event loop with asynchronous callbacks is in the heart of Node.js, showing a mind-blowing performance in IO-heavy applications on the server side.

At the same time, JavaScript community has coined the term “callback hell”, which shows that, probably, things aren’t always quite that nice and happy under the roof of event loop programming model. This talk is about the abstractions and tools for working effectively with async code on JS-based platforms. We’ll cut through control flow libraries, reactive programming, promises, and communicating sequential processes. Let’s put those fancy process algebras to work!
