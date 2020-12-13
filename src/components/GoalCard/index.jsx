import React from 'react';
import ReactCustomizableProgressbar from 'react-customizable-progressbar';
import { formatCurrency } from '../../common/js/formatter';
import './GoalCard.scss';

function GoalCard(props) {
    const image = (props && props.image) || '';
    const title = (props && props.title) || '';
    const expectedAmount = (props && props.expectedAmount) || 0;
    const currentAmount = (props && props.currentAmount) || 0;
    const percentage = Math.round((Number(currentAmount) * 100 ) / Number(expectedAmount));

    const expectedAmountFormatted =  formatCurrency({ value: expectedAmount });
    const currentAmountFormatted =  formatCurrency({ value: currentAmount });

    return (
        <div className="goal-card">
            <img src={image} alt={title} className="goal-card__img" />
            <h3 className="goal-card__title subtitle-text--bold"> {title} </h3>
            <div className="goal-card__graph">
                <ReactCustomizableProgressbar
                    radius={20}
                    progress={percentage}
                    strokeWidth={5}
                    strokeColor="#54D1ED"
                    strokeLinecap="round"
                    trackStrokeWidth={5}
                    counterClockwise>
                <div className="indicator">
                    <span className="normal-text--blue">{percentage}%</span>
                </div>
                </ReactCustomizableProgressbar>
            </div>
            <div className="goal-card__values">
            <span className="normal-text--blue"> {currentAmountFormatted} </span>
            <span className="normal-text"> {expectedAmountFormatted} </span>
            </div>
        </div>
    )
}

export default GoalCard
