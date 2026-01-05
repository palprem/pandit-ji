import React from 'react'
import { useTranslations } from 'next-intl';

function CarouselWrapper({ children, active=0 }) {
  const t = useTranslations('HomePageCaroselTitle');
  const b = useTranslations('buttons');
  
    return (
        <div className={`position-relative carousel-item ${active==0 ? "active" : ""}`}>
            {children}
            <div className="carousel-caption d-none d-md-block">
                <button type='button' className='btn btn-warning rounded-0 text-white'>{b('donate')}</button>
            </div>
        </div>
    )
}

export default CarouselWrapper;