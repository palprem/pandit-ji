import React from 'react'

function Button({ label = '', className = '', outline = false, type = 'button', loading = false, ...rest }) {

    if (loading) return <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
    </button>

    return (
        <button
            {...rest}
            type={type}
            data-mdb-button-init data-mdb-ripple-init
            className={`${outline ? 'btn-outline-warning  ' : " btn-warning text-white "} ` + className + ' btn rounded-0'}>
          <strong>{label}</strong>
        </button>
    )
}

export default Button