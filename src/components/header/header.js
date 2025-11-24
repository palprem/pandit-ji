'use client'
import React from 'react'
import Link from 'next/link';
import CustomImage from '../image';
import Button from '../button';
import CustomNavbar from './customNavbar';
import LocaleSwitcher from './languageSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '@/redux/slices/auth/authSlice';
import { persistor } from '@/redux/store';
import { useTranslations } from 'next-intl';
import FoundLanguage from '@/utils/foundLanguage';
import '../../style/header.css';
import '../../style/common.css';


function Header() {
    const t = useTranslations('Navbar');
    const b = useTranslations('buttons');
    const l = useTranslations('labels');

    const dispatch = useDispatch();
    const { selectedLangWithSlace } = FoundLanguage()

    const { user: { token = null, first_name = null } } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logOut());
        persistor.purge();
    };

    const typeOfPuja = [
        {
            title: l('mahadev_puja'),
            src: '/assets/puja/mahadev.png',
            href: `${selectedLangWithSlace}/puja/mahadev-puja`
        },
        {
            title: l('devi_puja'),
            src: '/assets/puja/dev.png',
            href: `${selectedLangWithSlace}/puja/devi-puja`
        },
        {
            title: l('hanuman_puja'),
            src: '/assets/puja/hanumanji.png',
            href: `${selectedLangWithSlace}/puja/hanuman-puja`
        },
        {
            title: l('kashi_puja'),
            src: '/assets/puja/kashi.png',
            href: `${selectedLangWithSlace}/puja/kashi-puja`
        },
        {
            title: l('pitra_puja'),
            src: '/assets/puja/pitra.png',
            href: `${selectedLangWithSlace}/puja/pitra-puja`
        },
        {
            title: l('ganesh_puja'),
            src: '/assets/puja/ganesh.png',
            href: `${selectedLangWithSlace}/puja/ganesh-puja`
        },
        {
            title: l('bhairav_puja'),
            src: '/assets/puja/bhairav.png',
            href: `${selectedLangWithSlace}/puja/bhairav-puja`
        }
    ];

    const typeOfVastu = [
        {
            title: l('residential_vastu'),
            src: '/assets/vastu/residential.png',
            href: `${selectedLangWithSlace}/vastu/residential`
        },
        {
            title: l('commercial_vastu'),
            src: '/assets/vastu/commercial.jpg',
            href: `${selectedLangWithSlace}/vastu/commercial`
        },
        {
            title: l('industrial_vastu'),
            src: '/assets/vastu/industrial.png',
            href: `${selectedLangWithSlace}/vastu/industrial`
        },
        {
            title: l('vastu_vivaran'),
            src: '/assets/vastu/vastu.png',
            href: `${selectedLangWithSlace}/vastu/nivaran`
        },
        {
            title: l('kundali'),
            src: '/assets/vastu/nivaran.webp',
            href: `${selectedLangWithSlace}/vastu/kundali`
        },
        {
            title: l('couple_kundli'),
            src: '/assets/vastu/couple.webp',
            href: `${selectedLangWithSlace}/vastu/couple`
        },
        {
            title: l('baby_name_report'),
            src: '/assets/vastu/baby.webp',
            href: `${selectedLangWithSlace}/vastu/baby`
        },
    ];

    return (
        <div className='shadow-sm'>
            <nav className="header-width navbar navbar-expand-lg navbar-light bg-light">
                <div className="container bg-light">
                    <Link className="navbar-brand w-25" href="/">
                        <CustomImage
                            style={{ width: '6lvh' }}
                            className=''
                            loading='lazy'
                            src='/assets/logo.webp' />
                        {first_name ? <small className='mx-3 shadow-sm p-2 rounded text-center text-warning'>{t('user_name')}{first_name}</small> : ''}
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item font-bold hover-shadow-lg transition-all">
                                <Link className="nav-link active" aria-current="page" href="/">{t('home')}</Link>
                            </li>

                            <li className="nav-item font-bold hover-shadow-lg transition-all dropdown">
                                <CustomNavbar navLavel={t('our_puja')} data={typeOfPuja} />
                            </li>

                            <li className="nav-item font-bold hover-shadow-lg transition-all dropdown">
                                <CustomNavbar navLavel={t('vastu')} data={typeOfVastu} />

                            </li>

                            <li className="nav-item font-bold hover-shadow-lg transition-all">
                                <Link className="nav-link" href={selectedLangWithSlace + "/booking-for-pooja"} tabIndex="-1" aria-disabled="true">{t('gau_seva')}</Link>
                            </li>

                            <li className="nav-item font-bold hover-shadow-lg transition-all">
                                <Link className="nav-link " href={selectedLangWithSlace + "/about-us"} tabIndex="-1" aria-disabled="true">{t('about')}</Link>
                            </li>

                            <li className="nav-item font-bold hover-shadow-lg transition-all">
                                <Link className="nav-link " href={selectedLangWithSlace + "/contect-us"} tabIndex="-1" aria-disabled="true">{t('contact')}</Link>
                            </li>

                            <li className="nav-item font-bold hover-shadow-lg transition-all">
                                <Link className="nav-link " href={selectedLangWithSlace + "/gallery"} tabIndex="-1" aria-disabled="true">{t('gallery')}</Link>
                            </li>
                        </ul>


                        <form className=" ">
                            <ul className='navbar-nav gap-2 me-auto mb-2 mb-lg-0'>
                                <li className="nav-item font-bold">
                                    <Link href={selectedLangWithSlace + '/donate-us'}>
                                        <Button label={b('donate')} className='w-100' />
                                    </Link>
                                </li>

                                <li className="nav-item font-bold">
                                    <Link
                                        onClick={token ? handleLogout : () => { }}
                                        href={token ? "/" : (selectedLangWithSlace + '/login')}
                                    >

                                        <Button
                                            label={token ? b('logout') : b('login')}
                                            className='w-100'
                                        />

                                    </Link>
                                </li>

                                <li className="nav-item font-bold">
                                    <LocaleSwitcher />

                                </li>
                            </ul>


                        </form>


                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header