import React from 'react';
import '../styles/card.scss';

function Card({ title, image, link, linkTitle }) {
    return (
        <div className="card">
            <img className="card-img" src={image} alt="" width="600" height="400" />
            <h1>{title}</h1>
            <a href={link}>{linkTitle}</a>
        </div>
    );
}

export default Card;
