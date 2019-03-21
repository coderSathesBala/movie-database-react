import React, { Component } from 'react';
import axios from 'axios';
import './GetItTogether.css'
import Whirligig from 'react-whirligig'
import { css } from 'glamor'
const posterurl = "http://image.tmdb.org/t/p/w185//";


class GetItTogether extends Component {
constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    documentaryMovies:[]  ,
    actionMovies: [],
    animationMovies: [],
    comedyMovies: [],
    crimeMovies: [],
    drameMovies: [],
    familyMovies: [],
    historyMovies: [],
    romanceMovies: []
  };
}

componentDidMount() {
  this.getDocumentaryMovies();
  this.getActionMovies();
  this.getAnimationMovies();
  this.getComedyMovies();
  this.getCrimeMovies();
  this.getDramaMovies();
  this.getFamilyMovies();
  this.getHistoryMovies();
  this.getRomanceMovies();
}

getDocumentaryMovies = () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=99')
  .then((picturesRes) => {
          this.setState({
          isLoaded: true,
          documentaryMovies: picturesRes.data.results,
          show:
          })
  })
}

getActionMovies = () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=28')
  .then((picturesRes) => {
          this.setState({
          isLoaded: true,
          actionMovies: picturesRes.data.results
          })
  })
}

getAnimationMovies = () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=16')
  .then((picturesRes) => {
          this.setState({
          isLoaded: true,
          animationMovies: picturesRes.data.results
          })
  })
}

getComedyMovies = () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=35')
  .then((picturesRes) => {
          this.setState({
          isLoaded: true,
          comedyMovies: picturesRes.data.results
          })
  })
}

getCrimeMovies = () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=80')
  .then((picturesRes) => {
          this.setState({
          isLoaded: true,
          crimeMovies: picturesRes.data.results
          })
  })
}

getDramaMovies = () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=18')
  .then((picturesRes) => {
          this.setState({
          isLoaded: true,
          dramaMovies: picturesRes.data.results
          })
  })
}

getFamilyMovies = () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=10751')
  .then((picturesRes) => {
          this.setState({
          isLoaded: true,
          familyMovies: picturesRes.data.results
          })
  })
}

getHistoryMovies = () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=36')
  .then((picturesRes) => {
          this.setState({
          isLoaded: true,
          historyMovies: picturesRes.data.results
          })
  })
}

getRomanceMovies = () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=10749')
  .then((picturesRes) => {
          this.setState({
          isLoaded: true,
          romanceMovies: picturesRes.data.results
          })
  })
}

onItemClick = (changeSize) => {
  changeSize.currentTarget.height = "500"
  changeSize.currentTarget.width = "350"
  console.log(changeSize.target.id);
}

onMouseEnter = (changeSize) => {
  changeSize.currentTarget.height = "330"
  changeSize.currentTarget.width = "220"
}

onMouseLeave = (changeSize) => {
  changeSize.currentTarget.height = "300"
  changeSize.currentTarget.width = "200"

}

test = () => {

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
      drameMovies,
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
        <h1 className="genreTitle">Documentaries</h1>
        <Whirligig>
        <div className="movieImagesWhole">
        {documentaryMovies.map(documentaryMovie => (
          <div className="movieImages">
          <img src={posterurl + documentaryMovie.poster_path} id={documentaryMovie.original_title} height="300" width="200"
          onClick={this.onClickImageSize}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
           />
          </div>
      ))}
    </div>
    </Whirligig>
    <h1 className="genreTitle">Action</h1>
<Whirligig>
  <div className="movieImagesWhole">
    {actionMovies.map(actionMovie => (
      <div className="movieImages">
        <img src={posterurl + actionMovie.poster_path} id={actionMovie.poster_path} height="300"
          onClick={this.test}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          />
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
