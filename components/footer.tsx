"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

interface FooterProps {
  language: "fr" | "en";
}

export function Footer({ language }: FooterProps) {
  const content = {
    fr: {
      logo: {
        title: "Fondation Marie Mwape",
        subtitle: "Pour le Progrès Social",
      },
      footer: {
        tagline:
          "Transformant des vies et créant de l'espoir dans la communauté de Kisangani depuis 2021.",
        programs: "Programmes",
        quickLinks: "Liens Rapides",
        programsList: [
          "Soutien aux Orphelins",
          "Aide aux Handicapés",
          "Récupération des Femmes",
          "Soutien aux Albinos",
          "Santé Mentale",
        ],
        copyright:
          "© 2024 Fondation Marie Mwape pour le Progrès Social. Tous droits réservés.",
      },
      nav: {
        home: "Accueil",
        about: "À Propos",
        programs: "Programmes",
        governance: "Gouvernance",
        impact: "Impact",
        contact: "Contact",
        volunteer: "Bénévolat",
        donate: "Faire un Don",
      },
    },
    en: {
      logo: {
        title: "Marie Mwape Foundation",
        subtitle: "For Social Progress",
      },
      footer: {
        tagline:
          "Transforming lives and creating hope in the Kisangani community since 2021.",
        programs: "Programs",
        quickLinks: "Quick Links",
        programsList: [
          "Orphan Support",
          "Disability Aid",
          "Women's Recovery",
          "Albinism Support",
          "Mental Health",
        ],
        copyright:
          "© 2024 Marie Mwape Foundation for Social Progress. All rights reserved.",
      },
      nav: {
        home: "Home",
        about: "About",
        programs: "Programs",
        governance: "Governance",
        impact: "Impact",
        contact: "Contact",
        volunteer: "Volunteer",
        donate: "Donate",
      },
    },
  };

  const t = content[language];

  return (
    <footer className="bg-slate-900 dark:bg-gray-950 text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo
              size="md"
              showText={true}
              className="flex items-center space-x-3"
              textClassName="text-white"
            />
            <p className="text-slate-300 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              {t.footer.tagline}
            </p>
          </div>

          {/* Programs Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.programs}</h4>
            <ul className="space-y-2 text-slate-300 dark:text-gray-400 transition-colors duration-300">
              {t.footer.programsList.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-slate-300 dark:text-gray-400 transition-colors duration-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-white transition-colors"
                >
                  {t.nav.programs}
                </Link>
              </li>
              <li>
                <Link
                  href="/governance"
                  className="hover:text-white transition-colors"
                >
                  {t.nav.governance}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="hover:text-white transition-colors"
                >
                  {t.nav.volunteer}
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:text-white transition-colors"
                >
                  {t.nav.donate}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-slate-300 dark:text-gray-400 transition-colors duration-300">
              <p>Kisangani, RDC</p>
              <p>contact@fmmps.org</p>
              <p>+243 842 528 132</p>
            </div>
            <div className="flex space-x-3 mt-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-slate-300 dark:text-gray-400 hover:text-white hover:bg-slate-800 dark:hover:bg-gray-800 transition-colors duration-300"
                asChild
              >
                <a
                  href="https://www.facebook.com/share/1BHua16PHc/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-slate-300 dark:text-gray-400 hover:text-white hover:bg-slate-800 dark:hover:bg-gray-800 transition-colors duration-300"
                asChild
              >
                <a
                  href="https://twitter.com/fondationmariemwape"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-slate-300 dark:text-gray-400 hover:text-white hover:bg-slate-800 dark:hover:bg-gray-800 transition-colors duration-300"
                asChild
              >
                <a
                  href="https://instagram.com/fondationmariemwape"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800 dark:border-gray-800 mt-12 pt-8 text-center text-slate-400 dark:text-gray-500 transition-colors duration-300">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
