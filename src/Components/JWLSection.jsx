import React from 'react'
import "./JWLSection.css"

export default function JWLSection() {
  return (
    <div className="jwl--section">
        <input className="jwl--input" type="text" placeholder='example@example.com'/>
        <button className="jwl--btn">Join</button>
      </div>
  )
}
