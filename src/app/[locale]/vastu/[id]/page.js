import CardWrapper from '@/components/card/card-wrapper';
import ContainerWapper from '@/components/card/container-wapper';
import RowWrapper from '@/components/card/row-wrapper';
import Image from '@/components/image';
import VastuStreper from '@/components/image/vastuStreper'
import StrongTitle from '@/components/typography/strongTitle';
import { vastuConstant } from '@/utils/vastuConstant';
import { useTranslations } from 'next-intl';
import { use } from 'react';
import '@/style/card.css';
import MutedText from '@/components/typography/mutedText';
import { SubTitle } from '@/components/typography/title';
import Button from '@/components/button';
import Input from '@/components/input';
import { faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faTex } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import KnowMore from '@/components/KnowMore';

function VastuDetails({ params }) {
    const { id: name } = use(params);

    const r = useTranslations(name);
    const data = vastuConstant(name) ?? [];

    return (
        <>
            <VastuStreper title={r('title')} />
            <CardWrapper style=''>
                <ContainerWapper>
                    <RowWrapper>
                        <div className='col-md-8 col-12'>
                            <div className="card-body ">
                                <div className='d-block '>
                                    <Image
                                        src={`/assets/vastu/${name}.png`}
                                        alt={`${name} image`}
                                        className='w-100 '
                                    />
                                </div>

                                {data?.map((item, index) => {
                                    return <div className='d-block my-5' key={index}>
                                        <div className="accordion" id={`accordion${index + 1}`}>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`} aria-expanded="true" aria-controls="collapseOne">
                                                        <SubTitle>
                                                            {index + 1 + '- ' + r(item.title)}
                                                        </SubTitle>
                                                    </button>
                                                </h2>
                                                <div id={`collapse${index + 1}`} className={`accordion-collapse collapse ${index == 0 ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent={`#accordion${index + 1}`}>
                                                    <div className="accordion-body">
                                                        <MutedText className='card-text'>
                                                            {r(item.title + '_')}
                                                        </MutedText>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                })}

                            </div>

                            <div className='d-flex mb-5 gap-5 col-12'>
                                <Image
                                    src='/assets/vastu/3.png'
                                    alt='Residential iamge'
                                    style={{ width: "30%" }}
                                />
                                <Image
                                    src='/assets/vastu/1.png'
                                    alt='Residential iamge'
                                    style={{ width: "30%" }}
                                />
                                <Image
                                    src='/assets/vastu/2.png'
                                    alt='Residential iamge'
                                    style={{ width: "30%" }}
                                />
                            </div>

                        </div>

                        <div className='col-md-4 col-12'>
                            <div className=' card-body'>
                                <div className=' card-body-2'>
                                    <SubTitle className='border-4 border-start border-dark p-2 my-3 '>Benefits of Vastu</SubTitle>
                                    <div className="mx-1 mx-md-4  pb-3">
                                        <StrongTitle>
                                            <MutedText className='card-text'>
                                                {r('subTitle')}
                                            </MutedText>
                                        </StrongTitle>
                                    </div>
                                </div>

                                <div className='my-4 card-body-2'>
                                <KnowMore/>
                                </div>
                            </div>

                        </div>
                    </RowWrapper>
                </ContainerWapper>

            </CardWrapper>
        </>
    )
}

export default VastuDetails;