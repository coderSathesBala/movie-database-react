import React, { Component } from 'react';
import axios from 'axios';
import './GetItTogether.css'
import Whirligig from 'react-whirligig'
import MovieDisplay from './MovieDisplay.js'
const posterurl = "http://image.tmdb.org/t/p/w185//";
const api_key = "04933c26041758065df384adb2cc7541"


class GetItTogether extends Component {
constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    documentaryMovies:[],
    actionMovies: [],
    animationMovies: [],
    comedyMovies: [],
    crimeMovies: [],
    dramaMovies: [],
    familyMovies: [],
    historyMovies: [],
    romanceMovies: []
  };
}

componentDidMount() {
  this.getMovieInformation();
}

async getMovieInformation() {
  await axios.all([
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres=99'),
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres=28'),
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres=16'),
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres=35'),
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres=80'),
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres=18'),
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres=10751'),
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres=36'),
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres=10749')
  ])
  .then(axios.spread(
    (documentaryRes, actionRes, animationRes, comedyRes, crimeRes, dramaRes, familyRes, historyRes, romanceRes) => {
    this.setState({
          isLoaded: true,
          documentaryMovies: documentaryRes.data.results,
          actionMovies: actionRes.data.results,
          animationMovies: animationRes.data.results,
          comedyMovies: comedyRes.data.results,
          crimeMovies: crimeRes.data.results,
          dramaMovies: dramaRes.data.results,
          familyMovies: familyRes.data.results,
          historyMovies: historyRes.data.results,
          romanceMovies: romanceRes.data.results
          })
  }));
}


render() {
  const Slider = () => {
    let whirligig
    const next = () => whirligig.next()
    const prev = () => whirligig.prev()
  }
  const { error, isLoaded, documentaryMovies,
      actionMovies,
      animationMovies,
      comedyMovies,
      crimeMovies,
      dramaMovies,
      familyMovies,
      historyMovies,
      romanceMovies } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <div className="everything">

          <MovieDisplay
            allMovies={actionMovies}
             />
           <MovieDisplay
             allMovies={crimeMovies}
             />

          <h1 className="genreTitle">Action</h1>
          <Whirligig>
            <div className="movieImagesWhole">
              {actionMovies.map(actionMovie => (
                <div className="movieImages">
                  <img src={posterurl + actionMovie.poster_path} id={actionMovie.poster_path} height="300" />
                  <div className="change" id={actionMovie.title}>
                  <p>{actionMovie.title}</p>
                  <p>{actionMovie.overview}</p>
                  </div>
                </div>
              ))}
            </div>
          </Whirligig>

  <h1 className="genreTitle">Crime</h1>
<Whirligig>
  <div className="movieImagesWhole">
    {crimeMovies.map(crimeMovie => (
      <div className="movieImages">
        <img src={posterurl + crimeMovie.poster_path} id={crimeMovie.poster_path} height="300"
          />
        <div className="change" id={crimeMovie.title}>
        <p>{crimeMovie.title}</p>
        <p>{crimeMovie.overview}</p>
        </div>
      </div>
    ))}
  </div>
</Whirligig>

<h1 className="genreTitle">Animation</h1>
<Whirligig>
  <div className="movieImagesWhole">
    {animationMovies.map(animationMovie => (
      <div className="movieImages">
        <img src={posterurl + animationMovie.poster_path} id={animationMovie.poster_path} height="300"
          />
        <div className="change" id={animationMovie.title}>
        <p>{animationMovie.title}</p>
        <p>{animationMovie.overview}</p>
        </div>
      </div>
    ))}
  </div>
</Whirligig>

<h1 className="genreTitle">Comedy</h1>
<Whirligig>
  <div className="movieImagesWhole">
    {comedyMovies.map(comedyMovie => (
      <div className="movieImages">
        <img src={posterurl + comedyMovie.poster_path} id={comedyMovie.poster_path} height="300"
          />
        <div className="change" id={comedyMovie.title}>
        <p>{comedyMovie.title}</p>
        <p>{comedyMovie.overview}</p>
        </div>
      </div>
    ))}
  </div>
</Whirligig>

<h1 className="genreTitle">Documentary</h1>
<Whirligig>
  <div className="movieImagesWhole">
    {documentaryMovies.map(documentaryMovie => (
      <div className="movieImages">
        <img src={posterurl + documentaryMovie.poster_path} id={documentaryMovie.poster_path} height="300"
          />
        <div className="change" id={documentaryMovie.title}>
        <p>{documentaryMovie.title}</p>
        <p>{documentaryMovie.overview}</p>
        </div>
      </div>
    ))}
  </div>
</Whirligig>

<h1 className="genreTitle">Drama</h1>
<Whirligig>
  <div className="movieImagesWhole">
    {dramaMovies.map(dramaMovie => (
      <div className="movieImages">
        <img src={posterurl + dramaMovie.poster_path} id={dramaMovie.poster_path} height="300"
          />
        <div className="change" id={dramaMovie.title}>
        <p>{dramaMovie.title}</p>
        <p>{dramaMovie.overview}</p>
        </div>
      </div>
    ))}
  </div>
</Whirligig>

<h1 className="genreTitle">Family</h1>
<Whirligig>
  <div className="movieImagesWhole">
    {familyMovies.map(familyMovie => (
      <div className="movieImages">
        <img src={posterurl + familyMovie.poster_path} id={familyMovie.poster_path} height="300"
          />
        <div className="change" id={familyMovie.title}>
        <p>{familyMovie.title}</p>
        <p>{familyMovie.overview}</p>
        </div>
      </div>
    ))}
  </div>
</Whirligig>

<h1 className="genreTitle">History</h1>
<Whirligig>
  <div className="movieImagesWhole">
    {historyMovies.map(historyMovie => (
      <div className="movieImages">
        <img src={posterurl + historyMovie.poster_path} id={historyMovie.poster_path} height="300"
          />
        <div className="change" id={historyMovie.title}>
        <p>{historyMovie.title}</p>
        <p>{historyMovie.overview}</p>
        </div>
      </div>
    ))}
  </div>
</Whirligig>

<h1 className="genreTitle">Romance</h1>
<Whirligig>
  <div className="movieImagesWhole">
    {romanceMovies.map(romanceMovie => (
      <div className="movieImages">
        <img src={posterurl + romanceMovie.poster_path} id={romanceMovie.poster_path} height="300"
          />
        <div className="change" id={romanceMovie.title}>
        <p>{romanceMovie.title}</p>
        <p>{romanceMovie.overview}</p>
        </div>
      </div>
    ))}
  </div>
</Whirligig>

</div>
    );
  }
}

}

export default GetItTogether;
