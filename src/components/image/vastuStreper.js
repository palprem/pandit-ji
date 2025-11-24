import React from 'react'
import Image from '.'
import '../../style/header.css';

function VastuStreper({ title = '' }) {
    return (
        <div className="card p-auto text-white justify-content-center rounded-0 border-0">

            <div className='straper-bg-img'>

                <Image
                    src="/assets/vastu/vastuBanner.webp"
                    className="card-img rounded-0 straper-bg-img"
                    alt="Stony Beach" />

                <div className="card-img-overlay text-center d-flex justify-content-center">

                    <Image
                        width={200}
                        src='/assets/vastu/nivaran.webp'
                        alt='banner-logo1'
                        className='straper-img'
                    />

                    <h1 className='fw-bold straper-title mt-auto mb-auto' >{title}</h1>

                    <Image
                        width={200}
                        src='/assets/vastu/nivaran.webp'
                        alt='banner-logo2'
                        className='straper-img'
                    />

                </div>
            </div>
        </div>
    )
}

export default VastuStreper