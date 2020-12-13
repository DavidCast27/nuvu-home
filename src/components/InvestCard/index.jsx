import React from 'react'
import {ReactComponent as InvestImage} from '../../assets/images/girl.svg';
import { formatCurrency } from '../../common/js/formatter';

import './InvestCard.scss';
function InvestCard() {
    const valueFormatted = formatCurrency({ value: 1570000 });
    return (
        <div className="invest-card">
            <div className="invest-card__img">
                <InvestImage />
            </div>
            <h2 className="invest-card__subtitle big-subtitle-text">Eres Estratega</h2> 
            <h3 className="invest-card__value-text big-normal-text ">Tu saldo</h3> 
            <h1 className="invest-card__value big-title-text ">{valueFormatted}</h1> 
        </div>
    )
}

export default InvestCard
