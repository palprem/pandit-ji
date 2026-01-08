import Button from '@/components/button'
import { Title } from '@/components/typography/title'
import Streper from '@/components/image/streper'
import Input from '@/components/input'
import { faTex } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLock, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import WellcomeContent from '../home/wellcomeContent'
import FormWrapper from '@/wrapper/formWrapper'
import { useTranslations } from 'next-intl'
import KnowMore from '@/components/KnowMore'

function ContectUs() {
  const t = useTranslations('Navbar');
  const f = useTranslations('forms');

  return (
    <>
      <Streper title={t('contact')} />
      <FormWrapper>
        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 card shadow py-4 position-static">

          {/* <Title className='text-center text-warning'>{t('contact')}</Title> */}

         
            <div className="col-md-15 col-12 " >
              <div className=' card-body '>
                  <KnowMore type='For Contect' />
              </div>
            </div>

        </div>
        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
          <div className='mx-5'>
            <WellcomeContent />
          </div>
        </div>
      </FormWrapper>
      
    </>
  )
}

export default ContectUs