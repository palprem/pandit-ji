import React from 'react'
import '../../style/card.css';
import Title from '../typography/title';
import CardHoverPopupAnimation from '../animations/cardHoverPopupAnimation';
import StringTitle from '../typography/strongTitle';
import MutedText from '../typography/mutedText';
import Image from '../image';

const content = [
    {
        heading: 'No Demolitions required',
        text: 'With Vastu Consultation, I believe that everything can be improved by removing or destroying the current place, & location'
    },
    {
        heading: 'Customized solutions as per astrological charts',
        text: 'I offer an in-depth analysis of the birth chart, planetary positions, and the 5 elements of the human body will provide you with the best results'
    },
    {
        heading: 'Easy, Simple, and Applicable Solutions',
        text: 'With my expertise, I am  focused on providing a solution that is easy to understand, simple to use, and applicable in daily life'
    },
    {
        heading: 'Experience and Expertise',
        text: 'With 25 years of experience, I have enhanced the lives of many individuals. Interacting with other industry experts and studying the subject extensively studies the invisible earth energies and provides you with the scientific solution for your solution.'
    },
]

function CardWithColumn({ style }) {
    return (
            <>
                <div className="col-md-6 col-12">

                    <Title>Why Choose Us</Title>
                    {
                        content.map((item, index) => {
                            return <div className='my-3' key={index}>
                                <StringTitle>{item.heading}</StringTitle>
                                <MutedText>{item.text}</MutedText>
                            </div>
                        })
                    }
                </div>

                <div className="col-md-6 col-12 text-center ">
                    {/* <CardHoverPopupAnimation> */}
                        <Image
                            loading='lazy'
                            decoding="async"
                            src="/assets/choose-us.jpg"
                            alt="astrology image"
                            className="as-service-img img-responsive rounded-5 w-100 shadow" />
                    {/* </CardHoverPopupAnimation> */}
                </div>
            </>
    )
}
export default CardWithColumn