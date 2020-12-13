import React from 'react'
import _map from 'lodash/map';
import ItemList from '../ItemList'
import './ListView.scss'

function ListView(props) {
    const items = (props && props.items) || [];

    return (
        <div className="list-view">
        {
            _map(items, (item, key)=> {
                const title = (item && item.title) || '';
                const desc = (item && item.desc) || '';
                const image = (item && item.image) || '';
                const subtitle = (item && item.subtitle) || '';
                return <ItemList key={key} 
                    title={title}
                    desc={desc}
                    image={image}
                    subtitle={subtitle} />
            })
        }
        </div>
    )
}

export default ListView
