# Music-Platform
- Music-Platform is a web application that allows users to upload, store, and listen to music tracks. The application provides various features such as track creation, deletion, updating, and searching, as well as the ability to play tracks and count the number of times they have been played.
- One of the key features of the application is the ability to create music tracks. Users can create a track by uploading an audio file and providing information such as the track name, artist, and genre. The application also allows users to view a list of all music tracks and search for tracks by name or artist.
- The application also provides the ability to play music tracks and count the number of times they have been played. When a user plays a track, the number of times the track has been played is incremented in the database.
- Users can also leave comments on tracks. When a user leaves a comment, the comment is stored in the database and associated with the track.
- Users can access static images and audio files by providing the filename in the URL.

## Installation
You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the
dependencies by running

```
$ npm i
set your data to connect MongoDB
$ npm start
```
Check [Music-Platform Documentation](https://documenter.getpostman.com/view/25263444/2s93CNMss5) for more info.

# Key Features
- Users can create a new music track by sending a POST request to /tracks.
- Users can get a list of all music tracks by sending a GET request to /tracks.
- Users can get a single music track by ID by sending a GET request to /tracks/:id.
- Users can delete a music track by ID by sending a DELETE request to /tracks/:id.
- Users can update a music track by ID by sending a PATCH request to /tracks/:id.
- Users can create a new comment for a music track by sending a POST request to /comments.
- Users can increment the number of times a track has been played by sending a POST request to /tracks/listen/:id.
- Users can search for music tracks by name or artist by sending a GET request to /tracks/search?q=:query.
- Users can get a static image file by filename by sending a GET request to /static/images/:filename.
- Users can get a static audio file by filename by sending a GET request to /static/audio/:filename.

# The project is built using the following packages:

<ul>
<li><b>Nodejs </b></li>
<li><b>NestJS </b></li>
<li><b>Express.js </b></li>
<li><b>Typescript </b></li>
<li><b>Eslint/Prettier </b></li>
<li><b>File System </b></li>
<li><b>MongoDB </b></li>
<li><b>Mongoose </b></li>
<li><b>Postman </b></li>
</ul>
