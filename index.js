var updateCallback = function (data) {
  console.log('in updateCallback'); // Do something with the returning data//
  console.log('Stringify data: ', JSON.stringify(data));
  var path = data.key;
  var value = data.newValue;
  var index = value.length - 1;
  var movieObj = value[index];
  console.log('Stringify movieObj: ', JSON.stringify(movieObj));
  if (movieObj.source === 'visitor') {
    fetch('http://www.omdbapi.com/?t=' + movieObj.text + '&apikey=7a752227')
      .then((response) => response.json())
      .then((res) => {
        if (res.Response === 'True') {
          document.getElementById('movieTitle').innerText = res.Title;
          document.getElementById('movieYear').innerText = res.Year;
          document.getElementById('movieRated').innerHTML = res.Rated;
          document.getElementById('movieActors').innerHTML = res.Actors;
          document.getElementById('movieGenre').innerHTML = res.Genre;
          document.getElementById('movieLanguage').innerHTML = res.Language;
          document.getElementById('movieCountry').innerHTML = res.Country;
          document.getElementById('movieReleased').innerHTML = res.Released;
          document.getElementById('movieRuntime').innerHTML = res.Runtime;
          document.getElementById('movieDirector').innerHTML = res.Director;
          document.getElementById('movieAwards').innerHTML = res.Awards;
          document.getElementById('movieImdbRating').innerHTML = res.imdbRating;
          document.getElementById('movieImdbVotes').innerHTML = res.imdbVotes;
        } else {
          document.getElementById('errMessage').innerHTML = res.Error;
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

var pathToData = 'chatTranscript.lines';

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);
