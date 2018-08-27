require("dotenv").config();
var keys = require("./keys.js");
var inquirer = require("inquirer");
var request = require("request");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var input = process.argv.slice(3).join("+");

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
    var apiKey = "trilogy";
    var queryURL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=" + apiKey;
    if (input.length == 0) {
        queryURL = "http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&apikey=" + apiKey;
    }
    request(queryURL, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var short = JSON.parse(body);

            console.log("\nTitle: " + short.Title + "\nRelease year: " + short.Year + "\nIMDB rating: " + short.imdbRating + "\nRotten Tomatoes rating: " + short.Ratings[1].Value + "\nProduction countr(y)/(ies): " + short.Country + "\nLanguage: " + short.Language + "\nPlot: " + short.Plot + "\nActors: " + short.Actors + "\n");
        }
    })
}

function whatever() {
    //fs node package
    //take text in random.txt, call one of other commands
}

var action = process.argv[2];

switch (action) {
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