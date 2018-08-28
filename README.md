# liri-node-app

### About
This is a NodeJS app that searches various APIs and returns specific data parsed from the query response.

This app saves time when searching for concert info on Bands In Town, song info on Spotify, or movie info on OMDB (Open Movie Database) by allowing the user to search in terminal rather than navigating to the respective website.

### How to use

Type one of the four commands following "node liri.js" in your terminal/bash, followed by the artist, song, or movie you want to search.

The four commands are as follow:
- 'concert-this'
- 'spotify-this-song'
- 'movie-this'
- 'do-what-it-says'

Layouts:
- 'node liri.js concert-this <artist name here>'
- 'node liri.js spotify-this-song <song name here>'
- 'node liri.js movie-this <movie name here>'
- 'node liri.js do-what-it-says'

Default searches if you do not input song or movie:
- 'spotify-this-song' returns "The Sign" by Ace of Base info
- 'movie-this' returns "Mr. Nobody" info

Command 'do-what-it-says' leaves it up to the app to show you what it wants.