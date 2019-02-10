import React, {Component} from 'react'
import Header from "../components/header";
import Character from "../components/Character";
import { characters } from '../src/characters.json';
import Movie from "../components/Movie";
import fetch from "isomorphic-fetch"
import Router from 'next/router'
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
      // console.log("ok", json)
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
        <div className="avenir flex mt4 pa4 justify-center">
        {
          characters.map((item, index) => (
            
            <Character key={index} name={item.name} onSubmit={()=>this.onSubmit(item.url)} />
          ))
        }
        </div>

        {/* CHARACTER FILMS */}
        <div className="films-container avenir blue flex flex-column items-center">
          
          {
            this.state.characterData
          ?
            this.state.characterData.films.map((item, index)=>(
              <div key={index} className="tc">
              <p className="white">{this.state.characterData.name} appears in:</p>
              <div  className="film-wrapper">
                <Movie titleURL={item} />
              </div>
              </div>
            ))
          :
            null
          }

        </div>

      <style jsx>{`
        main{
          height: 100vh;
        }
    `}</style>
      </main>
    )
  }
};