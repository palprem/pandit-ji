import React from 'react'
import MutedText from '../typography/mutedText'
import Link from 'next/link'
import '../../style/card.css';
import CustomImage from '../image';
import { useTranslations } from 'next-intl';

export default function SimpleCard({ title = '', text = '', src = '', href='' }) {
    const t = useTranslations('serviceCards');

    return (
        <div className="card border-0 my-2 liner-animation:hover" style={{ boxShadow: ' rgba(0, 0, 0, 0.06) 0px 0px 30px 0px' }}>
            <div className="card-body text-center">
                <CustomImage
                    className='bg-gray my-5 w-25 '
                    src={src}
                    alt='service'
                />
                <h5 className="card-title  mb-4">{t(title)}</h5>
                <MutedText className=' my-2 mb-4' >{t(text)}</MutedText>
                <MutedText >
                    <Link href={href} className='card-link text-warning '>{t('read_more')}</Link></MutedText>
            </div>
        </div>
    )
}
