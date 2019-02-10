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
        console.log("FROM INNER MOVIE:" , json);
        this.setState({
          movieData: json
        })
      })
    
  }
  render() {
    // const date = new Date()
    const dateToFormat = this.state.movieData.release_date;
    
    return (
            
      <div>
        <h1>{this.state.movieData.title}</h1>
        {/* <p>{this.state.movieData.release_date}</p> */}
        {/* <p>Release Date: <Moment format="LLLL">{dateToFormat}</Moment></p> */}
        <p>Release Date: <Moment format="dddd, MMM D YYYY">{dateToFormat}</Moment></p>
        
      </div>
    )
  }
}
