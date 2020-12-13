import React from 'react'
import ListView from '../ListView'

import ITEMS from './__mock__/items'

function Blog() {
    const items = ITEMS;
    return (
        <section className="blog">
            <ListView items={items}/>
        </section>
    )
}

export default Blog
