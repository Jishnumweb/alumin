import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ALU PLUS Aluminium",
  description: "Aluplus Aluminium in Thodiyur, Kollam — specialists in glass door and aluminium works.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "ALUPLUS Aluminium",
    description: "Leading Aluminium & Glass Door works in Thodiyur, Kollam.",
    url: "https://alupusaluminium.in",
    siteName: "ALUPLUS Aluminium",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "ALUPLUS Aluminium Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ALUPLUS Aluminium",
          url: "https://alupusaluminium.in",
          logo: "https://alupusaluminium.in/images/logo.png",
          image: "https://alupusaluminium.in/images/logo.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Thodiyoor",
            addressRegion: "Kollam",
            addressCountry: "India",
          },
        }),
      }}
    />
  </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <div className="min-h-screen flex flex-col">
          <div>
            <Navbar/>
          </div>

          <div className="flex-1">
        {children}

          </div>

          <div>
                  <Footer />

          </div>

        </div>
      </body>
    </html>
  );
}
