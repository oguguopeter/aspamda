import React from 'react'
import { FaTools } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-light p-5'>
        <div className="row">
            <div className="col-4">
                <FaTools /> <span>Aspamda</span>
                <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                <p>Code licensed MIT, docs CC BY 3.0.</p>
                <p>Currently v5.3.0-alpha3.</p>
            </div>
            <div className="col-2">
                <ul>
                    <li> <h4>Links</h4> </li>
                    <li> <a>Home</a> </li>
                    <li><a>Docs</a></li>
                    <li><a>icon</a></li>
                    <li><a>services</a></li>
                </ul>
            </div>
            <div className="col-2">
            <ul>
                    <li> <h4>Links</h4> </li>
                    <li> <a>Home</a> </li>
                    <li><a>Docs</a></li>
                    <li><a>icon</a></li>
                    <li><a>services</a></li>
                </ul>
            </div>
            <div className="col-2">
            <ul>
                    <li> <h4>Links</h4> </li>
                    <li> <a>Home</a> </li>
                    <li><a>Docs</a></li>
                    <li><a>icon</a></li>
                    <li><a>services</a></li>
                </ul>
            </div>
            <div className="col-2">
            <ul>
                    <li> <h4>Links</h4> </li>
                    <li> <a>Home</a> </li>
                    <li><a>Docs</a></li>
                    <li><a>icon</a></li>
                    <li><a>services</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer