import React from 'react'
import PortfolioCard from '../PortfolioCard'
import Title from '../Title'
import './Portfolio.scss'

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__header header" >
                <Title text="Conoce tu portafolio" />
                <span className="header__status normal-text--success"> Estratega</span>
            </div>
            <PortfolioCard />
        </section>
    )
}

export default Portfolio
