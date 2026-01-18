import React from 'react'
import Image from '../image'
import Button from '../button'
import Link from 'next/link'
import '@/style/card.css';
import { useTranslations } from 'next-intl';

function CardWithDetails({ src, title = '', subTitle = '', href = '', buttonLable = null }) {
    const b = useTranslations('buttons');

    return (
        <div className="col-md-4 mb-5 ">
            <div className="card rounded-top-5 shadow pb-4">

                <Image
                    className="img-fluid rounded-top-5 card-img-fixed "
                    alt={"100%x280" + title}
                    src={src}
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subTitle}</p>

                    <Link href={href}>
                        <Button label={buttonLable ?? b('view')} className='w-100 rounded-pill' />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CardWithDetails