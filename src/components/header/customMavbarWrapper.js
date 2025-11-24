import React from 'react'
import '@/style/header.css';

function CustomMavbarWrapper({ children, navLavel = '' }) {
    return (
        <>
            <a className="nav-link dropdown-toggle" href="#" id={navLavel + "Dropdown"} role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                {navLavel}
            </a>


            <div className="dropdown-menu custom-width w-100 shadow p-3 border-3 border-warning" aria-labelledby={navLavel + "Dropdown"}>
                <div className="container">
                    <div className="row g-3">


                        {children}
                    </div>
                </div>
            </div>




        </>
    )
}

export default CustomMavbarWrapper