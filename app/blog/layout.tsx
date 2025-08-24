import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Planning Blog - Asjin Events',
  description: 'Expert tips, trends, and insights for planning your perfect wedding in Nagercoil and Kanyakumari district.',
  openGraph: {
    title: 'Wedding Planning Blog - Asjin Events',
    description: 'Expert tips, trends, and insights for planning your perfect wedding in Nagercoil and Kanyakumari district.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}