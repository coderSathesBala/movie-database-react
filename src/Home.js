import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch ('https://api.themoviedb.org/3/genre/movie/list?api_key=04933c26041758065df384adb2cc7541&language=en-US')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.genres
          });
          console.log(result.genres)
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
            <li> {item.name} </li>
          ))}
        </ul>
      );
    }
  }
}

export default Home;
