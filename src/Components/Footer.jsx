import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="footerpts">
        <div className="footerpt left">
          <div className="footer--title">Contact us</div>
          <div className="footer--elements">
            <div className="element">Home</div>
            <div className="element">Books</div>
            <div className="element">Stories</div>
            <div className="element">wishlist</div>
            <div className="element">contact</div>
          </div>
        </div>
        <div className="footerpt right">
          <div className="footer--title">Wavywords</div>
          <div className="footer--elements">
          <div className="element"></div>
            <div className="element">+213 560 235 145</div>
            <div className="element">infos@wavywords.com</div>
            <div className="element">Bois des cars , Delly brahim N° 123 / Alger </div>
          </div>
        </div>
        </div>
        <div className="copyrights">all rights reserved 2024</div>
      </div>
  )
}
