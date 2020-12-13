import React from 'react';
import './ButtonIcon.scss';

function ButtonIcon(props) {
    const icon = (props && props.icon) || '';
    const text = (props && props.text) || null;
    return (
        <button className="button-icon">
            {icon ?
                <img src={icon} 
                alt={text} 
                className="button-icon__img" />
                : <div className="button-icon__img"></div>
            }
            {text && <span className="normal-text">{text}</span>}
        </button>
    )
}

export default ButtonIcon
