import React from 'react'
import '../../style/floating.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

function FloatingContects() {
    return (
        <div className="position-fixed bottom-0 start-0 p-3 d-flex flex-column gap-4" style={{ zIndex: 1055 }}>
            <a href="tel:+919453106405" className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center btn-floating floating-icon-side">
                <FontAwesomeIcon className='fs-3' icon={faFacebook} />

            </a>
            <a href="https://www.youtube.com/@%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE/videos"
                target="_blank" className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center btn-floating floating-icon-side">
                <FontAwesomeIcon className='text-light fs-3' icon={faYoutube} />

            </a>

            <a href="https://wa.me/919453106405" target="_blank"
                style={{ backgroundColor: "rgb(47 201 129)" }}
                className="btn btn-success rounded-circle d-flex align-items-center justify-content-center btn-floating floating-icon-side">
                <FontAwesomeIcon className='fs-3' icon={faWhatsapp} />
            </a>

            <div className='d-flex rounded-5 bg-light ' style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)' }}>
                <a href="tel:+919453106405" className=" btn btn-success rounded-circle d-flex align-items-center justify-content-center btn-floating floating-icon-side call-button">
                    <FontAwesomeIcon className='fs-3 text-light' icon={faPhone} />
                </a>
                <strong style={{
                    fontSize: '15px',
                    lineHeight: "40px",
                    top: 0,
                    left: 0,
                    whiteSpace: "nowrap",

                }}
                    className=' px-3 py-1 text-dark '> + 919453106405</strong>

            </div>



        </div>
    )
}

export default FloatingContects