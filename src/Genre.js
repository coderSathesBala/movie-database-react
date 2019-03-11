import React, { Component } from 'react';
import './Genre.css';

class Genre extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      genreInfos: []
    };
  }

  componentDidMount() {
    fetch ('https://api.themoviedb.org/3/genre/movie/list?api_key=04933c26041758065df384adb2cc7541&language=en-US')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            genreInfos: result.genres
          });
          console.log(result.genres.id)
          const reminder = result.genres
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, genreInfos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        <ul>
          {genreInfos.map(genreInfo => (
            <li> {genreInfo.id} </li>
          ))}
        </ul>
      );
    }
  }
}

export default Genre;
