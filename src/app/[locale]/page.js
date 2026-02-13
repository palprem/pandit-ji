'use client'
import '@/style/card.css';
import '@/style/carousel.css';
import styles from "./page.module.css";
import CardWrapper from "@/components/card/card-wrapper";
import RowWrapper from '@/components/card/row-wrapper';
import CardWithColumn from '@/components/card/card-with-column';
import CarouselWrapper from '@/components/carousel/carouselWrapper';
import Image from '@/components/image';
import SimpleCard from '@/components/card/simpleCard';
import Events from './home/events';
import FormWrapper from '@/wrapper/formWrapper';
import WellcomeContent from './home/wellcomeContent';
import ContainerWapper from '@/components/card/container-wapper';
import { useTranslations } from 'next-intl';
import { allSevices, chooseUs, homeCarosel, serviceCards } from '@/utils/homeConstant';
import InfiniteScrollAnimation from '@/components/infiniteScroll';
import { SubTitle, Title } from '@/components/typography/title';
import Carousels from '@/components/carousel';
import FoundLanguage from '@/utils/foundLanguage';


export default function Home() {
  const t = useTranslations('HomePage');
  const s = useTranslations('serviceCards');
  const e = useTranslations('events');
  const c = useTranslations('chooseUs');
  const { selectedLangWithSlace } = FoundLanguage()

  return (
    <div className={styles.page + ' '} >

      <FormWrapper>
        <div className="col-md-10 col-lg-6 col-xl-7 col-12 order-2 order-lg-1 round-pill">
          <Carousels images={homeCarosel}>
            {
              homeCarosel.map((item, i) => {
                return <CarouselWrapper
                  active={i}
                  key={item.id}
                >
                  <Image alt={item.alt} {...item} />
                </CarouselWrapper>
              })
            }
          </Carousels>
        </div>

        <div className=" col-md-10 col-lg-6 col-xl-5 col-12 d-flex align-items-center order-1 order-lg-2">
          <WellcomeContent />
        </div>
      </FormWrapper>

      {/* infinite scroll for services */}
      <div className='mt-5'>
        <InfiniteScrollAnimation translate={s} items={allSevices} />
      </div>

      <CardWrapper>
        <ContainerWapper>
          <SubTitle className='text-warning text-center'>{'ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥'}</SubTitle>
          <Title className=' text-center'>{t('serviceTitle')}</Title>

          <RowWrapper >
            {
              serviceCards.map(item => {
                return <div className="col-md-3 col-sm-6 mb-3" key={item.id}>
                  <SimpleCard
                    src={item.src}
                    title={item.title}
                    text={item.text}
                    href={selectedLangWithSlace + item.href}
                  />
                </div>
              })
            }
          </RowWrapper>
        </ContainerWapper>
      </CardWrapper>


      <CardWrapper style='card-body-2 p-md-5'>
        <SubTitle className='text-warning text-center'>{'ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥'}</SubTitle>

        <Title className=' text-center'>{e('title')}</Title>
        <RowWrapper>
          <Events />
        </RowWrapper>

      </CardWrapper>


      <CardWrapper >
        <ContainerWapper>
          <SubTitle className='text-warning text-center'>{'ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥'}</SubTitle>

          <Title className=' text-center'>{c('title')}</Title>

          <RowWrapper >

            <CardWithColumn items={chooseUs} trans={c}>
              <Image
                loading='lazy'
                decoding="async"
                src="/assets/choose-us.jpg"
                alt="astrology image"
                className="as-service-img img-responsive rounded-5 w-100 shadow" />
            </CardWithColumn>

          </RowWrapper>
        </ContainerWapper>
      </CardWrapper>

    </div>
  );
}
