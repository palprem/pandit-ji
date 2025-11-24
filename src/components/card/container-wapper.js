import React from 'react'

function ContainerWapper({ children }) {
    return (
        <div className='container py-5'>{children}</div>
    )
}

export default ContainerWapper