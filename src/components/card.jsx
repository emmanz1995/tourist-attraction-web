import React from 'react';
import '../styles/card.scss';

function Card({ location }) {
    return (
        <div className="card">
            <img className="card-img" src={location?.image} alt="" width="600" height="400" />
            <h1>{location?.destination}</h1>
            <a href={`/destination-details/${location?.id}`}>Read More</a>
        </div>
    );
}

export default Card;
