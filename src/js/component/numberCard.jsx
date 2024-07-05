import React from 'react'

function NumberCard({number}) {
    return (
        <div className="card text-bg-dark mb-3 flex-grow-1 border border-secondary">
            <div className="card-body d-flex justify-content-center align-items-center">
                <span className='fs-1'>{number}</span>
            </div>
        </div>
    )
}

export default NumberCard