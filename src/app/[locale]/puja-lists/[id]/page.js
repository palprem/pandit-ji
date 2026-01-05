'use client';

import React, { use } from 'react'
import CardWithDetails from '@/components/card/card-with-details'
import ContainerWapper from '@/components/card/container-wapper'
import RowWrapper from '@/components/card/row-wrapper'
import Streper from '@/components/image/streper'
import FoundLanguage from '@/utils/foundLanguage';
import { poojaItems } from '@/utils/poojaConstant';
import { useTranslations } from 'next-intl';

function PujaLists({ params }) {
  const { id: name } = use(params);

  const { selectedLangWithSlace } = FoundLanguage()
  const items = poojaItems(selectedLangWithSlace, name)
  const m = useTranslations(name);

  return (
    <>
      <Streper title={m('title')} />

      <ContainerWapper>
        <RowWrapper>
          {
            items.map((item) => {
              return <CardWithDetails
                title={m(item.title)}
                subTitle={m(item.details)}
                href={{
                  pathname: `${selectedLangWithSlace}/puja-details`,
                  query: { id: item.id, name: name },
                }}
                src={`/assets/puja/${name}/${item.id}.png`}
                key={item.id} />
            })
          }
        </RowWrapper>
      </ContainerWapper>
    </>
  )
}

export default PujaLists