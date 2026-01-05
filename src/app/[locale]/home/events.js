import Button from '@/components/button'
import CardWithVideo from '@/components/card/card-with-video'
import React from 'react'
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function Events() {
    const e = useTranslations('events');

    return (

        <section className="pb-5">
            <div className="">
                <div className="row">

                    <div className="col-12">
                        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">

                                        <div className="col-md-4 mb-3">
                                            <div className="card shadow">

                                                <CardWithVideo videoId='k4xVC4SKbk0' />
                                                <div className="card-body">

                                                    <h5 className="card-title mb-4">{e('1_details').split(',')[0]}</h5>

                                                    <p className="card-text">{e('1_details')}</p>

                                                    <Link target='_blank' href={'https://www.youtube.com/@%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE/featured'}>
                                                        <Button label='View' className='w-100 rounded-pill' />
                                                    </Link>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="card shadow">
                                                <CardWithVideo videoId='4Xi4tLumh6s' />

                                                <div className="card-body">

                                                       <h5 className="card-title mb-4">{e('2_details').split(',')[0]}</h5>

                                                    <p className="card-text">{e('2_details')}</p>

                                                    <Link target='_blank' href={'https://www.youtube.com/@%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE/featured'}>
                                                        <Button label='View' className='w-100 rounded-pill' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="card shadow">
                                                <CardWithVideo videoId='lnGBweSEsO4' />

                                                <div className="card-body">

                                                       <h5 className="card-title mb-4">{e('3_details').split(',')[0]}</h5>

                                                    <p className="card-text">{e('3_details')}</p>

                                                    <Link target='_blank' href={'https://www.youtube.com/@%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE/featured'}>
                                                        <Button label='View' className='w-100 rounded-pill' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">

                                        <div className="col-md-4 mb-3">
                                            <div className="card shadow">
                                                <CardWithVideo videoId='D1kWdMHqED4' />

                                                <div className="card-body">

                                                       <h5 className="card-title mb-4">{e('4_details').split(',')[0]}</h5>

                                                    <p className="card-text">{e('4_details')}</p>
                                                    <Link target='_blank' href={'https://www.youtube.com/@%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE/featured'}>
                                                        <Button label='View' className='w-100 rounded-pill' />
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="card shadow">
                                                <CardWithVideo videoId='oPp4-Kx3aOU' />

                                                <div className="card-body">

                                                       <h5 className="card-title mb-4">{e('5_details').split(',')[0]}</h5>

                                                    <p className="card-text">{e('5_details')}</p>
                                                    <Link target='_blank' href={'https://www.youtube.com/@%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE/featured'}>
                                                        <Button label='View' className='w-100 rounded-pill' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="card shadow">
                                                <CardWithVideo videoId='IPrVVe2PfCE' />

                                                <div className="card-body">

                                                       <h5 className="card-title mb-4">{e('6_details').split(',')[0]}</h5>

                                                    <p className="card-text">{e('6_details')}</p>
                                                    <Link target='_blank' href={'https://www.youtube.com/@%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE/featured'}>
                                                        <Button label='View' className='w-100 rounded-pill' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">

                                        <div className="col-md-4 mb-3">
                                            <div className="card shadow">
                                                <CardWithVideo videoId='Z6eul_k8Tyg' />

                                                <div className="card-body">

                                                      <h5 className="card-title mb-4">{e('7_details').split(',')[0]}</h5>

                                                    <p className="card-text">{e('7_details')}</p>
                                                    <Link target='_blank' href={'https://www.youtube.com/@%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE/featured'}>
                                                        <Button label='View' className='w-100 rounded-pill' />
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-shown">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                <span className="visually-shown">Next</span>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events