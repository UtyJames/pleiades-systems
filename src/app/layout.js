import { Michroma, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400", 
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Pleiades Systems | Advanced Defence Technologies",
  description: "Engineering advanced systems for national defence & security. AI-driven threat detection, unmanned systems, and intelligence solutions.",
  keywords: ["defence technology", "national security", "AI systems", "drone reconnaissance", "threat detection", "security databases"],
  authors: [{ name: "Pleiades Systems" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Pleiades Systems | Advanced Defence Technologies",
    description: "Engineering advanced systems for national defence & security",
    url: "https://pleiadesystems.com",
    siteName: "Pleiades Systems",
    images: [
      {
        // url: "https://pleiadesystems.com/og-image.jpg", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pleiades Systems | Advanced Defence Technologies",
    description: "Engineering advanced systems for national defence & security",
    // images: ["https://pleiadesystems.com/twitter-image.jpg"],
  },
  verification: {
    // Add your verification codes here when available
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
    // yahoo: "yahoo-site-verification-code",
  },
  alternates: {
    canonical: "https://pleiadesystems.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${michroma.variable} ${ibmPlexSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}