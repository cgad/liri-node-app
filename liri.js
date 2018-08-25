require("dotenv").config();
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var songName = process.argv.slice(2).join(" ");
console.log(songName);