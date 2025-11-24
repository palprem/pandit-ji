import CardWithDetails from '@/components/card/card-with-details'
import ContainerWapper from '@/components/card/container-wapper'
import RowWrapper from '@/components/card/row-wrapper'
import Streper from '@/components/image/streper'
import React from 'react'

const ganeshPujaItems = [
  {
    title: '1',
    subTitle: 'With supporting text below as a natural lead-in to additional content.',
    src: '/assets/puja/mahadev.png',
  },
  {
    title: '2',
    subTitle: 'With supporting text below as a natural lead-in to additional content.',
    src: '/assets/puja/mahadev.png',
  },
  {
    title: '3',
    subTitle: 'With supporting text below as a natural lead-in to additional content.',
    src: '/assets/puja/mahadev.png',
  },
  {
    title: '4',
    subTitle: 'With supporting text below as a natural lead-in to additional content.',
    src: '/assets/puja/mahadev.png',
  },
  {
    title: '5',
    subTitle: 'With supporting text below as a natural lead-in to additional content.',
    src: '/assets/puja/mahadev.png',
  },

]


function DeviPuja() {
  return (
    <>
      <Streper title='Devi Puja' />
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

export default DeviPuja