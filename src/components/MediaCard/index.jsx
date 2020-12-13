import React from 'react';
import {ReactComponent as Decorator} from '../../assets/images/decorator_media.svg';
import image from '../../assets/images/thumb.svg';

import './MediaCard.scss';

function MediaCard() {
    return (
        <div className="media-card">
            <img className="media-card__img" src={image} alt={image} />
            <h2 className="media-card__title big-title-text-2">Esto es AHORRO</h2>
            <p className="media-card__desc big-normal-text">Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.</p>
            <Decorator className="media-card__decorator"/>

        </div>
    )
}
// 
export default MediaCard
