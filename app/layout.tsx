import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rondon Portas | Instalação e Reforma de Portas",
  description:
    "Serviços de instalação e reforma de portas de madeira em Rio Verde - GO. Qualidade, cuidado e atenção aos detalhes.",
  applicationName: "Rondon Portas",
  openGraph: {
    title: "Rondon Portas | Instalação e Reforma de Portas",
    description:
      "Conheça os serviços de instalação e reforma de portas de madeira da Rondon Portas.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}