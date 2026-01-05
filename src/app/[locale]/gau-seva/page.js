import Button from '@/components/button'
import CardWrapper from '@/components/card/card-wrapper'
import ContainerWapper from '@/components/card/container-wapper'
import RowWrapper from '@/components/card/row-wrapper'
import MutedText from '@/components/typography/mutedText'
import { H3Title, SmallTitle, SubTitle, Title } from '@/components/typography/title'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import '../../../style/card.css';
import CardWithVideo from '@/components/card/card-with-video'
import Image from '@/components/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouseChimney, faPhone } from '@fortawesome/free-solid-svg-icons'
import KnowMore from '@/components/KnowMore'

function GauSeva() {
  const m = useTranslations('poojaBenifits');
  const f = useTranslations('footer');
  const g = useTranslations('gau_seva');
  const b = useTranslations('buttons');

  return (
    <>
      <div style={{ backgroundImage: "url(/assets/gau/home-bg.webp)", minHeight: "70lvh" }}>

        <ContainerWapper>
          <RowWrapper>
            <div className='col-md-6 col-12 py-5'>
              <div className='px-5'>
                <Title>{g('title')}</Title>
                <MutedText className='card-text '>{g('subTitle')}</MutedText>

                <div className='my-5'>
                  <RowWrapper>
                    <div className='col-md-6 col-12'>
                      <CardWithVideo videoId='VyPGdBxzdhQ' />

                    </div>
                    <div className='col-md-6 col-12'>

                      <p className=''>
                        <FontAwesomeIcon icon={faEnvelope} />
                        {f('add_2')}
                      </p>
                      <p className=''><FontAwesomeIcon icon={faPhone} />{f('phone_1')}</p>

                    </div>
                  </RowWrapper>
                </div>

                <Link href={''}>
                  <Button label={b('donate')} className='w-25  mt-3' />
                </Link>
              </div>
            </div>
            <div className='col-md-6 col-12' >
              <Image
                loading='lazy'
                decoding="async"
                src="/assets/choose-us.jpg"
                alt="astrology image"
                className="as-service-img img-responsive w-100 shadow" />
            </div>
          </RowWrapper>
        </ContainerWapper>
      </div>

      <ContainerWapper>
        <div>
          <RowWrapper className='shadow-sm rounded-3 card-adjust'>

            {Array.from({ length: 3 }, (_, i) => {
              return <div key={i} className=" col-md-4 col-sm-6 col-12 mb-3  " >
                <div className='card border-0 py-3'>
                  <div className="card-body rounded-3 py-5" style={{ backgroundColor: "#f6f6f6" }}>
                    <SubTitle className=' text-left text-warning'>{g(i + 1 + '_care')}</SubTitle>
                    <H3Title className="card-text">{g(i + 1 + '_care_details')}</H3Title>
                  </div>
                </div>
              </div>
            })}

          </RowWrapper>
        </div>
      </ContainerWapper>

      <ContainerWapper>
        <RowWrapper className=''>
          <div className='col-md-6 col-12'>
            <div className='px-4'>
              <Image
                loading='lazy'
                decoding="async"
                src="/assets/choose-us.jpg"
                alt="astrology image"
                className="as-service-img img-responsive  w-100 shadow" />
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <div className='px-5'>

              <SubTitle className='text-success'>{' hbh bhbb b hb hb hb hb h bhb h b '}</SubTitle>
              <Title>{'A Lifeline For Injured & Abandoned Cows '}</Title>
              <MutedText className='card-text '>{'Founded in 2013 by Pujya Devi Chitralekha Ji, Gau Seva Dham is dedicated to saving and serving Gau Mata and helpless animals. Situated in Hodal, Palwal District, Haryana, the NGO operates under the World Sankirtan Tour Trust, providing free medical treatment, food, and shelter to stray and injured cows.'}</MutedText>

              <div className='my-5'>
                <RowWrapper className=''>
                  <div className=' col-6 '>
                    <div className='border-1 rounded-2 bg-success mr-4 text-center'>
                      <p className=' text-light py-5 fs-2'>
                        20+ Years
                      </p>
                    </div>
                  </div>
                  <div className='col-6'>
                    24/7 Animal Rescue & Medical Care
                    State-of-the-art Veterinary Facilities
                    Community Outreach for Animal Welfare
                  </div>
                </RowWrapper>
              </div>
            </div>
          </div>
        </RowWrapper>
      </ContainerWapper>


      {/* <div className='py-5'> */}

      {/* <div class="container"><div class="wraper bg-warning rounded my-5 p-5"><div class="row g-0 "><div class="col col-lg-3 col-md-6 col-12"><div class="item p-5">
          <i class="fi flaticon-handshake"></i><h2><span class="odometer odometer-auto-theme" data-count="40"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">4</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></span>K+</h2><p>Animals Treated</p></div></div><div class="col col-lg-3 col-md-6 col-12"><div class="item p-5">

            <i class="fi flaticon-first-aid-kit"></i><h2><span class="odometer odometer-auto-theme" data-count="150"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">1</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">5</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></span>+</h2><p>Trained Staff &amp; Caretakers</p></div></div><div class="col col-lg-3 col-md-6 col-12"><div class="item p-5">

              <i class="fi flaticon-charity"></i><h2><span class="odometer odometer-auto-theme" data-count="10"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">1</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></span>K+</h2><p>Supporting Our Mission</p></div></div><div class="col col-lg-3 col-md-6 col-12"><div class="item p-5">

                <i class="fi flaticon-medal"></i><h2><span class="odometer odometer-auto-theme" data-count="10"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">1</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></span>+</h2><p>Years of Serving</p></div></div></div></div></div>
      </div> */}

      <div className='card-body-2 '>
        <div className='p-5'>
          <SubTitle className='text-success text-center'>{' hbh bhbb b hb hb hb hb h bhb h b '}</SubTitle>
          <Title className='text-center'>{'A Lifeline For Injured & Abandoned Cows '}</Title>
          <RowWrapper className='p-5'>
            <div className='col-md-6 col-12'>
              <div className='p-4 card border-0'>
                <Image
                  loading='lazy'
                  decoding="async"
                  src="/assets/choose-us.jpg"
                  alt="astrology image"
                  className="as-service-img img-responsive  w-100 shadow" />
                <div className="card-body">
                  <h5 className="card-title">yuhyuh</h5>
                  <p className="card-text">jbuyhuihjhnuhuhuhuhuhuhuhiih h9ujjunb 9jjuuhjiuhuhjhiuhj</p>



                </div>
              </div>
            </div>
            <div className='col-md-6 col-12'>
              <div className='p-4 card border-0' >
                <Image
                  loading='lazy'
                  decoding="async"
                  src="/assets/choose-us.jpg"
                  alt="astrology image"
                  className="as-service-img img-responsive  w-100 shadow" />
                <div className="card-body">
                  <h5 className="card-title">yuhyuh</h5>
                  <p className="card-text">jbuyhuihuhjiui jnuhuih ujjoi ijiojoi huhjhiuhj</p>



                </div>
              </div>
            </div>
          </RowWrapper>
        </div>
      </div>

      <ContainerWapper>
        <CardWrapper style='card-body-2 my-5'>
          <RowWrapper>
            <div className='m-5 col-md-6 col-12'>

              <KnowMore />
            </div>
            <div className='col-md-6 col-12'>

            </div>
          </RowWrapper>
        </CardWrapper>
      </ContainerWapper>

    </>


  )
}

export default GauSeva