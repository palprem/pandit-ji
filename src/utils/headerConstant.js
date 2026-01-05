import { useTranslations } from 'next-intl';


const t = useTranslations('Navbar');
const b = useTranslations('buttons');
const p = useTranslations('navbar_pooja');
const v = useTranslations('navbar_vastu');
const kar = useTranslations('navbar_16_sanskar');
const s = useTranslations('serviceCards');


export const typeOfPooja = [
    {
        title: p('mahadev_pooja'),
        src: '/assets/puja/mahadev.png',
        href: `${selectedLangWithSlace}/puja/mahadev-puja`
    },
    {
        title: p('devi_pooja'),
        src: '/assets/puja/dev.png',
        href: `${selectedLangWithSlace}/puja/devi-puja`
    },
    {
        title: p('hanuman_pooja'),
        src: '/assets/puja/hanumanji.png',
        href: `${selectedLangWithSlace}/puja/hanuman-puja`
    },
    {
        title: p('kashi_pooja'),
        src: '/assets/puja/kashi.png',
        href: `${selectedLangWithSlace}/puja/kashi-puja`
    },
    {
        title: p('pitra_pooja'),
        src: '/assets/puja/pitra.png',
        href: `${selectedLangWithSlace}/puja/pitra-puja`
    },
    {
        title: p('ganesh_pooja'),
        src: '/assets/puja/ganesh.png',
        href: `${selectedLangWithSlace}/puja/ganesh-puja`
    },
    {
        title: p('bhairav_pooja'),
        src: '/assets/puja/bhairav.png',
        href: `${selectedLangWithSlace}/puja/bhairav-puja`
    },
    {
        title: p('10_maha_pooja'),
        src: '/assets/puja/bhairav.png',
        href: `${selectedLangWithSlace}/puja/bhairav-puja`
    }
];

export const typeOfVastu = [
    {
        title: v('residential_vastu'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: v('commercial_vastu'),
        src: '/assets/vastu/commercial.jpg',
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
        src: '/assets/vastu/nivaran.webp',
        href: `${selectedLangWithSlace}/vastu/kundali`
    },
    {
        title: v('couple_kundli'),
        src: '/assets/vastu/couple.webp',
        href: `${selectedLangWithSlace}/vastu/couple`
    }
    // {
    //     title: v('baby_name_report'),
    //     src: '/assets/vastu/baby.webp',
    //     href: `${selectedLangWithSlace}/vastu/baby`
    // },
];

export const sixteen_sanskar = [
    {
        title: kar('garbhadhaan'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('punsavan'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('simantonayan'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('jatkarma'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('naamkaran'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('nishkramana'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('annprashan'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('chaul'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('vidyarambh'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('karnavedh'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('upnayan'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('vedarambha'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('keshani_samskar'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('samavartan'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('vivah'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
    {
        title: kar('antyesthi'),
        src: '/assets/vastu/residential.png',
        href: `${selectedLangWithSlace}/vastu/residential`
    },
]