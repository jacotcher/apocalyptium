import React from 'react';
import './Footer.css';
import Silhouette from '../../images/silhouette.png'

function Footer() {
    return (
        <div>
            <img className="silhouette-image" src={Silhouette} alt="Background"/>
        </div>
    )
}

export default Footer;