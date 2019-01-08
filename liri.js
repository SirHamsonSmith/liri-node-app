var axios = require("axios")

var moment = require("moment")

var fs = require("fs")

require("dotenv").config()

var getMeMovie = function (movieName) {
    if (movieName === undefined) {
        movieName = "Bloodsport"
    }

    var urlHit =
        "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    axios.get(urlHit).then(function (response) {
        var data = response.data;
        // console.log(data)
        console.log("----------------------------------------")
        console.log("Title: " + data.Title);
        console.log("Year: " + data.Year);
        console.log("Rated: " + data.Rated);
        console.log("Released: " + data.Released);
        console.log("Genre: " + data.Genre)
        console.log("Director: " + data.Director);
        console.log("----------------------------------------")

    })
}
getMeMovie("The Matrix")

var getMyBands = function(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  
    axios.get(queryURL).then(
      function(response) {
        var data = response.data;
  
        if (!data.length) {
          console.log("No results found for " + artist);
          return;
        }
  
        console.log("Upcoming concerts for " + artist + ":");
  
        for (var i = 0; i < data.length; i++) {
          var show = data[i];
  
          
          console.log(
            show.venue.city +
              "," +
              (show.venue.region || show.venue.country) +
              " at " +
              show.venue.name +
              " " +
              moment(show.datetime).format("MM/DD/YYYY")
          );
        }
      }
    );
  };

getMyBands("50 Cent")