import Head from 'next/head';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Conheça um pouco sobre mim.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>

      <body>
        {children}
        </body>
    </html>
  );
}
