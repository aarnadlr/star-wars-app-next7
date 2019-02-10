import React, {Component} from 'react'
// import Link from "next/link";
import Header from "../components/header";
import Character from "../components/Character";

import { characters } from '../src/characters.json';
import Movie from "../components/Movie";
import MovieList from "../components/MovieList";
import fetch from "isomorphic-fetch"
import Router from 'next/router'
// import SwLogo from '../components/SwLogo';
import "tachyons/css/tachyons.css";

export default class extends Component {
  state = {
    characterData: ''
  }

  handleErrors = (response) => {
    if (!response.ok) {
      Router.push('/error');
      throw Error(response.statusText);
    }
    return response.json();
  }
  
  onSubmit = (url) => {
    fetch(url)
    .then(this.handleErrors)
    .then(json => {
      console.log("ok", json)
      this.setState({
        characterData: json
      })
    } )
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (

      <main className="bg-black gray ">

        
        <Header />
      
        {/* CHARACTER BUTTONS */}
        <div className="flex mt4 pa4">
        {
          characters.map((item, index) => (
            
            <Character key={index} name={item.name} onSubmit={()=>this.onSubmit(item.url)} />
          ))
        }
        </div>


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
      <style jsx>{`
        
    `}</style>
      </main>
    )

  }
};