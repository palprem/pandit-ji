'use client';

import React from 'react'
import CardWithDetails from '@/components/card/card-with-details'
import ContainerWapper from '@/components/card/container-wapper'
import RowWrapper from '@/components/card/row-wrapper'
import Streper from '@/components/image/streper'
import FoundLanguage from '@/utils/foundLanguage'


function DonateUs() {
    const { selectedLangWithSlace } = FoundLanguage()

    const ganeshPujaItems = [
        {
            title: 'Gau Seva',
            subTitle: 'With supporting text below as a natural lead-in to additional content.',
            src: 'https://kashiarchan.com/Upload/dab88bff-cc37-4a1c-94c0-f1274c21c5d0Atharvashirsha%20Ganesh%20Path%20and%20Homam.png',
            href: `${selectedLangWithSlace}/donation-details`,
            buttonLable: 'Donate Now',
        },
        {
            title: 'Vaidik Gurukul',
            subTitle: 'With supporting text below as a natural lead-in to additional content.',
            src: 'https://kashiarchan.com/Upload/dab88bff-cc37-4a1c-94c0-f1274c21c5d0Atharvashirsha%20Ganesh%20Path%20and%20Homam.png',
            href: `${selectedLangWithSlace}/donation-details`,
            buttonLable: 'Donate Now',
        },
        {
            title: 'Poor Children',
            subTitle: 'With supporting text below as a natural lead-in to additional content.',
            src: 'https://kashiarchan.com/Upload/dab88bff-cc37-4a1c-94c0-f1274c21c5d0Atharvashirsha%20Ganesh%20Path%20and%20Homam.png',
            href: `${selectedLangWithSlace}/donation-details`,
            buttonLable: 'Donate Now',
        },
        {
            title: 'Bhandara',
            subTitle: 'With supporting text below as a natural lead-in to additional content.',
            src: 'https://kashiarchan.com/Upload/dab88bff-cc37-4a1c-94c0-f1274c21c5d0Atharvashirsha%20Ganesh%20Path%20and%20Homam.png',
            href: `${selectedLangWithSlace}/donation-details`,
            buttonLable: 'Donate Now',
        },
    
    
    ]


    return (
        <>
            <Streper title='Donate Us' />
            <ContainerWapper>
                <RowWrapper>
                    {
                        ganeshPujaItems.map((item, index) => {
                            return <CardWithDetails {...item} key={index} />
                        })
                    }
                </RowWrapper>
            </ContainerWapper>
        </>
    )
}

export default DonateUs