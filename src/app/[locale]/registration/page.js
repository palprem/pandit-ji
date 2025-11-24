'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import Image from '@/components/image'
import Button from '@/components/button'
import Title from '@/components/typography/title'
import Input from '@/components/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faPhoneVolume, faTextWidth, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, resetAuthState } from '@/redux/slices/auth/authSlice';
import { errorNotification, successNotification, warningNotification } from '@/components/notification';
import '../../../style/card.css';
import '../../../style/common.css';
import { useRouter } from 'next/navigation';
import WellcomeContent from '../home/wellcomeContent';
import FormWrapper from '@/wrapper/formWrapper';
import FoundLanguage from '@/utils/foundLanguage';
import { useTranslations } from 'use-intl';

const initialState = {
    first_name: '',
    last_name: '',
    email_id: '',
    phone_number: '',
    password: '',
    repeat_password: '',
}

function Registration() {
    const dispatch = useDispatch();
    const router = useRouter();
    const t = useTranslations('input');
    const b = useTranslations('buttons');
    const { selectedLangWithSlace } = FoundLanguage()

    const { message, loading, error, registered } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState(initialState);
    const [agree, setAgree] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (formData.password != formData.repeat_password) return warningNotification('Password and Repeat password must be same');
        if (!agree) return warningNotification('Please accept all statements in Terms of service');
        dispatch(registerUser(formData));
    }

    useEffect(() => {
        if (registered) {
            router.push("/");
            setFormData(initialState);
            dispatch(resetAuthState());

        }

        { message && successNotification(message) }
        { error && errorNotification(error) }
    }, [registered, message, error, dispatch, router])
    
    return (
        <FormWrapper>
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 card shadow py-5">

                <Title>Sign up</Title>

                <form className="mx-1 mx-md-3" onSubmit={(e) => handleFormSubmit(e)}>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon className='fs-3 user-icon' icon={faUserTie} />
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <Input
                                required
                                onChange={(e) => handleChange(e)}
                                value={formData.first_name}
                                label={t('first_name')}
                                name='first_name'
                                type='text' />
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon className='fs-3 user-icon' icon={faTextWidth} />
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <Input
                                required
                                onChange={(e) => handleChange(e)}
                                value={formData.last_name}
                                label={t('last_name')}
                                name='last_name'
                                type='text' />
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon className='fs-3 user-icon' icon={faEnvelope} />
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <Input
                                required
                                onChange={(e) => handleChange(e)}
                                value={formData.email_id}
                                label={t('email')}
                                type='email'
                                placeholder='xyz@gmail.com'
                                name='email_id'
                                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon className='fs-3 user-icon' icon={faPhoneVolume} />
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <Input
                                required
                                onChange={(e) => handleChange(e)}
                                value={formData.phone_number}
                                label={t('contact_num')}
                                type='tel'
                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                maxLength='10'
                                name='phone_number'
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon className='fs-3 user-icon' icon={faLock} />
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <Input
                                required
                                onChange={(e) => handleChange(e)}
                                value={formData.password}
                                pattern=".{8,}"
                                title="Eight or more characters"
                                label={t('psd')}
                                name='password'
                                type='password'
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon className='fs-3 user-icon' icon={faLock} />
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <Input
                                required
                                onChange={(e) => handleChange(e)}
                                value={formData.repeat_password}
                                pattern=".{8,}"
                                title="Eight or more characters"
                                label={t('confirm_psd')}
                                name='repeat_password'
                                type='password'
                            />
                        </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                            id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">

                        <Button
                            loading={loading}
                            type='submit'
                            label={b('register')}
                            className='btn btn-warning w-100'
                        />
                    </div>
                    <div className='text-center'>
                        <label className="form-check-label " htmlFor="form2Example3">
                            If you already have a account ? <Link href={selectedLangWithSlace+'/login'}>Login</Link>
                        </label>
                    </div>

                </form>

            </div>
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <WellcomeContent />

            </div>
        </FormWrapper>
    )
}

export default Registration