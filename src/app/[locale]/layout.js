
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
  title: "Raja Shastri | astrologer | Ashram Construction | Puja, Gau Puja, 16 Sanskar, Vastu, Gau Seva",
  description:
    "Ashram Construction services including Gau Puja, 16 Sanskar, Vastu Shastra, Gau Seva, and Water Service. Trusted spiritual and traditional construction solutions.",
  keywords: [
    "Ashram Construction",
    "Gau Puja",
    "16 Sanskar",
    "Vastu Shastra",
    "Gau Seva",
    "Water Service",
    "Spiritual Construction",
    "Ashram Builder India",
    "Kashi Vishwanath",
    "Vedic Jyotish",
    "Anusthan Kendra",
    "Acharya Gopal Sharan Pandey Ji",
    "Raja Shastri",
    "Pandit Raja Shastri",
    "Puja",
    "astrologer"
  ],
  openGraph: {
    title: "Ashram Construction Services",
    description:
      "We provide Ashram Construction, Gau Puja, 16 Sanskar, Vastu, Gau Seva & Water Service.",
    url: "https://raja-shastri.vercel.app",
    siteName: "Ashram Construction",
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
