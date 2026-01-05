import React from 'react'
import { useTranslations } from 'next-intl';
import '@/style/home.css'
import '@/style/wellcome.css'


function WellcomeContent() {
    const g = useTranslations('global')
    const t = useTranslations('HomePage')
    return (
        <>
            <div className='px-md-4 p-4' >
                <h1 className='it-hero-3-title-box hero-title'>{t('title') + g('name')}</h1>
                <p className='it-hero-3-title-p'>{t('subTitle')}</p>
            </div>

        </>
    )
}

export default WellcomeContent