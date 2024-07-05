import React from 'react'
import NumberCard from './numberCard'

function SecondsCounter({number1, number2, number3, number4, number5, number6}) {
    return (
        <div className='container-fluid d-flex justify-content-between gap-3 h-25 w-100 flex-wrap'>
            <NumberCard number={'⏰'} />
            <NumberCard number={number6} />
            <NumberCard number={number5} />
            <NumberCard number={number4} />
            <NumberCard number={number3} />
            <NumberCard number={number2} />
            <NumberCard number={number1} />
        </div>
    )
}

export default SecondsCounter