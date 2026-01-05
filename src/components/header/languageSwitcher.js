'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Button from '../button';
import FoundLanguage from '@/utils/foundLanguage';

export default function LocaleSwitcher() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const queryString = searchParams.toString();

    const { pathname, locale } = FoundLanguage()

    const switchLanguage = (lang) => {
        const updatedPath = pathname.replace(/^\/(en|hi)/, `/${lang}`) + "?" + queryString;

        // router.push(
        //     `/${lang}${pathname.replace(/^\/(en|hi)/, "")}${queryString ? `?${queryString}` : ""
        //     }`, {scroll: false}
        // );

        router.push(updatedPath)
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
