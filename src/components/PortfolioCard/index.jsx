import React from 'react'
import ReactCustomizableProgressbar from 'react-customizable-progressbar';
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron_left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron_right.svg';

import skadia from '../../assets/images/skadia_logo.png';
import robot from '../../assets/images/robot.png';
import { formatCurrency } from '../../common/js/formatter';
import './PortfolioCard.scss'


function PortfolioCard() {
    const valueFormatted = formatCurrency({ value: 240000 });
    return (
        <div className="portfolio-card">
            <div className="portfolio-card__body portfolio-body">
                <div className="portfolio-body__char">
                    <ReactCustomizableProgressbar
                        radius={57}
                        steps={10}
                        progress={1}
                        strokeWidth={13}
                        strokeColor="#41CF69"
                        strokeLinecap="butt"
                        trackStrokeWidth={10}>
                        <div className="indicator">
                            <img src={robot} alt={robot}/>
                            <span className="normal-text">RoboAdvisor</span>
                            <span className="subtitle-text">10 Fondos</span>
                        </div>
                    </ReactCustomizableProgressbar>
                </div>
                <div className="portfolio-body__content content">
                    <div className="content__header header">
                        <img src={skadia} alt={skadia}/>
                        <span className="header__percent normal-text--white"> 15%</span>
                    </div>
                    <label className="subtitle-text">FIC Old Mutual Efectivo</label>
                    <label className="subtitle-text--bold">{valueFormatted}</label>
                    <label className="normal-text--success">Tipo de activo</label>
                    <label className="normal-text">Renta fija Depósito a la fija</label>
                    <div className ="content__arrows">
                        <ChevronLeft />
                        <ChevronRight />
                    </div>
                    
                </div>
            </div>
            <p className="portfolio-card__desc normal-text">
              Tu  dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.
            </p>
        </div>
    )
}

export default PortfolioCard
