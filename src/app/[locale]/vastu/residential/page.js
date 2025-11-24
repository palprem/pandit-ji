import React from 'react'
import CardWrapper from '@/components/card/card-wrapper'
import VastuStreper from '@/components/image/vastuStreper'
import '../../../../style/card.css';
import ContainerWapper from '@/components/card/container-wapper';
import RowWrapper from '@/components/card/row-wrapper';
import Image from '@/components/image';
import MutedText from '@/components/typography/mutedText';
import CardTitle from '@/components/typography/cardTitle';

function ResidentialVastu() {
    return (
        <>
            <VastuStreper title='Residential Vastu' />
            <CardWrapper>
                <ContainerWapper>
                    <RowWrapper>

                        {/* <Image
                        alt='98549494'
                            src='/assets/vastu/residential.png'
                        /> */}

                        <div className="card-body my-5">
                            <MutedText className=''>
                                What results do you get when you have a kitchen in the North-West [NW] direction of your house?

                                I am sure you can relate to this question if you also have a northwest kitchen.

                                There are many opinions about this topic. Some experts claim that NW is an auspicious direction for the kitchen and some ‘experts’ oppose this opinion as well.

                                This article will clear all your doubts about a North-West kitchen with the help of some very basic Vastu Shastra Principles.
                            </MutedText>

                            <CardTitle> 1-What is North-West According to Vastu Shastra?</CardTitle>

                            <MutedText>
                                North-West direction is the meeting point of the North and the West.

                                It is also known as Vayavya Kona.
                                Deity of the North-West: Vayu [the god of wind]

                                Planet of the North-West: Chandra [the Moon]

                                Guna [Quality] of the North-West: Rajas

                                As per the rules of vastu shastra North-West is located between 304°-326° on a compass.
                            </MutedText>


                            <CardTitle> 1-What is North-West According to Vastu Shastra?</CardTitle>

                            <MutedText>
                                North-West is associated with the Moon which has a restless temperament. Moon is also related with the movement and the dispersal of goods.

                                The feminine quality of moon has an impact on women’s health. It also influences nerves, brain, bladder, body fluids etc.

                                If the northwest zone of moon emits inauspicious energy, it can lead to mental instability and ailments such as asthma, dysentery, gynecological problems etc.
                            </MutedText>
                            <CardTitle> 1-What is North-West According to Vastu Shastra?</CardTitle>

                            <MutedText>
                                North-West is associated with the Moon which has a restless temperament. Moon is also related with the movement and the dispersal of goods.

                                The feminine quality of moon has an impact on women’s health. It also influences nerves, brain, bladder, body fluids etc.

                                If the northwest zone of moon emits inauspicious energy, it can lead to mental instability and ailments such as asthma, dysentery, gynecological problems etc.
                            </MutedText>
                            
                            <CardTitle> 1-What is North-West According to Vastu Shastra?</CardTitle>

                            <MutedText>
                                North-West is associated with the Moon which has a restless temperament. Moon is also related with the movement and the dispersal of goods.

                                The feminine quality of moon has an impact on women’s health. It also influences nerves, brain, bladder, body fluids etc.

                                If the northwest zone of moon emits inauspicious energy, it can lead to mental instability and ailments such as asthma, dysentery, gynecological problems etc.
                            </MutedText>

                        </div>
                    </RowWrapper>
                </ContainerWapper>

            </CardWrapper>
        </>
    )
}

export default ResidentialVastu