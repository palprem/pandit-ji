import React from 'react'

function CardWrapper({ children, style = '' }) {
    return (
        <div className={style + " card w-100 border-0 "}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default CardWrapper