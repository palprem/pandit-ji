import React from 'react';
import '../../../style/about.css';
import '../../../style/card.css';
import { useTranslations } from 'next-intl';
import Streper from '@/components/image/streper';
import Image from '@/components/image';
import KnowMore from '@/components/KnowMore';
import CardWrapper from '@/components/card/card-wrapper';
import ContainerWapper from '@/components/card/container-wapper';
import RowWrapper from '@/components/card/row-wrapper';

export const metadata = {
    title: "About"
}

function AboutUs() {
    const t = useTranslations('Navbar');
    const a = useTranslations('about');

    return (
        <>
            <div className="" style={{ marginTop: '70px' }}>
                <Streper title={t('about')} />

            </div>

            <div className="bread-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-8">

                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-4">
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutus-secktion paddingTB60 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="strong">{a('who')}</h1>
                            <p className="lead">{a('who_1')}</p>
                            <div className='my-5 '>
                                <div className=''>
                                    <Image
                                        src='/assets/profile.jpg'
                                        className='w-50 rounded-4'
                                        alt='profile...'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>{a('who_details')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <CardWrapper>
                <ContainerWapper>
                    <RowWrapper>
                        <div className="col-md-8 col-12 card-body-2" >
                            <div className='my-4 card-body-2'>
                                <KnowMore type='know more' />
                            </div>
                        </div>
                        <div className="col-md-4 col-12 card-body-2" >
                        </div>
                    </RowWrapper>
                </ContainerWapper>
            </CardWrapper>

        </>
    )
}

export default AboutUs