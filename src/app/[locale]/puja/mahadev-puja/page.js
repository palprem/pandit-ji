
'use client';

import CardWithDetails from '@/components/card/card-with-details'
import ContainerWapper from '@/components/card/container-wapper'
import RowWrapper from '@/components/card/row-wrapper'
import Streper from '@/components/image/streper'
import FoundLanguage from '@/utils/foundLanguage';
import React from 'react'


function MahadevPuja() {
    const { selectedLangWithSlace } = FoundLanguage()

  const ganeshPujaItems = [
    {
      title: '1',
      subTitle: 'With supporting text below as a natural lead-in to additional content.',
      src: '/assets/puja/mahadev.png',
      href: `${selectedLangWithSlace}/puja-booking`,
    },
    {
      title: '2',
      subTitle: 'With supporting text below as a natural lead-in to additional content.',
      src: '/assets/puja/mahadev.png',
      href: `${selectedLangWithSlace}/puja-booking`,
    },
    {
      title: '3',
      subTitle: 'With supporting text below as a natural lead-in to additional content.',
      src: '/assets/puja/mahadev.png',
      href: `${selectedLangWithSlace}/puja-booking`,
    },
    {
      title: '4',
      subTitle: 'With supporting text below as a natural lead-in to additional content.',
      src: '/assets/puja/mahadev.png',
      href: `${selectedLangWithSlace}/puja-booking`,
    },
    {
      title: '5',
      subTitle: 'With supporting text below as a natural lead-in to additional content.',
      src: '/assets/puja/mahadev.png',
      href: `${selectedLangWithSlace}/puja-booking`,
    },

  ]

  return (
    <>
      <Streper title='Mahadev Puja' />
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

export default MahadevPuja