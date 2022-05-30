import React from 'react';
import './Homepage.css';
import Silhouette from './silhouette.png'
import Background from './background.jpg'

function Homepage() {
    console.log("ADFASFDSD")
    return (
        <React.Fragment>
            <h1>
                test
            </h1>
            <img className="background-image" src={Background}  alt="Background"/>
            <div className="image-scroller">
                <img className="silhouette-image" src={Silhouette}  alt="Background"/>
            </div>
        </React.Fragment>
    )
}

export default Homepage;