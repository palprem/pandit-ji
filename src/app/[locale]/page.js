import '@/style/card.css';
import '@/style/carousel.css';
import styles from "./page.module.css";
import CardWrapper from "@/components/card/card-wrapper";
import CardWithDetails from "@/components/card/card-with-details";
import RowWrapper from '@/components/card/row-wrapper';
import CardWithColumn from '@/components/card/card-with-column';
import Carousel from '@/components/carousel/index';
import Title from '@/components/typography/title';
import CarouselWrapper from '@/components/carousel/carouselWrapper';
import Image from '@/components/image';
import SimpleCard from '@/components/card/simpleCard';
import Events from './home/events';
import FormWrapper from '@/wrapper/formWrapper';
import WellcomeContent from './home/wellcomeContent';
import ContainerWapper from '@/components/card/container-wapper';
import { useTranslations } from 'next-intl';

const homeCarosel = [
  {
    id: 1,
    src: '/assets/carousel/carousel-1.jpg',
    alt: 'h1',
    className: 'd-block carousel-img  '
  },
  {
    id: 2,
    src: '/assets/carousel/carousel-2.jpg',
    alt: 'h2',
    className: 'd-block carousel-img  '
  },
  {
    id: 3,
    src: '/assets/carousel/carousel-3.jpg',
    alt: 'h3',
    className: 'd-block carousel-img  '
  },
  {
    id: 4,
    src: '/assets/carousel/carousel-4.jpg',
    alt: 'h4',
    className: 'd-block carousel-img  '
  },
  {
    id: 5,
    src: '/assets/carousel/carousel-5.jpg',
    alt: 'h5',
    className: 'd-block carousel-img  '
  },
  {
    id: 6,
    src: '/assets/carousel/carousel-6.jpg',
    alt: 'h6',
    className: 'd-block carousel-img '
  },
  {
    id: 7,
    src: '/assets/carousel/carousel-7.jpg',
    alt: 'h7',
    className: 'd-block carousel-img '
  },
  {
    id: 8,
    src: '/assets/carousel/carousel-8.jpg',
    alt: 'h8',
    className: 'd-block carousel-img '
  },
]

const feedback = [
  {
    id: 1,
    src: 'https://imgs.search.brave.com/qnvKPjo-JExIBvoDQwFyOOfn1WXqs575Jq45h0c0SPg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWM3ZGFkMmU2ZjYy/OTVhOWUyYTIzZGQv/NjZmY2RlMDBjZjU0/ZDcxNzQ3YTUyYmFj/X3Vwd29yay1wcm9m/aWxlLXBob3RvLXRp/cHMuanBn',
    alt: 'h1',
    className: 'd-block w-50 h-25'
  },
  {
    id: 2,
    src: 'https://imgs.search.brave.com/fRPugAm1TrGyKQOi3LkxIxHVLuf6kVJNPXydW-Thn2s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5UZGxOV0kx/TURjdE16UTVOUzAw/WldNNExXRXdOR0l0/TnpVM1lXRmpPVEpr/WW1NMVhrRXlYa0Zx/Y0dkZVFWUm9hWEpr/VUdGeWRIbEpibWRs/YzNScGIyNVhiM0py/Wm14dmR3QEAuX1Yx/X1FMNzVfVVg1MDBf/Q1IwLDAsNTAwLDI4/MV8uanBn',
    alt: 'h2',
    className: 'd-block w-50 h-25'
  },
  {
    id: 3,
    src: 'https://imgs.search.brave.com/_R0BUzIfwJNdTrA-hi8njEUtoM79HQHvScUYRCJHTvM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LnBleGVscy5j/b20vaW1hZ2VzL2Nh/bnZhL2FpLWdlbmVy/YXRlZC1hZC9vZmYt/dGhlbWUvY3JlcHVz/Y3VsYXJfcmF5c19i/dXJzdGluZy1mdWxs/LmpwZw',
    alt: 'h3',
    className: 'd-block w-50 h-25'
  },
]

const serviceCards = [
  {
    id: 1,
    title: 'POOJA',
    text: "Basic house Vastu tips wont cut it nowadays. Find out today."
  },
  {
    id: 2,
    title: 'GAU SEVA',
    text: "Basic house Vastu tips wont cut it nowadays. Find out today."
  },
  {
    id: 3,
    title: 'POOJA',
    text: "Basic house Vastu tips wont cut it nowadays. Find out today."
  },
  {
    id: 4,
    title: 'POOJA',
    text: "Basic house Vastu tips wont cut it nowadays. Find out today."
  },
]

const personal = [
  {
    title: '1',
    subTitle: 'With supporting text below as a natural lead-in to additional content.',
    src: '/assets/services/ser-1.jpg',
  },
  {
    title: '2',
    subTitle: 'With supporting text below as a natural lead-in to additional content.',
    src: '/assets/services/ser-2.jpg',
  },
  {
    title: '3',
    subTitle: 'With supporting text below as a natural lead-in to additional content.',
    src: '/assets/services/ser-3.jpg',
  },
  {
    title: '4',
    subTitle: 'With supporting text below as a natural lead-in to additional content.',
    src: '/assets/services/ser-4.jpg',
  },

]

export default function Home() {
  const t = useTranslations('HomePage')
  return (
    <div className={styles.page + ' '} >

      <FormWrapper>
        <div className="col-md-10 col-lg-6 col-xl-7 col-12 order-2 order-lg-1 round-pill">
          <Carousel images={homeCarosel}>
            {
              homeCarosel.map((item, i) => {
                return <CarouselWrapper active={i} key={item.id}>
                  <Image alt={item.alt} {...item} />
                </CarouselWrapper>
              })
            }
          </Carousel>
        </div>

        <div className=" col-md-10 col-lg-6 col-xl-5 col-12 d-flex align-items-center order-1 order-lg-2">
          <WellcomeContent />
        </div>
      </FormWrapper>


      <CardWrapper>
        <ContainerWapper>
          <Title>{t('serviceTitle')}</Title>

          <RowWrapper >
            {
              serviceCards.map(item => {
                return <div className="col-md-3 col-sm-6 mb-3" key={item.id}>
                  <SimpleCard
                    title={item.title}
                    text={item.text}
                  />
                </div>
              })
            }
          </RowWrapper>
        </ContainerWapper>
      </CardWrapper>


      <CardWrapper style='card-body-2'>
        <ContainerWapper>
          <Title>Events By Vaidik Anushthan Kendra- Acharya Raja Shastri</Title>
          <Events />
        </ContainerWapper>
      </CardWrapper>


      <CardWrapper>
        <ContainerWapper>
          <Title>.........</Title>
          <RowWrapper>
            {personal.map((item, index) => {
              return <CardWithDetails key={index} {...item} />
            })}

          </RowWrapper>
        </ContainerWapper>
      </CardWrapper>


      <CardWrapper>
        <Title>What Clients Says</Title>
        <Carousel contants={feedback} />
      </CardWrapper>

      <CardWrapper style='card-body-2'>
        <ContainerWapper>
          <RowWrapper >

            <CardWithColumn />

          </RowWrapper>
        </ContainerWapper>
      </CardWrapper>

    </div>
  );
}
