import React from 'react'
import _map from 'lodash/map';
import ListView from '../ListView'

import INVEST_SUMMARY from './__mock__/items'
import { formatCurrency } from '../../common/js/formatter';

function InvestSummary() {
    const itemsFormatted = _map(INVEST_SUMMARY, (item) => {
        const subtitleFormatted = formatCurrency({ value: item.subtitle });
        return {...item, subtitle: subtitleFormatted};
    })
    return (
        <div>
            <ListView items={itemsFormatted}/>
        </div>
    )
}

export default InvestSummary
