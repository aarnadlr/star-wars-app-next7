import React from 'react'
import "tachyons/css/tachyons.css";
import Router from 'next/router'

export default function Error() {
  return (
    <div className="avenir bg-black flex flex-column items-center justify-center">

        <h2 className="white mb0 f4 ttu" >Error</h2>

        <div className="wrapper-404 flex items-center justify-center">

          <h1 className=" tc f1 fw8">4</h1>
          
          <img src="./static/death-star.jpg" alt="death-star" />
          <h1 className=" tc f1 fw8">4</h1>

        </div>
        <p className="silver ma0 tc f4 fw3">
            I find your lack of navigation disturbing.
        </p>

        <button onClick={ () => Router.push('/')} className="pv2 ph4 mt4 br3 b--blue bg-black blue">Let's get you home</button>

        <style jsx>{`
          div{
            height: 100vh;
          }
          div.wrapper-404{
            height:200px;
          }
          h2,p{
            color: rgb(118, 153, 177);
          }
          h1{
            font-size: 6rem;
            font-weight: 700;
            color: rgb(49, 77, 95);
          }
          img{
            width: 110px;
            height: 110px;
          }
          button{
            transition: all .6s ease;
          }
          button:hover{
            transform: scale(1.06)
          }
        `}</style>
    </div>
  )
}
