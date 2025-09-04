"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  ArrowLeft,
  Check,
  CreditCard,
  Users,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  Banknote,
  Gift,
  Calendar,
} from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTopButton } from "@/components/back-to-top-button";
import Link from "next/link";

export default function DonatePage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode, mounted } = useDarkMode();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const content = {
    fr: {
      nav: {
        home: "Accueil",
        programs: "Programmes",
        governance: "Gouvernance",
        contact: "Contact",
        donate: "Faire un Don",
      },
      hero: {
        badge: "Faire un Don",
        title: "Soutenez Notre Mission",
        description:
          "Votre don nous aide à soutenir les albinos, les veuves, les mères célibataires, les enfants sans-abri, les personnes handicapées et les jeunes athlètes dans la région de la Tshopo. Chaque contribution fait la différence.",
      },
      impact: {
        title: "Votre Impact",
        description: "Découvrez comment vos dons transforment des vies",
        stats: [
          { amount: "50$", impact: "Nourrit 10 enfants orphelins pendant une semaine" },
          { amount: "100$", impact: "Équipe médical pour 5 personnes handicapées" },
          { amount: "200$", impact: "Formation professionnelle pour 3 femmes" },
          { amount: "500$", impact: "Matériel éducatif pour une classe entière" },
        ],
      },
      donation: {
        title: "Options de Don",
        description: "Choisissez la façon dont vous souhaitez contribuer",
        options: [
          {
            title: "Don Unique",
            description: "Faites un don ponctuel selon vos moyens",
            icon: "Gift",
            features: [
              "Montant flexible",
              "Reçu fiscal immédiat",
              "Impact direct",
            ],
          },
          {
            title: "Don Mensuel",
            description: "Soutenez-nous régulièrement chaque mois",
            icon: "Calendar",
            features: [
              "Impact continu",
              "Annulation possible à tout moment",
              "Rapport d'impact trimestriel",
            ],
          },
          {
            title: "Don en Nature",
            description: "Offrez des biens matériels ou services",
            icon: "Heart",
            features: [
              "Vêtements et fournitures",
              "Équipements médicaux",
              "Services professionnels",
            ],
          },
        ],
      },
      payment: {
        title: "Faire un Don Maintenant",
        description: "Votre générosité change des vies",
        amounts: ["25", "50", "100", "250", "500"],
        customAmount: "Montant personnalisé",
        currency: "USD",
        donateButton: "Faire un Don",
        securePayment: "Paiement sécurisé",
      },
      contact: {
        title: "Autres Moyens de Donner",
        description: "Contactez-nous pour explorer d'autres options de don",
        methods: [
          {
            title: "Virement Bancaire",
            description: "Pour les dons importants ou institutionnels",
          },
          {
            title: "Don par Chèque",
            description: "Envoyez votre chèque à notre adresse",
          },
          {
            title: "Crypto-monnaies",
            description: "Nous acceptons Bitcoin et autres cryptos",
          },
        ],
        whatsapp: "Contactez-nous sur WhatsApp",
      },
    },
    en: {
      nav: {
        home: "Home",
        programs: "Programs",
        governance: "Governance",
        contact: "Contact",
        donate: "Donate",
      },
      hero: {
        badge: "Make a Donation",
        title: "Support Our Mission",
        description:
          "Your donation helps us support people with albinism, widows, single mothers, homeless children, people with disabilities, and young athletes in the Tshopo region. Every contribution makes a difference.",
      },
      impact: {
        title: "Your Impact",
        description: "Discover how your donations transform lives",
        stats: [
          { amount: "$50", impact: "Feeds 10 orphaned children for a week" },
          { amount: "$100", impact: "Medical equipment for 5 disabled people" },
          { amount: "$200", impact: "Professional training for 3 women" },
          { amount: "$500", impact: "Educational materials for an entire class" },
        ],
      },
      donation: {
        title: "Donation Options",
        description: "Choose how you want to contribute",
        options: [
          {
            title: "One-time Donation",
            description: "Make a single donation according to your means",
            icon: "Gift",
            features: [
              "Flexible amount",
              "Immediate tax receipt",
              "Direct impact",
            ],
          },
          {
            title: "Monthly Support",
            description: "Support us regularly every month",
            icon: "Calendar",
            features: [
              "Continuous impact",
              "Cancel anytime",
              "Quarterly impact report",
            ],
          },
          {
            title: "In-kind Donation",
            description: "Donate goods or services",
            icon: "Heart",
            features: [
              "Clothing and supplies",
              "Medical equipment",
              "Professional services",
            ],
          },
        ],
      },
      payment: {
        title: "Donate Now",
        description: "Your generosity changes lives",
        amounts: ["25", "50", "100", "250", "500"],
        customAmount: "Custom amount",
        currency: "USD",
        donateButton: "Donate Now",
        securePayment: "Secure payment",
      },
      contact: {
        title: "Other Ways to Give",
        description: "Contact us to explore other donation options",
        methods: [
          {
            title: "Bank Transfer",
            description: "For large or institutional donations",
          },
          {
            title: "Check Donation",
            description: "Send your check to our address",
          },
          {
            title: "Cryptocurrency",
            description: "We accept Bitcoin and other cryptocurrencies",
          },
        ],
        whatsapp: "Contact us on WhatsApp",
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-slate-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="font-serif text-lg font-bold text-slate-900 dark:text-white transition-colors duration-300">
                  {language === "fr" ? "Fondation Marie Mwape" : "Marie Mwape Foundation"}
                </div>
                <div className="text-xs text-slate-600 dark:text-gray-400 transition-colors duration-300">
                  {language === "fr" ? "pour le Progrès Social" : "for Social Progress"}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/programs"
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {t.nav.programs}
              </Link>
              <Link
                href="/governance"
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {t.nav.governance}
              </Link>
              <Link
                href="/#contact"
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {t.nav.contact}
              </Link>

              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                aria-label="Toggle dark mode"
                disabled={!mounted}
              >
                {mounted && isDarkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>

              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {language === "fr" ? "EN" : "FR"}
              </Button>

              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                {t.nav.donate}
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-slate-600 dark:text-gray-300"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  {t.nav.home}
                </Link>
                <Link
                  href="/programs"
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  {t.nav.programs}
                </Link>
                <Link
                  href="/governance"
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  {t.nav.governance}
                </Link>
                <Link
                  href="/#contact"
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  {t.nav.contact}
                </Link>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleDarkMode}
                    className="text-slate-600 dark:text-gray-300"
                    disabled={!mounted}
                  >
                    {mounted && isDarkMode ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleLanguage}
                    className="text-slate-600 dark:text-gray-300"
                  >
                    {language === "fr" ? "EN" : "FR"}
                  </Button>
                </div>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {t.nav.donate}
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {/* Back to Home Link */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === "fr" ? "Retour à l'accueil" : "Back to Home"}
              </Link>
            </div>

            <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-2 font-medium transition-colors duration-300">
              {t.hero.badge}
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.hero.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-4xl mx-auto transition-colors duration-300">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.impact.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.impact.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.impact.stats.map((stat, index) => (
              <Card
                key={index}
                className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Banknote className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    {stat.amount}
                  </div>
                  <p className="text-slate-600 dark:text-gray-300 text-sm">
                    {stat.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.donation.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.donation.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.donation.options.map((option, index) => {
              const IconComponent = option.icon === "Gift" ? Gift : option.icon === "Calendar" ? Calendar : Heart;

              return (
                <Card
                  key={index}
                  className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl text-slate-900 dark:text-white transition-colors duration-300">
                      {option.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                      {option.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-3xl text-slate-900 dark:text-white transition-colors duration-300">
                {t.payment.title}
              </CardTitle>
              <CardDescription className="text-xl text-slate-600 dark:text-gray-300 transition-colors duration-300">
                {t.payment.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <label className="block text-lg font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
                    {language === "fr" ? "Choisissez un montant" : "Choose an amount"}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                    {t.payment.amounts.map((amount) => (
                      <button
                        key={amount}
                        className="p-4 border-2 border-slate-200 dark:border-gray-600 rounded-lg text-center hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300"
                      >
                        <div className="text-lg font-bold text-slate-900 dark:text-white">
                          {t.payment.currency}{amount}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mb-6">
                    <input
                      type="number"
                      placeholder={t.payment.customAmount}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Donate Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 text-white px-12 py-4 text-lg font-medium transition-all duration-300"
                  >
                    <CreditCard className="w-5 h-5 mr-3" />
                    {t.payment.donateButton}
                  </Button>
                  <p className="mt-3 text-sm text-slate-500 dark:text-gray-400 transition-colors duration-300">
                    🔒 {t.payment.securePayment}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative Payment Methods */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.contact.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.contact.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.contact.methods.map((method, index) => (
              <Card
                key={index}
                className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Banknote className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 px-8 py-3 text-lg font-medium transition-all duration-300"
            >
              {t.contact.whatsapp}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-gray-950 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">
                  {language === "fr" ? "Fondation Marie Mwape" : "Marie Mwape Foundation"}
                </h3>
                <p className="text-sm text-slate-300 dark:text-gray-400 transition-colors duration-300">
                  {language === "fr" ? "pour le Progrès Social" : "for Social Progress"}
                </p>
              </div>
            </div>
            <p className="text-slate-400 dark:text-gray-500 transition-colors duration-300">
              {language === "fr"
                ? "Transformant des vies et créant de l'espoir dans la communauté de Kisangani depuis 2018."
                : "Transforming lives and creating hope in the Kisangani community since 2018."}
            </p>
            <div className="pt-4 border-t border-slate-700 dark:border-gray-700">
              <p className="text-sm text-slate-400 dark:text-gray-500 transition-colors duration-300">
                {language === "fr"
                  ? "© 2024 Fondation Marie Mwape pour le Progrès Social. Tous droits réservés."
                  : "© 2024 Marie Mwape Foundation for Social Progress. All rights reserved."}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}
