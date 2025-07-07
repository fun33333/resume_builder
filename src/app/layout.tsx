import './globals.css';
import { Inter, Space_Grotesk, Orbitron, DM_Sans } from 'next/font/google';
import NavbarWrapper from "@/components/NavbarWrapper"
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${dmSans.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <title>CareerAI - Your AI-Powered Career Partner</title>
        <meta name="description" content="AI-powered career counseling and resume building platform" />
      </head>
      <body className={`${dmSans.className} min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white`}>
        <NavbarWrapper />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}