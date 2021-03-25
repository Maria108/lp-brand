var pathToData = 'chatTranscript.lines';

var updateCallback = function (data) {
  console.log('in updateCallback'); // Do something with the returning data//
  // var path = data.key;
  var value = data.newValue;
  var lastIndex = value.length - 1;
  var visitorInput = value[lastIndex];
  if (visitorInput.source === 'visitor') {
    fetch('https://www.omdbapi.com/?t=' + visitorInput.text + '&apikey=7a752227')
      .then((response) => response.json())
      .then((res) => {
        if (res.Response === 'True') {
          document.getElementById('movieTitle').innerText = 'Title: ' + res.Title;
          document.getElementById('movieYear').innerText = 'Year: ' + res.Year;
          document.getElementById('movieRated').innerHTML = 'Rated: ' + res.Rated;
          document.getElementById('movieReleased').innerHTML = 'Released: ' + res.Released;
          document.getElementById('movieRuntime').innerHTML = 'Runtime: ' + res.Runtime;
          document.getElementById('movieGenre').innerHTML = 'Genre: ' + res.Genre;
          document.getElementById('movieDirector').innerHTML = 'Director: ' + res.Director;
          document.getElementById('movieActors').innerHTML = 'Actors: ' + res.Actors;
          document.getElementById('movieLanguage').innerHTML = 'Language: ' + res.Language;
          document.getElementById('movieCountry').innerHTML = 'Country: ' + res.Country;
          document.getElementById('movieAwards').innerHTML = 'Awards: ' + res.Awards;
          document.getElementById('movieImdbRating').innerHTML = 'ImdbRating: ' + res.imdbRating;
          document.getElementById('movieImdbVotes').innerHTML = 'ImdbVotes: ' + res.imdbVotes;
        } else {
          document.getElementById('movieNotFound').innerHTML = 'Movie not found: ' + res.Error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const notifyWhenDone = function (err) {
  if (err) {
    // Do something with the error
    console.log('error', err);
  }
  // called when the bind is completed successfully,
  // or when the action terminated with an error.
};

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);
