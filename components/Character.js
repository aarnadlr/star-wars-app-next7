import React from 'react'

export default function Character(props) {
  return (
    <button onClick={props.onSubmit}>
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
          background: tomato;
          color: white;
        }
      `}</style>
    </button>
  )
}
