import React from 'react'
import Image from '.'
import '../../style/header.css';

function Streper({ title = '' }) {
    return (
        <div className="card text-white justify-content-center rounded-0 border-0">

            <div className='straper-bg-img'>

                <Image
                    src="/assets/puja/strepper.webp"
                    className="card-img rounded-0 straper-bg-img"
                    alt="Stony Beach" />

                <div className="card-img-overlay text-center d-flex justify-content-center">
                    <Image
                        style={{ filter: "unset" }}
                        src='/assets/puja/banner-logo.webp'
                        alt='banner-logo3'
                        className='straper-img '
                        width={200}
                    />

                    <h1 className='fw-bold straper-title mt-auto mb-auto' >{title}</h1>

                    <Image
                        style={{ filter: "unset" }}
                        src='/assets/puja/banner-logo.webp'
                        alt='banner-logo4'
                        className='straper-img'
                        width={200}
                    />

                </div>

            </div>
        </div>

    )
}

export default Streper