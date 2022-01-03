import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/destinationDetails.scss';

function DestinationDetail({ data }) {
    const { id } = useParams();
    const locations = data.find(location => (location?.id).toString() === id);
    console.log(locations);
    return (
        <div className="details-container">
            {locations &&
                <h2>{locations?.destination}</h2>
            }
        </div>
    );
}

export default DestinationDetail;
