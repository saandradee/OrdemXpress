// src/app/layout.tsx
import type { Metadata } from 'next';
import { globalStyles } from './styles/global';
import { getCssText } from './styles';

export const metadata: Metadata = {
  title: 'Pedidos App',
  description: 'Cadastro e envio de pedidos eletrônicos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  globalStyles();

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
