import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fondation Marie Mwape pour le Progrès Social",
  description:
    "Site officiel de la Fondation Marie Mwape — œuvrant pour les orphelins, les femmes, les personnes handicapées et la santé mentale à Kisangani.",
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
