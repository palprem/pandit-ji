
import React, { use } from 'react'
import Image from '@/components/image'
import '../../../style/card.css';
import ContainerWapper from '@/components/card/container-wapper';
import RowWrapper from '@/components/card/row-wrapper';
import CardWrapper from '@/components/card/card-wrapper';
import { SmallTitle, SubTitle, Title } from '@/components/typography/title';
import { useTranslations } from 'next-intl';
import MutedText from '@/components/typography/mutedText';
import KnowMore from '@/components/KnowMore';
import Streper from '@/components/image/streper';

function Sanskar() {

  const p = useTranslations('sanskar');

  return (
    <div>
      <Streper  title={p('title')}/>
      <CardWrapper style='card-body-2 mt-5' >
        <ContainerWapper>
          <RowWrapper>
            <div className="col-md-6 col-12">
              <SubTitle className='text-warning'>ॐ सर्वकार्येषु सिद्धिं ददातु। आयुष्यम्, सौभाग्यं च ददातु।</SubTitle>
              <h1 className='py-3'>{p('title')}</h1>
              <MutedText className='card-text'>{p('subTitle')}</MutedText>
            </div>

            <div className="col-md-6 col-12 text-center ">
              <Image
                src={`/assets/sanskar/home.png`}
                className=" rounded-top-5  "
                style={{ height: "40rem" }}
              />
            </div>
          </RowWrapper>

        </ContainerWapper>
      </CardWrapper>

      <div className='mt-5 card-body' >
        <hr />
        <SubTitle className='text-warning text-center'>{'ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥'}</SubTitle>
        <Title className='text-center'>{p('type')}</Title>
        <hr />

      </div>

      <CardWrapper style=''>
        <ContainerWapper>
          <RowWrapper>
            <div className="col-md-8 col-12  " >
              <RowWrapper>
                {
                  Array.from({ length: 16 }, (_, i) => {
                    return <div className="col-md-6 col-12  " key={i}>
                      <div className="card mb-3 shadow border-0 rounded-0 card-adjust-7"  >
                        <div className='p-2'>
                          <Image
                            src={`/assets/sanskar/${i + 1}.png`}
                            alt={`Masked${i + 1}`}
                            className=" w-100 h-100 card-img-top border-0 rounded-0"
                          />
                          <div className="card-body py-4">
                            <SubTitle className="card-title">{i + 1 + ' - ' + p(String(i + 1))}</SubTitle>
                            <MutedText className="card-text">{p(i + 1 + '_')}</MutedText>
                          </div>
                        </div>
                      </div>

                    </div>
                  })
                }
              </RowWrapper>
            </div>

            <div className="col-md-4 col-12 " >

              <div className=' card-body '>
                {/* <div className=' card-body-2 '>
                  <SubTitle className='border-4 border-start border-dark p-2 my-3 '>Benefits of Vastu</SubTitle>
                  <div className="mx-1 mx-md-4  pb-3">
                    <StrongTitle>
                      <MutedText className='card-text'>
                        {p('benifits')}
                      </MutedText>
                    </StrongTitle>
                  </div>
                </div> */}

                <div className='my-4 card-body-2'>
                  <KnowMore type='16 Sanskar' />
                </div>
              </div>
            </div>
          </RowWrapper>
        </ContainerWapper>


      </CardWrapper>


    </div>
  )
}

export default Sanskar