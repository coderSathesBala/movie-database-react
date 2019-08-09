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
    documentary:[],
    action: [],
    animation: [],
    comedy: [],
    crime: [],
    drama: [],
    family: [],
    history: [],
    romance: []
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
          documentary: documentaryRes.data.results,
          action: actionRes.data.results,
          animation: animationRes.data.results,
          comedy: comedyRes.data.results,
          crime: crimeRes.data.results,
          drama: dramaRes.data.results,
          family: familyRes.data.results,
          history: historyRes.data.results,
          romance: romanceRes.data.results
          })
  }));
}


render() {
  const movieArr = [this.state.documentary, this.state.action, this.state.animation,
                    this.state.comedy, this.state.crime, this.state.drama,
                    this.state.family, this.state.history, this.state.romance]
  const movieTitles = ["Documentary", "Action", "Animation", "Comedy", "Crime", "Drama", "Family", "History", "Romance"]
  const questionsMap = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const Slider = () => {
    let whirligig
    const next = () => whirligig.next()
    const prev = () => whirligig.prev()
  }
  const { error, isLoaded } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (

        <div className="everything">

          {questionsMap.map(i => {
              return <MovieDisplay allMovies={movieArr[i]} title={movieTitles[i]} />
            })}

        </div>
    );
  }
}

}

export default GetItTogether;
