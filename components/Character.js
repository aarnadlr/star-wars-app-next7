import React from 'react'

export default function Character(props) {
  return (
    <button className="br3 bg-black b--blue blue" onClick={props.onSubmit}>
      {props.name}
      <style jsx>{`
        button{
          padding: 10px 16px;
          border-radius: 4px;
          font-size: 18px;
          display: block;
          margin-bottom: 16px;
          width: 300px;
          transition: all .3s ease;
        }
        button:hover{
          background: black;
          color: white;
          transform: scale(1.06);
        }
        button:not(:last-of-type){
          margin-right: 16px;
        }
      `}</style>
    </button>
  )
}
