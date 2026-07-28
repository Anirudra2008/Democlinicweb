import type {Metadata} from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Centre For Skin — Dr. Gaurav Nakra',
  description: 'Advanced Dermatology & Hair Restoration in East Delhi by Dr. Gaurav Nakra, Gold Medalist Dermatologist & Cosmetologist.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#FAF8F5] text-[#121316] antialiased">
        {children}
      </body>
    </html>
  );
}
