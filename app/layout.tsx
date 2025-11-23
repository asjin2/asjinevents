import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script'; // ✅ GA: added

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asjinevents.xyz'),
  title: {
    default: 'Wedding Decor Nagercoil | Best Event Decorators Kanyakumari | Asjin Events',
    template: '%s | Asjin Events'
  },
  description: '⭐ #1 Wedding Decorators in Nagercoil | 500+ Happy Couples | Mandap Decorations, Floral Arrangements & Event Planning in Kanyakumari District | Call +91-8903821128',
  keywords: 'wedding decor Nagercoil, wedding decorators Nagercoil, mandap decoration Nagercoil, wedding planners Kanyakumari, event decorators Tamil Nadu, marriage decoration Nagercoil, wedding stage decoration, floral arrangements Nagercoil, reception decoration, pre wedding events, sangeet decoration, mehendi decoration, engagement decoration, car decoration wedding, wedding venue decoration, traditional wedding decor, modern wedding decoration, best wedding decorators Kanyakumari district, affordable wedding decoration, premium wedding decor services',
  authors: [{ name: 'Asjin Events' }],
  creator: 'Asjin Events',
  publisher: 'Asjin Events',
  category: 'Wedding Services',
  classification: 'Wedding Decoration and Event Management',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  alternates: {
    canonical: 'https://asjinevents.xyz',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://asjinevents.xyz',
    title: 'Wedding Decor Nagercoil | Best Event Decorators Kanyakumari | Asjin Events',
    description: '⭐ #1 Wedding Decorators in Nagercoil | Best Event Decorators Kanyakumari | Asjin Events',
    siteName: 'Asjin Events',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Asjin Events - Best Wedding Decorators in Nagercoil, Kanyakumari District',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Decor Nagercoil | Best Event Decorators Kanyakumari',
    description: '⭐ #1 Wedding Decorators in Nagercoil | Best Event Decorators Kanyakumari | Asjin Events',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://asjinevents.xyz" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Nagercoil" />
        <meta name="geo.position" content="8.1774;77.4349" />
        <meta name="ICBM" content="8.1774, 77.4349" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#9333ea" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//images.pexels.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
      </head>
      <body className={inter.className}>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R809PVV3FL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R809PVV3FL');
          `}
        </Script>

        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster />
      </body>
    </html>
  );
}
