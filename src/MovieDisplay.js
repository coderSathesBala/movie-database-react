import React, { Component } from 'react';
import axios from 'axios';
import './GetItTogether.css'
import Whirligig from 'react-whirligig'
const posterurl = "http://image.tmdb.org/t/p/w185//";
const api_key = "04933c26041758065df384adb2cc7541"

const MovieDisplay = ({allMovies, title}) => {
  return(
    <div>
    <h1 className="genreTitle">{title}</h1>
    <Whirligig>
      <div className="movieImagesWhole">
        {allMovies.map(action => (
          <div className="movieImages">
            <img src={posterurl + action.poster_path} id={action.poster_path} height="300" />
            <div className="change" id={action.title}>
            <p>{action.title}</p>
            <p>{action.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </Whirligig>
    </div>
  );
}

export default MovieDisplay;
