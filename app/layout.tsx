import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { CartRoot } from '@/components/cart-provider';
import { MetaPixel } from '@/components/meta-pixel';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mundonatal.workers.dev'),
  title: 'Mundo do Natal | A magia começa dentro de casa',
  description: 'Árvores, guirlandas, iluminação e decoração para transformar a sua casa no Natal.',
  icons: {
    icon: 'https://mundodonatal.com/cdn/shop/t/10/assets/logo-mundo-do-natal-favicon-v1.png?v=145563815753261193141794234297',
  },
  openGraph: {
    title: 'Mundo do Natal | A magia começa dentro de casa',
    description: 'Árvores, guirlandas, iluminação e decoração para transformar a sua casa no Natal.',
    images: [
      {
        url: 'https://mundodonatal.com/cdn/shop/t/10/assets/hero-mundo-natal.webp?v=95608368117420465371794234297',
        width: 1920,
        height: 1080,
        alt: 'Mundo do Natal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mundo do Natal | A magia começa dentro de casa',
    description: 'Árvores, guirlandas, iluminação e decoração para transformar a sua casa no Natal.',
    images: ['https://mundodonatal.com/cdn/shop/t/10/assets/hero-mundo-natal.webp?v=95608368117420465371794234297'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartRoot />
        <MetaPixel />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
