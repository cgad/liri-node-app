require("dotenv").config();
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var songName = process.argv.slice(2).join(" ");
console.log(songName);