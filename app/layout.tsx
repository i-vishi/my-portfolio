import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vishal Gaur — Senior Mobile Engineer',
  description:
    'Senior mobile engineer building cross-platform apps with Kotlin Multiplatform and Compose Multiplatform. 5 years shipping Android at Shipsy, Testbook, and Paytm.',
  openGraph: {
    title: 'Vishal Gaur — Senior Mobile Engineer',
    description:
      'Senior mobile engineer building cross-platform apps with Kotlin Multiplatform and Compose Multiplatform.',
    type: 'website',
    url: 'https://vishalgaur.dev',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
