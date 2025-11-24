import React from 'react'
import Image from '../image'
import Button from '../button'
import Link from 'next/link'
import '@/style/card.css';

function CardWithDetails({ src, title = '', subTitle = '', href = '', buttonLable=null }) {
    return (
        <div className="col-md-4 mb-5">
            <div className="card rounded-5 shadow">

                <div className=''>
                    <Image
                        className="img-fluid rounded-top-5 card-img-fixed "
                        alt="100%x280"
                        src={src}
                    />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{subTitle}</p>

                    <Link href={href}>
                        <Button label={buttonLable??'View'} className='w-100 rounded-pill' />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CardWithDetails