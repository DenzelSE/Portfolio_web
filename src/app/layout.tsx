import { Inter } from 'next/font/google';
import './globals.css';

import FallingSquares from './components/galaxyBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Developer Portfolio',
  description: 'My professional portfolio showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <FallingSquares />
    </html>
  );
}