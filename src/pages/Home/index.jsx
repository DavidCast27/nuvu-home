import React from 'react'
import Blog from '../../components/Blog'
import BottomNavBar from '../../components/BottomNavBar'
import Goals from '../../components/Goals'
import Header from '../../components/Header'
import Invest from '../../components/Invest'
import Media from '../../components/Media'
import Portfolio from '../../components/Portfolio'

function Home() {
    return (
        <div>
            <Header />
            <Invest />
            <Goals />
            <Portfolio />
            <Media />
            <Blog />
            <BottomNavBar />
        </div>
    )
}

export default Home
