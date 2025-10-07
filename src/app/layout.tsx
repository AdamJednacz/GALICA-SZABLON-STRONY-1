import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Inter } from "next/font/google";
import { AccessibilityProvider } from "../../components/AAA_button/context/AccessibilityContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Szablon 1",
  description: "Strona główna szablonu 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
             <AccessibilityProvider>
        <Header/>
        {children}
        <Footer/>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
