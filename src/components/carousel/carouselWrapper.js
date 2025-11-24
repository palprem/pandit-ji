import React from 'react'

function CarouselWrapper({ children, active }) {

    return (
        <div className={`position-relative carousel-item ${active==0 ? "active" : ""}`}>
            {children}
            <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
                <button type='button' className='btn btn-warning rounded-0 text-white'>Donate Us</button>
            </div>
        </div>
    )
}

export default CarouselWrapper