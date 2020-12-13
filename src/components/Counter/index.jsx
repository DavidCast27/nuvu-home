import React from 'react';
import {ReactComponent as Ellipse} from '../../assets/icons/ellipse.svg'

import './Counter.scss';

function Counter(props) {
    

    return (
        <div className="counter">
            <Ellipse className="counter__ellipse"/>
            <Ellipse className="counter__ellipse"/>
            <Ellipse className="counter__ellipse"/>
        </div>
    )
}

export default Counter
