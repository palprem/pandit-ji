import React from 'react'
import Image from '@/components/image'
import '../../../style/card.css';
import ContainerWapper from '@/components/card/container-wapper';
import RowWrapper from '@/components/card/row-wrapper';
import MutedText from '@/components/typography/mutedText';
import Button from '@/components/button';
import CardWrapper from '@/components/card/card-wrapper';
import CardTitle from '@/components/typography/cardTitle';

function PujaBooking() {
    return (
        <CardWrapper style=''>
            <ContainerWapper>
                <RowWrapper>

                    <div className="col-12 text-center pb-5 ">
                        <div className='w-100'>
                            <Image
                                loading='lazy'
                                decoding="async"
                                src='/assets/puja/mahadev.png'
                                alt="astrology image"
                                className="as-service-img img-responsive w-75 shadow" />
                        </div>
                    </div>

                    <div className="col-12 text-left px-md-5">

                        <CardTitle>Atharvashirsha Ganesh Path and Homam</CardTitle>

                        <MutedText>The Atharvashirsha Ganesh Path and Homam invokes Lord Ganesha, the remover of obstacles, through sacred chants and fire rituals. This powerful practice clears life’s hurdles while attracting prosperity, wisdom, and success. By harnessing Ganesha’s divine blessings, devotees experience transformative positivity and abundance, welcoming a flourishing, obstacle-free life filled with spiritual growth and fulfilled aspirations.
                        </MutedText>

                        <Button label='Book your puja' className='w-100 rounded-pill my-5' />
                    </div>

                </RowWrapper>
            </ContainerWapper>
        </CardWrapper>
    )
}

export default PujaBooking