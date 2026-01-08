"use client"
import React, { useState } from 'react'
import Input from '@/components/input';
import { faTex } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubTitle } from './typography/title';
import { faEnvelope, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Button from './button';
import { useTranslations } from 'next-intl';
import api from '@/services/axiosInstance';
import { errorNotification, successNotification } from './notification';

function KnowMore({ type = '' }) {
    const initial = {
        name: "",
        phone: "",
        email: "",
        type,
        date: "",
        message: "",
    }
    const today = new Date().toISOString().split('T')[0];

    const f = useTranslations('forms');
    const [formData, setFormData] = useState({ ...initial });

    function handleChange(event) {
        const { name, value } = event.target;
        // console.log('name, value', name, value)
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post('/bookings', formData);
            successNotification(response.data.message)
            setFormData({ ...initial })
            return response.data;
        } catch (error) {
            errorNotification(error.response?.data?.error)
        }
    }
    return (
        <>
            <SubTitle className='border-4 border-start border-dark p-2 my-3 '>{f('title')}</SubTitle>
            <form className="mx-1 mx-md-4  pb-3">
                <div className="d-flex flex-row align-items-center mb-4">
                    <FontAwesomeIcon className='fs-3 user-icon' icon={faUserTie} />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <Input
                            required
                            onChange={(e) => handleChange(e)}
                            value={formData.name}
                            label={f('1')}
                            type='text'
                            name='name'
                        />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <FontAwesomeIcon className='fs-3 user-icon' icon={faPhone} />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <Input
                                required
                                onChange={(e) => handleChange(e)}
                                value={formData.phone}
                                label={f('2')}
                                name='phone'
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
                                onChange={(e) => handleChange(e)}
                                value={formData.email}
                                label={f('3')}
                                name='email'
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
                                onChange={(e) => handleChange(e)}
                                value={formData.date}
                                min={today}
                                label={f('6')}
                                name='date'
                                type='date'
                            />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <FontAwesomeIcon className='fs-3 user-icon' icon={faTex} />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <strong className="form-label" >{f('4')}</strong>
                            <textarea
                                className='form-control'
                                required
                                rows={6}
                                onChange={(e) => handleChange(e)}
                                value={formData.message}
                                name='message'
                                type='text'
                            />
                        </div>
                    </div>
                </div>



                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Button
                        onClick={handleSubmit}
                        type='submit'
                        label={f('5')}
                        className='btn btn-warning w-50'
                    />
                </div>

            </form>
        </>
    )
}

export default KnowMore