import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asjinevents.xyz'),
  title: {
    default: 'Asjin Events - Wedding Decor & Event Management in Nagercoil',
    template: '%s | Asjin Events'
  },
  description: 'Premium wedding decor and event management services in Nagercoil, Kanyakumari District. Transform your special day with our elegant decorations and professional event planning.',
  keywords: 'wedding decor Nagercoil, event management Kanyakumari, wedding planners Tamil Nadu, decoration services, event organizers',
  authors: [{ name: 'Asjin Events' }],
  creator: 'Asjin Events',
  publisher: 'Asjin Events',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://asjinevents.xyz',
    title: 'Asjin Events - Wedding Decor & Event Management in Nagercoil',
    description: 'Premium wedding decor and event management services in Nagercoil, Kanyakumari District.',
    siteName: 'Asjin Events',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Asjin Events Wedding Decor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asjin Events - Wedding Decor & Event Management',
    description: 'Premium wedding decor and event management services in Nagercoil',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
      </head>
      <body className={inter.className}>
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