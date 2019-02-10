import React, { Component } from 'react'
import Moment from 'react-moment';

export default class MovieList extends Component {
  state = {
    movieData: ''
  }

  componentDidMount(){
    fetch(this.props.titleURL)
      .then(response => response.json())
      .then(json => {
        this.setState({
          movieData: json
        })
      })
  }
  render() {
    const dateToFormat = this.state.movieData.release_date;
    
    return (
      <div className="movie-wrapper fadeIn mb5">
        <h1>{this.state.movieData.title}</h1>
        <p>Release Date: <Moment format="dddd, MMM D YYYY">{dateToFormat}</Moment></p>
      </div>
    )
  }
}
