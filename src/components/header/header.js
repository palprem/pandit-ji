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
    const p = useTranslations('navbar_pooja');
    const v = useTranslations('navbar_vastu');
    const s = useTranslations('serviceCards');

    const dispatch = useDispatch();
    const { selectedLangWithSlace } = FoundLanguage()

    const { user: { token = null, first_name = null, last_name = null } } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logOut());
        persistor.purge();
    };

    const typeOfPooja = [
        {
            title: p('mahadev_pooja'),
            src: '/assets/puja/mahadev/10.png',
            href: `${selectedLangWithSlace}/puja-lists/mahadev`
        },
        {
            title: p('devi_pooja'),
            src: '/assets/puja/dev.png',
            href: `${selectedLangWithSlace}/puja-lists/devi`
        },
        {
            title: p('hanuman_pooja'),
            src: '/assets/puja/hanumanji.png',
            href: `${selectedLangWithSlace}/puja-lists/hanuman`
        },
        {
            title: p('kashi_pooja'),
            src: '/assets/puja/kashi.png',
            href: `${selectedLangWithSlace}/puja-lists/kashi`
        },
        {
            title: p('pitra_pooja'),
            src: '/assets/puja/pitra.png',
            href: `${selectedLangWithSlace}/puja-lists/pitra`
        },
        {
            title: p('ganesh_pooja'),
            src: '/assets/puja/ganesh.png',
            href: `${selectedLangWithSlace}/puja-lists/ganesh`
        },
        {
            title: p('bhairav_pooja'),
            src: '/assets/puja/bhairav.png',
            href: `${selectedLangWithSlace}/puja-lists/kaalbhairav`
        },
        {
            title: p('10_maha_pooja'),
            src: '/assets/puja/10.png',
            href: `${selectedLangWithSlace}/puja-lists/mahavidhya`
        }
    ];

    const typeOfVastu = [
        {
            title: v('residential_vastu'),
            src: '/assets/vastu/residential.png',
            href: `${selectedLangWithSlace}/vastu/residential`
        },
        {
            title: v('commercial_vastu'),
            src: '/assets/vastu/commercial.png',
            href: `${selectedLangWithSlace}/vastu/commercial`
        },
        {
            title: v('industrial_vastu'),
            src: '/assets/vastu/industrial.png',
            href: `${selectedLangWithSlace}/vastu/industrial`
        },
        {
            title: v('vastu_vivaran'),
            src: '/assets/vastu/vastu.png',
            href: `${selectedLangWithSlace}/vastu/nivaran`
        },
        {
            title: v('kundali'),
            src: '/assets/vastu/kundali.png',
            href: `${selectedLangWithSlace}/vastu/kundali`
        },
        {
            title: v('couple_kundli'),
            src: '/assets/vastu/couple.webp',
            href: `${selectedLangWithSlace}/vastu/couple`
        }
    ];

    return (
        <div className='shadow-sm header'>
            <nav className="header-width navbar navbar-expand-lg navbar-light bg-light">
                <div className="container bg-light">
                    <Link className="navbar-brand " style={{ width: '12rem' }} href="/">
                        <CustomImage
                            style={{ width: '6lvh' }}
                            className=''
                            loading='lazy'
                            src='/assets/logo.webp' />
                        {first_name ? <small className='mx-3 shadow-sm p-2 rounded text-center text-warning '>{first_name} {last_name}</small> : ''}
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">

                            <li className="nav-item font-bold hover-shadow-lg transition-all">
                                <Link className="nav-link active" aria-current="page" href="/">{t('home')}</Link>

                            </li>
                            {token &&
                                <li className="nav-item font-bold hover-shadow-lg transition-all">
                                    <Link className="nav-link" aria-current="page" href={selectedLangWithSlace + "/dashboard"}>{t('dashboard')}</Link>
                                </li>
                            }

                            <li className="nav-item font-bold hover-shadow-lg transition-all dropdown" >
                                <CustomNavbar navLavel={t('our_pooja')} data={typeOfPooja} />
                            </li>

                            <li className="nav-item font-bold hover-shadow-lg transition-all dropdown">
                                <CustomNavbar navLavel={t('vastu')} data={typeOfVastu} />
                            </li>

                            <li className="nav-item font-bold hover-shadow-lg transition-all">
                                <Link className="nav-link " href={selectedLangWithSlace + "/sanskar"} tabIndex="-1" aria-disabled="true">{s('16_sanskar')}</Link>

                            </li>

                            <li className="nav-item font-bold hover-shadow-lg transition-all">
                                <Link className="nav-link" href={selectedLangWithSlace + "/gau-seva"} tabIndex="-1" aria-disabled="true">{t('gau_seva')}</Link>
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