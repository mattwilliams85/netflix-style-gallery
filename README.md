# UI Engineer Take Home Exercise

### Getting Started

```
1. $ yarn install
2. $ yarn start
3. Open http://localhost:3000
```

### Problem Statement

Netflix is investing a lot of effort into acquiring and creating beautiful artwork which is used throughout all of member experience on various devices. With a large global catalog and number of different images for a title, managing at scale is important. A non-technical operations team is responsible for acquisition and setup of artwork. Additionally, we have image algorithms that further augment the image metadata to detect actors, background tone etc.


The operations team needs an easy-to- use user interface that would allow it to quickly manage artwork across titles and sort/group/filter on various attributes (actors, background tone, similarity group etc). As part of this exercise you are required to implement a functional application (with two distinct areas of focus) that will help solve these challenges.

### About the Data

We’ve attached a sample JSON response like one you might see from our backend services. We’ve limited the image type to only 1 (“sdp”), but we can have many of these in reality which causes the volume of data to go up quite a bit (think 1000s) so keep that in mind. This file is attached with the email this document was sent with.

### About the Webserver

We’d like you to include a web application (preferably in node.js) that does two things primarily - serves static UI assets for the browser, and serves data (from the JSON) to the UI via a REST api. Your project should have a README.md or equivalent with instructions on how to get things up and running, and have 2 end points accessible (one for the UI, and one for the REST api mentioned above).

Users of the app should be able to:
* Open a browser and navigate to a page that serves them a Webapp (see below) via a
simple route such as “/home” or “/”
* Access an alternative route such as “/api/movies” via a browser or curl to see the data response. For this exercise, you do not need to render this “Isomorphically” and should instead render your UI elements and then asynchronously fetch this data before displaying it
* Bonus Points: instead of reading the JSON file once on server starts and serving it to the API requests from memory, we’d like you to come up with something here to showcase your familiarity with streams, asynchronous / non-blocking behavior, etc.

### About the Webapp

One of the end points of your webserver should serve a simple browser friendly webapp that allows the user to view and interact with the data. Users need to be able to:
* View all the smaller images (thumbnailURL) in a gallery.
* View smaller images (thumbnailURL) which could be grouped by an attribute. There are 2 attributes on which user can select to group by - movieId &amp; languageCode. Default would be group by movieId.
* Ability to zoom (fullSizeImageURL) in on a particular image and be presented with
details view where all information from the data model is displayed. (e.g. movie id, image type, etc)
* Your app does not need to be cross browser friendly, and you can indicate which
browser to best view it in. We’d rather see you be creative and successful with your designs and JS code than worry about trying to make it work for multiple screens and browsers for this portion of the app.
* Bonus points if you use tooling such as Babel, Gulp, Browserify - but if you’re pressed for time you can also simply include an HTML file that leverages the CDN style starter app (seen here). This may allow you to put more time into elegant &amp; thoughtful UI design and implementation.

Note: Please work and submit the exercise (including tests) similar to how you would send a pull-request to a fellow engineer in the team.

### Guidelines

* The preferred tech stack is React running on Node.js.
* Please use your creativity as there are no designs and mocks. Functionality is more of a
priority than look and feel.
* Feel free to use any module like lodash or any array prototype methods.
* Usage of any open source library/module is acceptable.
