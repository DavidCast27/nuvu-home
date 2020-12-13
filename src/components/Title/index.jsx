import React from 'react';

function Title(props) {
    const text = (props && props.text) || '';
    return (
        <h2 className="title-text"> {text} </h2>
    )
}

export default Title
