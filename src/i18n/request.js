import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const activeLocale = await requestLocale ?? 'en'; // use ?? to set default fallback

  console.log('Detected locale:', activeLocale);

  return {
    locale: activeLocale,
    messages: (await import(`../messages/${activeLocale}.json`)).default
  };
});
