
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import ProvidersWrapper from "./ProvidersWrapper"; // 👇 a new client wrapper
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// export const metadata = {
//   title: {
//     default: "Raja Shastri",
//     template: "%s - Raja Shastri",
//   },

//   twitter: {
//     card: "summary_large_image",
//     site: "@fitlife",
//   },
// };


export const metadata = {
  title:
    "Raja Shastri | Astrologer | Ashram Construction | Gau Puja | 16 Sanskar | Vastu | Gau Seva",

  description:
    "Raja Shastri provides Ashram Construction services including Gau Puja, 16 Sanskar, Vastu Shastra, Gau Seva, Water Service and Vedic rituals. Trusted spiritual guidance and traditional solutions.",

  keywords: [
    "Raja Shastri",
    "Pandit Raja Shastri",
    "Astrologer",
    "Vedic Jyotish",
    "Ashram Construction",
    "Gau Puja",
    "16 Sanskar",
    "Vastu Shastra",
    "Gau Seva",
    "Water Service",
    "Anusthan Kendra",
    "Kashi Vishwanath",
    "Spiritual Services India"
  ],

  alternates: {
    canonical: "https://raja-shastri.vercel.app/hi",
    languages: {
      hi: "https://raja-shastri.vercel.app/hi",
      en: "https://raja-shastri.vercel.app/en",
    },
  },

  openGraph: {
    title: "Raja Shastri | Ashram Construction & Spiritual Services",
    description:
      "Ashram Construction, Gau Puja, 16 Sanskar, Vastu Shastra, Gau Seva and Vedic spiritual services by Raja Shastri.",
    url: "https://raja-shastri.vercel.app/hi",
    siteName: "Raja Shastri",
    locale: "hi_IN",
    type: "website",
  },

  verification: {
    google: "lFdzQZ9aK7XDuhdxUwDWD6aA1eY-8KHljmDiQNSRa68",
  },
};



export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  if (!routing.locales.includes(locale)) {
    notFound()
  }



  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ProvidersWrapper>{children}</ProvidersWrapper>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
