import React from 'react'

function Input({ label = '', type = 'text', name='', ...rest }) {
    return (
        <>
            <strong className="form-label" htmlFor={name}>{label}</strong>
            <input type={type} id={name} name={name} className="form-control" {...rest} />
        </>
    )
}

export default Input