import React from 'react'

function CardDetails({ children = null }) {
    return (
        <p className="card-text">{children}</p>

    )
}

export default CardDetails