import React, { Component } from 'react'

export default class MovieList extends Component {
  state = {
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
    return (
      <div>
        {
          this.state.movieData
        }
      </div>
    )
  }
}
