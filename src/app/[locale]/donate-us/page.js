'use client';

import React from 'react'
import RowWrapper from '@/components/card/row-wrapper'
import Streper from '@/components/image/streper'
import Image from '@/components/image';
import Events from '../home/events';
import { SubTitle, Title } from '@/components/typography/title';
import '../../../style/donate.css'
import { useTranslations } from 'use-intl';

function DonateUs() {
    const d = useTranslations('donate');
    const b = useTranslations('buttons');

    return (
        <>
            <Streper title={b('donate')} />

            <div className='mt-5 card-body' >
                <hr />
                <SubTitle className='text-warning text-center pb-5'>{d('title')} </SubTitle>
                <hr />
            </div>

            <div className='head-card ' style={{ marginTop: "-5rem" }}>
                <RowWrapper >
                    {
                        Array.from({ length: 5 }, (_, item) => {
                            console.log('item', item)
                            return <div className='col-md-6 col-12' key={item}>
                                <div
                                    style={{ background: `linear-gradient(rgba(0, 0, 0, .7), rgb(183 172 172 / 70%)), url(/assets/donate/${item + 1 + ''}.jpg)` }}
                                    className="image-donate-banner single-card card shadow border" >
                                    <div className="container " style={{ direction: 'rtl' }}>
                                        <Image
                                            src="/assets/donate/qr_code.jpeg"
                                            className=' d-block w-25 position-block overflow-hidden lg-text text-light text-end '
                                        />
                                        <h1 className="lg-text text-light text-end pt-3">{d(item + 1 + '')}</h1>
                                        <p className="image-aboutus-para text-end">{d(item + 1 + '_')}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }


                </RowWrapper>
                <div className='mt-5 card-body' >
                    <hr />
                    <SubTitle className='text-warning text-center pb-5'>ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥</SubTitle>
                    <hr />

                </div>
                <div className=' py-5'>
                    <Events />
                </div>

            </div>
        </>
    )
}

export default DonateUs