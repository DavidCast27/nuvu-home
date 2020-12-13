import React from 'react';
import './ItemList.scss';

function ItemList(props) {
    const title = (props && props.title) || '';
    const desc = (props && props.desc) || '';
    const image = (props && props.image) || '';
    const subtitle = (props && props.subtitle) || '';

    return (
        <React.Fragment>
            <div className="item-list">
                <div className="item-list__left-section left-section">
                    <h3 className="left-section__title subtitle-text" > {title} </h3>
                    {desc && <p className="left-section__desc normal-text"> {desc} </p>}
                </div>
                <div className="item-list__rigth-section rigth-section">
                    {subtitle && <h3 className="rigth-section__subtitle subtitle-text--bold" > {subtitle} </h3>}
                    {image && <img className="rigth-section__img"
                        src={image} 
                        alt={title} />}
                </div>
            </div>
            <hr className="separator"/>
        </React.Fragment>
        
    )
}

export default ItemList
