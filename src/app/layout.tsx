import type { Metadata } from "next";
import "./globals.scss"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Inter } from "next/font/google";
import { AccessibilityProvider } from "../../components/AAA_button/context/AccessibilityContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
   display: 'swap',
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
      <body className={`${inter.className}`}>
             <AccessibilityProvider>
        <Header/>
        {children}
        <Footer/>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
