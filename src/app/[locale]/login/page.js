'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import '@/style/card.css'
import '@/style/common.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserTie } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/button'
import Input from '@/components/input'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { errorNotification, successNotification, warningNotification } from '@/components/notification'
import { loginUser, resetAuthState } from '@/redux/slices/auth/authSlice'
import WellcomeContent from '../home/wellcomeContent'
import FormWrapper from '@/wrapper/formWrapper'
import FoundLanguage from '@/utils/foundLanguage'
import { useTranslations } from 'next-intl';
import { Title } from '@/components/typography/title'

const initialState = {
    identifier: '',
    password: '',
}

function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    const t = useTranslations("Navbar");
    const l = useTranslations("input");
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
        if (!agree) return warningNotification('Please accept all statements in Terms of service');
        dispatch(loginUser({ ...formData, currentLocale: selectedLangWithSlace }));
    }

    useEffect(() => {
        if (registered) {
            router.push("/");
            setFormData(initialState);
            dispatch(resetAuthState());
        }

        { message && successNotification(message) }
        { error && errorNotification(error) }
    }, [registered, message, error, router, dispatch])

    return (
        <FormWrapper>
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 card shadow py-5">

                <Title className='text-center text-warning'>{b('login')}</Title>

                <form className="mx-1 mx-md-4 " onSubmit={(e) => handleFormSubmit(e)}>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon className='fs-3 user-icon' icon={faUserTie} />
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <Input
                                required
                                onChange={(e) => handleChange(e)}
                                value={formData.identifier}
                                label={l('email_phone')}
                                type='text'
                                name='identifier'
                                placeholder={l('email_phone')}
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon className='fs-3 user-icon' icon={faLock} />
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                <Input
                                    required
                                    onChange={(e) => handleChange(e)}
                                    value={formData.password}
                                    label={l('psd')}
                                    name='password'
                                    type='password'
                                    placeholder='*************'
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" id="form2Example3c" value={agree}
                            onChange={(e) => setAgree(e.target.checked)} />
                        <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">

                        <Button
                            loading={loading}
                            type='submit'
                            label={b('login')}
                            className='btn btn-warning w-100'
                        />
                    </div>

                   

                </form>

            </div>

            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
<div className='mx-5'>
                <WellcomeContent />

</div>
            </div>
        </FormWrapper>
    )
}

export default Login;