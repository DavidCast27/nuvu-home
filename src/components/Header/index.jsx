import React from 'react'
import ButtonIcon from '../ButtonIcon'
import Title from '../Title'
import notifications from '../../assets/icons/notifications.svg';

import './Header.scss';


function Header() {

    return (
        <header className="header">
            <Title text="Hola, Camila" />
            <ButtonIcon icon={notifications} />
        </header>
    )
}

export default Header
