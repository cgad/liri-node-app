require("dotenv").config();
var keys = require("./keys.js");
var inquirer = require("inquirer");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var input = process.argv.slice(2).join(" ");
console.log(input);


function concertThis() {
    //search bandsintown artist events api
    //return
        //name of venue
        //venue location
        //date of event (moment- MM/DD/YYYY)
}

function spotifyThis() {
    //node-spotify-api package
    //return
        //artist(s)
        //song's name
        //preview link of song
        //album
    //if no input, default "The Sign" by Ace of Base
}

function movieThis() {
    //omdb request package
    //api key 'trilogy'
    //return
        //title
        //year of release
        //imdb rating
        //rotten tomatoes rating
        //country produced
        //language
        //plot
        //actors
    //if no input, default "Mr. Nobody" 
}

function whatever() {
    //fs node package
    //take text in random.txt, call one of other commands
}


switch (command) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        whatever();
        break;
}