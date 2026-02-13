import React from 'react'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import FoundLanguage from '@/utils/foundLanguage';

function CarouselWrapper({ children, active=0 }) {
  const b = useTranslations('buttons');
    const { selectedLangWithSlace } = FoundLanguage()
  
    return (
        <div className={`position-relative carousel-item ${active==0 ? "active" : ""}`}>
            {children}
            <div className="carousel-caption d-none d-md-block">
                <Link href={selectedLangWithSlace +'/donate-us'} type='button' className='btn btn-warning rounded-0 text-white'>{b('donate')}</Link>
            </div>
        </div>
    )
}

export default CarouselWrapper;