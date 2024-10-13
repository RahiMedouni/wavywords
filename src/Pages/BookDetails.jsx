import React from 'react'
import bookCover from ".././assets/book-cover.jpg"
import Facebook from ".././assets/facebook-lg.png"
import Instagram from ".././assets/instagram-lg.png"
import X from ".././assets/x-lg.png"
import Phone from ".././assets/whatsapp-lg.png"
import stars from ".././assets/rating.png"
import "./BookDetails.css"
import PdfViewer from "../Components/PdfViewer.jsx"
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

export default function BookDetails() {
    
  return (
    <div className="page--container">
        <div className="book-details--container">
            <div className="section-1">
                <img src={bookCover} alt="book cover" />
                <p className="isbn">ISBN : 12365-2355-54863-336</p>
                <img src={stars} className="rating"></img>
                <p className="price">2500 DA</p>
            </div>
            <div className="section-2">
                <h2 className="title">RICH DAD POOR DAD</h2>
                <h3 className="author">Robert T.kiyosaki</h3>
                <p className="description">rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure</p>
                <p className="large-font">Contact writer to get your book now</p>
                <div className="social-media">
                    <p className="large-font">Social Media: </p>
                    <img src={Facebook} alt="" className="sm-logo" />
                    <img src={Instagram} alt="" className="sm-logo" />
                    <img src={X} alt="" className="sm-logo" />
                </div>
                <div className="phone-number">
                    <p className="large-font">Call now :</p>
                    <img src={Phone} alt="" className="sm-logo" />
                    <p className="large-font">+213 540 123 009</p>
                </div>
                
            </div>
        </div>
        {/* <PdfViewer /> */}
    </div>
  )
}
