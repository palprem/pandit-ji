'use client'

import React, { useEffect, useRef, useState } from 'react'
import '@/style/header.css';

function CustomMavbarWrapper({ children, navLavel = '' }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);
    return (
        <div ref={ref} className="dropdown">
            <button className="nav-link dropdown-toggle" id={navLavel} role="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            // data-bs-toggle="dropdown"
            >
                {navLavel}
            </button>
           

            {open && 
                <div className="dropdown-menu custom-width w-100 shadow p-3 border-3 border-warning d-block" >
                    <div className="container">
                        <div className="row g-3">
                            {children}
                        </div>
                    </div>
                </div>

            }


        </div>
    )
}

export default CustomMavbarWrapper