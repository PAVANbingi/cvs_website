import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar'; // Correct import for Navbar component
import Footer from './components/Footer'; // Import Footer component

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
  icons: { icon: "/logo.ico" }, // This handles the favicon
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
        <header>
          <Navbar /> {/* Correct component usage */}
        </header>

        <main className="min-h-screen">{children}</main> {/* Main content area */}

        <Footer /> {/* Footer component */}
      </body>
    </html>
  );
}
