import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fondation Marie Mwape pour le Progrès Social",
  description:
    "Site officiel de la Fondation Marie Mwape — œuvrant pour les orphelins, les femmes, les personnes handicapées et la santé mentale à Kisangani.",
  generator: "v0.dev",
  openGraph: {
    title: "Fondation Marie Mwape",
    description: "Official site of a philanthropic foundation serving vulnerable communities in Kisangani.",
    images: ["/images/share-thumbnail.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fondation Marie Mwape",
    description: "Official site of a philanthropic foundation serving vulnerable communities in Kisangani.",
    images: ["/images/share-thumbnail.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
