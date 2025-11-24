import React from 'react'
import '../../style/footer.css'
import AddressMap from './address-map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import details from '../../utils/basicDetails.json';

function ParentFooter() {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted parent-footer-body">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-black">
                <div className="me-5 d-none d-lg-block text-black">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div >
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon className='fs-3 text-black' icon={faFacebook} />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon className='fs-3 text-black' icon={faTwitter} />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon className='fs-3 text-black' icon={faYoutube} />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon className='fs-3 text-black' icon={faWhatsapp} />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon className='fs-3 text-black' icon={faPhone} />
                    </a>

                </div>
            </section>

            <section className="mx-5">
                <div className=" text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-2 col-lg-4 col-xl-3 mx-auto mb-4 ">
                            <h6 className="text-uppercase fw-bold mb-4 text-black" >{details.owner_name}</h6>
                            <p className='text-black'>{details.owner_address} </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-black">
                                Products
                            </h6>
                            <p className='text-black'>
                                <a href="#!" className="text-reset ">Angular</a>
                            </p>
                            <p className='text-black'>
                                <a href="#!" className="text-reset ">React</a>
                            </p>
                            <p className='text-black'>
                                <a href="#!" className="text-reset ">Vue</a>
                            </p>
                            <p className='text-black'>
                                <a href="#!" className="text-reset ">Laravel</a>
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-black">
                                Useful links
                            </h6>
                            <p className='text-black'>
                                <a href="#!" className="text-reset ">Pricing</a>
                            </p>
                            <p className='text-black'>
                                <a href="#!" className="text-reset ">Settings</a>
                            </p>
                            <p className='text-black'>
                                <a href="#!" className="text-reset ">Orders</a>
                            </p>
                            <p className='text-black'>
                                <a href="#!" className="text-reset ">Help</a>
                            </p>
                        </div>


                        <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-black">Contact</h6>
                            <p className='text-black'><i className="fas fa-home me-3 "></i> New York, NY 10012, US</p>
                            <p className='text-black'>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p className='text-black'><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p className='text-black'><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                            <AddressMap />
                        </div>

                    </div>
                </div>
            </section>
            <div className="text-center p-4 text-black border-top border-black" >
                © 2021 Copyright:
                <a className="text-black text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    )
}

export default ParentFooter