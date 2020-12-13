import React from 'react'
import GoalCard from '../GoalCard'
import Title from '../Title';
import palm from '../../assets/images/palm.svg';
import laptop from '../../assets/images/laptop.svg';
import add from '../../assets/icons/add_circle_outline.svg';

import './Goals.scss';
import ButtonIcon from '../ButtonIcon';

function Goals() {
    return (
        <section className="goals">
            <div className="goals__header" >
                <Title text="Tus metas" />
                <ButtonIcon icon={add} />
            </div>
            <div className="goals__items">
                <GoalCard title="Viaje a Islas Canarias" image={palm} currentAmount="1630000"  expectedAmount="8000000"/>
                <GoalCard title="Macbook Pro" image={laptop} currentAmount="0"  expectedAmount="7000000"/>
            </div>
        </section>
    )
}

export default Goals
