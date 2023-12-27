import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GlobalStyle from '@/components/layout/GlobalStyle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Login Page',
    description: 'login page...',
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <GlobalStyle />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
