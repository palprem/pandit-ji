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
import Streper from '@/components/image/streper'

export const metadata = {
  title: "Gau Seva Services | Ashram Construction",
  description:
    "Dedicated Gau Seva services including cow shelter, care, puja and traditional Sanatan practices.",
  keywords: [
    "Gau Seva",
    "Cow Protection",
    "Goshala",
    "Ashram Gau Seva"
  ],
};


function GauSeva() {
  const f = useTranslations('footer');
  const g = useTranslations('gau_seva');
  const b = useTranslations('buttons');


  return (
    <>
      <Streper />
      <div style={{ backgroundImage: "url(/assets/gau/home-bg.webp)", minHeight: "70lvh" }}>

        <ContainerWapper>
          <RowWrapper>
            <div className='col-md-6 col-12' >
              <Image
                loading='lazy'
                decoding="async"
                src="/assets/carousel/carousel-3.jpg"
                alt="astrology image"
                className="as-service-img img-responsive w-100 shadow" />
            </div>

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
                src="/assets/gau/4.png"
                alt="astrology image"
                className="as-service-img img-responsive  w-100 shadow" />
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <div className='px-5'>

              <SubTitle className='text-success'>{g('animal')}</SubTitle>
              <Title>{g('animal_title')}</Title>
              <MutedText className='card-text '>{g('animal_details')}</MutedText>

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
                    {g('24')}
                  </div>
                </RowWrapper>
              </div>
            </div>
          </div>
        </RowWrapper>
      </ContainerWapper>


      <div className='card-body-2 '>
        <div className='p-5'>
          <RowWrapper className='p-5'>
            <div className='col-md-6 col-12'>
              <div className='p-4 card border-0'>
                <Image
                  loading='lazy'
                  decoding="async"
                  src="/assets/gau/4.png"
                  alt="astrology image"
                  className="as-service-img img-responsive w-100 shadow" />

              </div>
            </div>
            <div className='col-md-6 col-12'>
              <div className='p-4 card border-0' >
                <Image
                  loading='lazy'
                  decoding="async"
                  src="/assets/gau/5.jpg"
                  alt="astrology image"
                  className="as-service-img img-responsive w-100 shadow" />

              </div>
            </div>
          </RowWrapper>
        </div>
      </div>

      <ContainerWapper>
        <CardWrapper style='card-body-2 my-5'>
          <RowWrapper>
            <div className='m-5 col-md-6 col-12'>

              <KnowMore type='gau seva' />
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