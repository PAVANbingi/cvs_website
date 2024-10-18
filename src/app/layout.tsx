import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar'; // Correct Navbar import
import Footer from './components/Footer'; // Correct Footer import
import CustomCursor from './components/CustomCursor'; // Correct Custom Cursor import
import ScrollProgressBar from './components/ScrollProgressBar'; // Correct Scroll Progress Bar import

// Font imports
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
  title: "Code Vibe Studios",
  description: "Transforming ideas into digital experiences with user-centric web and app solutions.",
  icons: { icon: "/logo.ico" }, // Favicon
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`bg-[#030712] ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Scroll Progress Bar */}
        {/* <ScrollProgressBar /> */}
        
        {/* Custom Cursor */}
        {/* <CustomCursor /> */}

        <header>
          <Navbar /> {/* Navbar component */}
        </header>

        <main className="min-h-screen">{children}</main> {/* Main content area */}

        <Footer /> {/* Footer component */}
      </body>
    </html>
  );
}
