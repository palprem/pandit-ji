import React from 'react'
import Input from '@/components/input';
import { faTex } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubTitle } from './typography/title';
import { faEnvelope, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Button from './button';

function KnowMore() {
    return (
        <>
            <SubTitle className='border-4 border-start border-dark p-2 my-3 '>For Know More</SubTitle>
            <form className="mx-1 mx-md-4  pb-3">
                <div className="d-flex flex-row align-items-center mb-4">
                    <FontAwesomeIcon className='fs-3 user-icon' icon={faUserTie} />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <Input
                            required
                            // onChange={(e) => handleChange(e)}
                            // value={formData.email_id}
                            label='Full Name'
                            type='text'
                            name='email_id'
                        />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <FontAwesomeIcon className='fs-3 user-icon' icon={faPhone} />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <Input
                                required
                                // onChange={(e) => handleChange(e)}
                                // value={formData.password}
                                label='Contect Number'
                                name='password'
                                type='tel'
                            />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <FontAwesomeIcon className='fs-3 user-icon' icon={faEnvelope} />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <Input
                                required
                                // onChange={(e) => handleChange(e)}
                                // value={formData.password}
                                label='Email Id'
                                name='email'
                                type='tel'
                            />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <FontAwesomeIcon className='fs-3 user-icon' icon={faTex} />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <strong className="form-label" >Tell us what you want to talk about</strong>
                            <textarea
                                className='form-control'
                                required
                                // onChange={(e) => handleChange(e)}
                                // value={formData.password}
                                name='password'
                                type='tel'
                            />
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Button
                        // loading={loading}
                        type='submit'
                        label="Submit"
                        className='btn btn-warning w-50'
                    />
                </div>

            </form>
        </>
    )
}

export default KnowMore