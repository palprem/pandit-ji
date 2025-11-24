'use client';

import { useRouter } from 'next/navigation';
import Button from '../button';
import FoundLanguage from '@/utils/foundLanguage';

export default function LocaleSwitcher() {
    const router = useRouter();

    const { pathname, locale } = FoundLanguage()

    const switchLanguage = (locale) => {
        const newPath = pathname.replace(/^\/(en|hi)/, `/${locale}`);
        router.push(newPath);
    };

    return (
        <>
            <div className="dropdown ">
                <Button
                    outline
                    label={(locale == 'en') ? 'हिंदी' : 'English'}
                    type="button"
                    // data-bs-toggle="dropdown"
                    className='w-100'
                    onClick={() => switchLanguage((locale == 'en') ? 'hi' : 'en')}

                >
                </Button>

            </div>
        </>
    );
}
