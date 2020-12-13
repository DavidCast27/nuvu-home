import React from 'react'
import Counter from '../Counter';
import MediaCard from '../MediaCard'
import Title from '../Title'
import './Media.scss';

function Media() {
    return (
        <section className="media">
            <Title text="Los P*t@s del ahorro" />
            <MediaCard />
            <Counter />
        </section>
    )
}

export default Media
