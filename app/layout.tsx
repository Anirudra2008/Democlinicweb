import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
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
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#C1E8FF]/20 text-[#021024] antialiased">
        {children}
      </body>
    </html>
  );
}
