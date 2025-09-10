import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fondation Marie Mwape pour le Progrès Social",
  description:
    "Site officiel de la Fondation Marie Mwape — œuvrant pour les orphelins, les femmes, les personnes handicapées et la santé mentale à Kisangani.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Fondation Marie Mwape pour le Progrès Social",
    description:
      "Site officiel de la Fondation Marie Mwape — œuvrant pour les orphelins, les femmes, les personnes handicapées et la santé mentale à Kisangani.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Fondation Marie Mwape Logo",
      },
    ],
    type: "website",
    locale: "fr_FR",
    siteName: "Fondation Marie Mwape pour le Progrès Social",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fondation Marie Mwape pour le Progrès Social",
    description:
      "Site officiel de la Fondation Marie Mwape — œuvrant pour les orphelins, les femmes, les personnes handicapées et la santé mentale à Kisangani.",
    images: ["/logo.png"],
  },
  other: {
    "theme-color": "#4f46e5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="alternate"
          href="https://fondation-mwape.vercel.app/fr"
          hrefLang="fr"
        />
        <link
          rel="alternate"
          href="https://fondation-mwape.vercel.app/en"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://fondation-mwape.vercel.app"
          hrefLang="x-default"
        />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Fondation Marie Mwape pour le Progrès Social",
              url: "https://fondation-mwape.vercel.app",
              logo: "https://fondation-mwape.vercel.app/logo.png",
              founder: "Marie Mwape Kashimbo",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kisangani",
                addressCountry: "CD",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} transition-colors duration-300`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
