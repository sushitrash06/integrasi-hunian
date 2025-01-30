import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { ProfileProvider } from "./Context/profile-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Integrasi Hunian",
  description: "Design & Build | Mewujudkan Hunian Impian Anda dengan Desain dan Konstruksi Terbaik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProfileProvider> 
          <Header />
          {children}
          <Footer />
        </ProfileProvider>
      </body>
    </html>
  );
}
