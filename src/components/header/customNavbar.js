import React from 'react'
import '../../style/header.css';
import CustomMavbarWrapper from './customMavbarWrapper';
import Image from '../image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function CustomNavbar({ navLavel = '', data = [] }) {
    return (
        <>
            <CustomMavbarWrapper navLavel={navLavel}>
                {
                    data.map((moveItem, index) => {
                        return <div className="col-6 col-md-4" key={index}>
                            <div className="card shadow-sm  rounded-4 navbar-drop-items ">
                                <Link href={moveItem.href} className="d-flex align-items-center p-2 text-decoration-none mt-auto mb-auto">
                                    <Image
                                        {...moveItem}
                                        alt={moveItem.href}
                                        className="rounded-circle me-2"
                                        width="50"
                                        height="50" />
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <small className='text-black fw-normal'>{moveItem.title}</small>
                                        <FontAwesomeIcon className="bi bi-chevron-right text-black" icon={faChevronRight} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    })
                }

            </CustomMavbarWrapper>

        </>
    )
}

export default CustomNavbar