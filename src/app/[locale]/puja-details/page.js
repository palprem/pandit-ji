'use client';

import React, { use } from 'react'
import Image from '@/components/image'
import '../../../style/card.css';
import ContainerWapper from '@/components/card/container-wapper';
import RowWrapper from '@/components/card/row-wrapper';
import Button from '@/components/button';
import CardWrapper from '@/components/card/card-wrapper';
import { SubTitle, Title } from '@/components/typography/title';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { poojaItems, } from '@/utils/poojaConstant';
import FoundLanguage from '@/utils/foundLanguage';
import { useSearchParams } from "next/navigation";
import MutedText from '@/components/typography/mutedText';
import CardWithVideo from '@/components/card/card-with-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouseChimney, faPhone, faPrint, faUserTie } from '@fortawesome/free-solid-svg-icons';
import KnowMore from '@/components/KnowMore';

function PoojaBooking() {
    const params = useSearchParams();
    const id = params.get("id");
    const name = params.get("name");

    const { selectedLangWithSlace } = FoundLanguage();

    const items = poojaItems(selectedLangWithSlace, name);
    const [data] = items?.filter(item => item.id == id) ?? '';
    let p;
    if (items.length) {
        p = useTranslations(name);
    } else p = (key) => key


    const m = useTranslations('poojaBenifits');
    const b = useTranslations('buttons');
    const f = useTranslations('footer');

    return (
        <div>
            <CardWrapper style='card-body-2'>
                <ContainerWapper>
                    <RowWrapper>
                        <div className="col-md-6 col-12">
                            <SubTitle className='text-warning'>{'🕉️ ' + p(data?.title)}</SubTitle>
                            <Title>{p(data?.details)}</Title>
                            <MutedText className='card-text'>{'🔱 ' + p(data?.subTitle)}</MutedText>

                            <div className='my-5'>
                                <RowWrapper>
                                    <div className='col-md-6 col-12'>
                                        <CardWithVideo videoId='VyPGdBxzdhQ' />
                                    </div>
                                    <div className='col-md-6 col-12'>
                                        <p className=''>
                                            <FontAwesomeIcon icon={faHouseChimney} />
                                            {f('add_1')}</p>
                                        <p className=''>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            {f('add_2')}
                                        </p>
                                        <p className=''><FontAwesomeIcon icon={faPhone} />{f('phone_1')}</p>
                                    </div>
                                </RowWrapper>
                            </div>

                            <Link href={''}>
                                <Button label={b('book_pooja')} className='w-100 rounded-5' />
                            </Link>
                        </div>

                        <div className="col-md-6 col-12 text-center ">
                            <Image
                                src={`/assets/puja/${name}/${data?.id}.png`}
                                alt={name + " Masked"}
                                className=" rounded-top-5  "
                                style={{ height: "36rem" }}
                            />
                        </div>
                    </RowWrapper>

                </ContainerWapper>
            </CardWrapper>


            <div className='mt-5 card-body' >
                <hr />
                <SubTitle className='text-warning text-center'>{'ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥'}</SubTitle>
                <Title className='text-center'>{'🕉️ ' + p(data?.title)}</Title>
                <hr />
            </div>

            <ContainerWapper>
                <RowWrapper className=''>
                    {Array.from({ length: 4 }, (_, i) => {
                        return <div key={i} className=" col-md-3 col-sm-6 col-12 mb-3  " >
                            <div className='card shadow card-adjust-7 border-0 p-2 '>
                                <div className="card-body rounded py-5" style={{ backgroundColor: "#f6f6f6" }}>
                                    <SubTitle className=' text-left'>{m(String(i + 1))}</SubTitle>
                                    <p className="card-text">{m(i + 1 + "_")}</p>
                                </div>
                            </div>
                        </div>
                    })}

                </RowWrapper>
            </ContainerWapper>

            <hr />
            <ContainerWapper>
                <CardWrapper style='card-body-2'>
                    <RowWrapper>
                        <div className='m-5 col-md-6 col-12'>
                            <KnowMore type={name +' Puja'} />
                        </div>

                    </RowWrapper>
                </CardWrapper>
            </ContainerWapper>


        </div>
    )
}

export default PoojaBooking