import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Next.js + Better-Auth',
  description: 'A starter template for Next.js with Better-Auth integration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${poppins.variable} h-dvh w-dvw bg-linear-to-br from-blue-500 to-gray-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
