import React from 'react'
import '../../style/footer.css'
import AddressMap from './address-map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHouseChimney, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import { SubTitle } from '../typography/title'

function ParentFooter() {
    const f = useTranslations('footer');
    const g = useTranslations('global');
    const s = useTranslations('serviceCards');
    const n = useTranslations('Navbar');

    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted parent-footer-body">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-black">
                <div className="me-5 d-none d-lg-block text-light">
                    <span>{f('social')}</span>
                </div>
                <div className='d-block'>

                <SubTitle className='text-warning text-center'>{'ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥'}</SubTitle>
                </div>

                <div >
                    <Link href="" className="me-4 text-reset">
                        <FontAwesomeIcon className='fs-3 text-light' icon={faFacebook} />
                    </Link>
                    <Link href="" className="me-4 text-reset">
                        <FontAwesomeIcon className='fs-3 text-light' icon={faTwitter} />
                    </Link>
                    <Link href="" className="me-4 text-reset">
                        <FontAwesomeIcon className='fs-3 text-light' icon={faYoutube} />
                    </Link>
                    <Link href="" className="me-4 text-reset">
                        <FontAwesomeIcon className='fs-3 text-light' icon={faWhatsapp} />
                    </Link>
                    <Link href="" className="me-4 text-reset">
                        <FontAwesomeIcon className='fs-3 text-light' icon={faPhone} />
                    </Link>

                </div>
            </section>

            <section className="mx-5">
                <div className=" text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-2 col-lg-4 col-xl-3 mx-auto mb-4 ">
                            <h6 className="text-uppercase fw-bold mb-4 text-warning" >{g('name')}</h6>
                            <p className='text-light'>{f('add_1')} </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-warning">{s('serviceTitle')}</h6>
                            <p className='text-light'>
                                <Link href="/puja/mahadev-puja" className="text-reset ">{n('our_pooja')}</Link>
                            </p>
                            <p className='text-light'>
                                <Link href="#!" className="text-reset ">{n('vastu')}</Link>
                            </p>
                            <p className='text-light'>
                                <Link href="#!" className="text-reset ">{n('gau_seva')}</Link>
                            </p>
                            <p className='text-light'>
                                <Link href="#!" className="text-reset ">{s('16_sanskar')}</Link>
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-warning">{f('contact')}</h6>
                            <p className='text-light'>
                                <FontAwesomeIcon icon={faHouseChimney} />
                                {f('add_1')}</p>
                            <p className='text-light'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                {f('add_2')}
                            </p>
                            <p className='text-light'><FontAwesomeIcon icon={faPhone} />{f('phone_1')}</p>
                            <p className='text-light'><FontAwesomeIcon icon={faPrint} />{f('phone_2')}</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                            <AddressMap />
                        </div>

                    </div>
                </div>
            </section>
            <div className="text-center p-4 text-light border-top border-black" >
                © 2021 Copyright :
                <Link className="text-light text-reset fw-bold" href="http://localhost:3000/en/">{g('name')}</Link>
            </div>
        </footer>
    )
}

export default ParentFooter