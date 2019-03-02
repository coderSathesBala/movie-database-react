import React, { Component } from 'react';

const posterurl = "http://image.tmdb.org/t/p/w185//"

class Practice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch ('https://api.themoviedb.org/3/discover/movie?api_key=04933c26041758065df384adb2cc7541&with_genres=28')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <img src={posterurl + item.poster_path} />
          ))}
        </ul>
      );
    }
  }
  
}

export default Practice;
