import React from 'react'
import InvestCard from '../InvestCard'
import InvestSummary from '../InvestSummary'

import './Invest.scss';

function Invest() {
    return (
        <section className="invest">
            <InvestCard />
            <InvestSummary />
        </section>
    )
}

export default Invest
