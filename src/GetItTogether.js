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
            title="Action"
             />
          <MovieDisplay
            allMovies={crimeMovies}
            title="Crime"
             />
          <MovieDisplay
            allMovies={animationMovies}
            title="Animation"
            />
          <MovieDisplay
            allMovies={comedyMovies}
            title="Comedy"
            />
          <MovieDisplay
            allMovies={documentaryMovies}
            title="Documentary"
            />
          <MovieDisplay
            allMovies={familyMovies}
            title="Family"
            />
          <MovieDisplay
            allMovies={historyMovies}
            title="History"
            />
          <MovieDisplay
            allMovies={romanceMovies}
            title="Romance"
            />

</div>
    );
  }
}

}

export default GetItTogether;
