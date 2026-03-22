import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AgeVerificationModal } from '@/components/AgeVerificationModal';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Aura Wellness | Premium Cannabis Club South Africa',
  description: 'Premium cannabis delivered discreetly in South Africa. Lab-tested, private, and secure.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#FAF9F6] text-stone-900 antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <AgeVerificationModal />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
