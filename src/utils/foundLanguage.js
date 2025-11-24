'use client';

import { useParams, usePathname } from 'next/navigation';

function FoundLanguage() {
    const pathname = usePathname();
    const { locale } = useParams();  // returns 'en' or 'hi'
    return { pathname, locale, selectedLangWithSlace: '/' + locale }
}
export default FoundLanguage