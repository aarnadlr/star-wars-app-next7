import React, {Component} from 'react'
// import Link from "next/link";
import Header from "../components/header";
import Character from "../components/Character";

import { characters } from '../src/characters.json';
import Movie from "../components/Movie";
import MovieList from "../components/MovieList";
import fetch from "isomorphic-fetch"


export default class extends Component {
  state = {
    characterData: ''
  }
  
  onSubmit = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          characterData: json
        })
      })
  }

  render() {
    return (

      <main>

        <Header />

        {/* CHARACTER BUTTONS */}
        {
          characters.map((item, index) => (
            <Character key={index} name={item.name} onSubmit={()=>this.onSubmit(item.url)} />
          ))
        }

        {/* CHARACTER FILMS */}
        {
          this.state.characterData
          ?
          this.state.characterData.films.map((item, index)=>(
            <Movie key={index} titleURL={item} />
          ))
          :
          null
        }

      </main>
    )

  }
};