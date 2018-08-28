require("dotenv").config();
var keys = require("./keys.js");
var inquirer = require("inquirer");
var request = require("request");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var moment = require('moment');
moment().format();

var input = process.argv.slice(3).join("+");
var action = process.argv[2];

function concertThis() {
    var appID = "codingbootcamp";
    var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=" + appID;

    request(queryURL, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var short = JSON.parse(body);
            
            console.log("\nNext 5 shows for " + short[0].lineup + "-- \n");
            for (var i = 0; i < 5; i++) {
                // converting date format using moment
                var beforeDate = short[i].datetime;
                var beforeFormat = "YYYY-MM-DDTHH:mm:ss";
                var date = moment(beforeDate, beforeFormat);
                var convertedDate = moment(date).format("MM/DD/YYYY");

                console.log("Venue name: " + short[i].venue.name + "\nVenue location: " + short[i].venue.city + ", " + short[i].venue.region + "\nDate of event: " + convertedDate + "\n");
            }
        }
    })
}

function spotifyThis() {
    if (input.length == 0) {
        // console.log("\nArtist(s): Ace of Base\nSong name: The Sign\nSong preview link: \nAlbum: The Sign\n");
        input = "the+sign";
        console.log(input);
    }
    spotify.search({ type: 'track', query: input }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
    
        console.log("\nTop 5 matches found on Spotify--\n");
        for (var i = 0; i < 5; i++) {
            console.log("Artist(s): " + data.tracks.items[i].album.artists[0].name + "\nSong name: " + data.tracks.items[i].name + "\nSong preview link: " + data.tracks.items[i].preview_url + "\nAlbum: " + data.tracks.items[i].album.name + "\n");
        }
    });
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
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        var dataArr = data.split(",");
        action = dataArr[0];
        input = dataArr[1];

        runSwitch();
    });
}

function runSwitch() {
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
}

runSwitch();