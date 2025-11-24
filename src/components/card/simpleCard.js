import React from 'react'
import MutedText from '../typography/mutedText'
import Link from 'next/link'
import '../../style/card.css';
import CustomImage from '../image';

export default function SimpleCard({ title = '', text = '' }) {
    return (
        <div className="card border-0 my-2 liner-animation:hover" style={{ boxShadow: ' rgba(0, 0, 0, 0.06) 0px 0px 30px 0px' }}>
            <div className="card-body text-center">
                <CustomImage
                    className='bg-gray rounded-pill my-5 w-25 '
                    src='https://www.aunkarvastu.com/wp-content/uploads/2022/04/home-astrology-5331936-4446379-1.png'
                    alt='service'
                />
                <h5 className="card-title  mb-4">{title}</h5>
                <MutedText className=' my-2 mb-4' >{text}</MutedText>
                <MutedText ><Link href='' className='card-link text-warning '>READ MORE</Link></MutedText>
            </div>
        </div>
    )
}
