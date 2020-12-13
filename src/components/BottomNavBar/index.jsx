import React from 'react';
import _map from 'lodash/map';
import home from '../../assets/icons/home.svg';
import formatListBulleted from '../../assets/icons/format_list_bulleted.svg';
import accountCircle from '../../assets/icons/account_circle.svg';
import moreHorizontal from '../../assets/icons/more_horizontal.svg';
import { ReactComponent as Add } from '../../assets/icons/add.svg';

import './BottomNavBar.scss';
import ButtonIcon from '../ButtonIcon';


function BottomNavBar() {
    const menu = [
        {
            icon: home,
            text: "Home"
        },
        {
            icon: formatListBulleted,
            text: "Historial"
        },
        {
            text: "Ahorrar"
        },
        {
            icon: accountCircle,
            text: "Mi perfil"
        },
        {
            icon: moreHorizontal,
            text: "Más"
        }
        
    ]
    return (
        <div className="bottom-nav-bar">
            <div className="bottom-nav-bar__container-main-btn container-main-btn">
                <div className="container-main-btn__wrapper">
                    <Add />
                </div>
            </div>
            <div className="bottom-nav-bar__menu">
            
                {
                    _map(menu, (item, key)=> {
                        return <ButtonIcon key={key} {...item}/>
                    })
                }
            </div>
            
        </div>
    )
}

export default BottomNavBar
