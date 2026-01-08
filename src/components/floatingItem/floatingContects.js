import React from 'react'
import '../../style/floating.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

function FloatingContects() {
    return (
        <div className="position-fixed bottom-0 start-0 p-3 d-flex flex-column gap-4" style={{ zIndex: 1055 }}>
            <Link href="https://www.facebook.com/raja.pandey.285169" target="_blank" className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center btn-floating floating-icon-side">
                <FontAwesomeIcon className='fs-3' icon={faFacebook} />

            </Link>
            < Link href="https://www.youtube.com/@%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE/videos"
                target="_blank" className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center btn-floating floating-icon-side">
                <FontAwesomeIcon className='text-light fs-3' icon={faYoutube} />

            </Link>

            <Link href="https://wa.me/917007121417" target="_blank"
                style={{ backgroundColor: "rgb(47 201 129)" }}
                className="btn btn-success rounded-circle d-flex align-items-center justify-content-center btn-floating floating-icon-side">
                <FontAwesomeIcon className='fs-3' icon={faWhatsapp} />
            </Link>

            <div className='d-flex rounded-5 bg-light ' style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)' }}>
                <Link href="tel:+917007121417" className=" btn btn-success rounded-circle d-flex align-items-center justify-content-center btn-floating floating-icon-side call-button">
                    <FontAwesomeIcon className='fs-3 text-light' icon={faPhone} />
                </Link>
                <strong style={{
                    fontSize: '15px',
                    lineHeight: "40px",
                    top: 0,
                    left: 0,
                    whiteSpace: "nowrap",

                }}
                    className=' px-3 py-1 text-dark '> + 917007121417</strong>

            </div>



        </div>
    )
}

export default FloatingContects