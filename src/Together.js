import React, { Component } from 'react';
import axios from 'axios';
const posterurl = "http://image.tmdb.org/t/p/w185//"
const genreArray = []

class Together extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movieGenres: [],
      moviePictures: []
    };
  }

  componentDidMount() {
    axios.all([
     axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=04933c26041758065df384adb2cc7541&language=en-US'),
     axios.get('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=28')
   ])
   .then(axios.spread
   ((genreRes, picturesRes) => {
     this.setState({
     isLoaded: true,
     movieGenres: genreRes.data.genres,
     moviePictures: picturesRes.data.results
     })
     for (var i = 0; i < genreRes.data.genres.length; i++) {
       genreArray.push(genreRes.data.genres.id)
     }
    })
    )
    .catch(error => {
      console.error("error: ", error);
      this.setState({
        // objects cannot be used as a react child
        // -> <p>{error}</p> would throw otherwise
        error: `${error}`,
        loading: false
      });
    });
  }

  render() {
    const { error, isLoaded, movieGenres, moviePictures } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <ul>
          {moviePictures.map(moviePicture => (
            <li><img src={posterurl + moviePicture.poster_path} /></li>
          ))}
          {movieGenres.map(movieGenre => (
            <li> {movieGenre.id} </li>
          ))}
        </ul>
        </div>
      );
    }
  }

}

export default Together;
