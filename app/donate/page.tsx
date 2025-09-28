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
  Copy,
  Smartphone,
} from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTopButton } from "@/components/back-to-top-button";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/ui/logo";

export default function DonatePage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { isDarkMode, toggleDarkMode, mounted } = useDarkMode();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const copyToClipboard = (text: string, field: string) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
      });
    } else {
      // Fallback for browsers that don't support clipboard API
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
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
          {
            amount: "50$",
            impact: "Nourrit 10 enfants orphelins pendant une semaine",
          },
          {
            amount: "100$",
            impact: "Équipe médical pour 5 personnes handicapées",
          },
          { amount: "200$", impact: "Formation professionnelle pour 3 femmes" },
          {
            amount: "500$",
            impact: "Matériel éducatif pour une classe entière",
          },
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
        title: "Soutenez Notre Action",
        description: "Choisissez votre méthode de paiement préférée",
        methods: [
          {
            title: "Virement Bancaire",
            description: "Transfert sécurisé via banque",
            icon: "Banknote" as const,
            details: {
              accountName: "Fondation Mwape",
              accountNumber: "FR76 1234 5678 9012 3456 789",
              bankName: "Banque Internationale",
              swiftCode: "BINTFRPP",
              mpesaNumber: undefined,
              airtelNumber: undefined,
              email: undefined,
            },
          },
          {
            title: "Mobile Money",
            description: "M-Pesa, Airtel Money",
            icon: "Smartphone" as const,
            details: {
              mpesaNumber: "+243 842 528 132",
              accountName: "Fondation Mwape",
              accountNumber: undefined,
              bankName: undefined,
              swiftCode: undefined,
              email: undefined,
            },
          },
          {
            title: "PayPal",
            description: "Paiement en ligne sécurisé",
            icon: "CreditCard" as const,
            details: {
              email: "donate@fondation-mwape.org",
              accountName: "Fondation Mwape",
              accountNumber: undefined,
              bankName: undefined,
              swiftCode: undefined,
              mpesaNumber: undefined,
              airtelNumber: undefined,
            },
          },
        ],
        copyButton: "Copier",
        copied: "Copié !",
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
          {
            amount: "$500",
            impact: "Educational materials for an entire class",
          },
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
        title: "Support Our Work",
        description: "Choose your preferred payment method",
        methods: [
          {
            title: "Bank Transfer",
            description: "Secure bank transfer",
            icon: "Banknote" as const,
            details: {
              accountName: "Fondation Mwape",
              accountNumber: "FR76 1234 5678 9012 3456 789",
              bankName: "International Bank",
              swiftCode: "BINTFRPP",
              mpesaNumber: undefined,
              airtelNumber: undefined,
              email: undefined,
            },
          },
          {
            title: "Mobile Money",
            description: "M-Pesa, Airtel Money",
            icon: "Smartphone" as const,
            details: {
              mpesaNumber: "+243 901 234 567",
              airtelNumber: "+243 902 345 678",
              accountName: "Fondation Mwape",
              accountNumber: undefined,
              bankName: undefined,
              swiftCode: undefined,
              email: undefined,
            },
          },
          {
            title: "PayPal",
            description: "Secure online payment",
            icon: "CreditCard" as const,
            details: {
              email: "donate@fondation-mwape.org",
              accountName: "Fondation Mwape",
              accountNumber: undefined,
              bankName: undefined,
              swiftCode: undefined,
              mpesaNumber: undefined,
              airtelNumber: undefined,
            },
          },
        ],
        copyButton: "Copy",
        copied: "Copied!",
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
            <Link href="/">
              <Logo
                size="md"
                showText={true}
                className="flex items-center space-x-3"
              />
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
                onClick={mounted ? toggleDarkMode : undefined}
                variant="ghost"
                size="sm"
                className="p-2 text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
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
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="border-slate-200 dark:border-gray-600 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-lg px-3 py-2 text-sm font-medium bg-transparent transition-colors duration-300"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
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
                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-600 my-3"></div>

                {/* Mobile Controls */}
                <div className="space-y-3 px-3">
                  {/* Language and Dark Mode Toggle Row */}
                  <div className="flex items-center justify-between space-x-3">
                    {/* Language Toggle */}
                    <Button
                      onClick={toggleLanguage}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-200 dark:border-gray-600 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-lg px-3 py-2 text-sm font-medium bg-transparent transition-colors duration-300"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {language === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
                    </Button>

                    {/* Dark Mode Toggle */}
                    <Button
                      onClick={mounted ? toggleDarkMode : undefined}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-200 dark:border-gray-600 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-lg px-3 py-2 text-sm font-medium bg-transparent transition-colors duration-300"
                      aria-label="Toggle dark mode"
                      disabled={!mounted}
                    >
                      {mounted && isDarkMode ? (
                        <>
                          <Sun className="w-4 h-4 mr-2" />
                          {language === "fr" ? "Clair" : "Light"}
                        </>
                      ) : (
                        <>
                          <Moon className="w-4 h-4 mr-2" />
                          {language === "fr" ? "Sombre" : "Dark"}
                        </>
                      )}
                    </Button>
                  </div>
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
              const IconComponent =
                option.icon === "Gift"
                  ? Gift
                  : option.icon === "Calendar"
                    ? Calendar
                    : Heart;

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
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
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

      {/* Payment Methods Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.payment.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.payment.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {t.payment.methods.map((method, index) => {
              const IconComponent =
                method.icon === "Banknote"
                  ? Banknote
                  : method.icon === "Smartphone"
                    ? Smartphone
                    : CreditCard;
              const qrImage =
                method.icon === "Banknote"
                  ? "/qr-bank.svg"
                  : method.icon === "Smartphone"
                    ? "/qr-mobile.svg"
                    : "/qr-paypal.svg";

              return (
                <Card
                  key={index}
                  className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    {/* QR Code */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <img
                        src={qrImage}
                        alt={`QR Code for ${method.title}`}
                        className="w-20 h-20 sm:w-24 sm:h-24 border border-slate-200 dark:border-gray-600 rounded-lg"
                      />
                    </div>

                    {/* Payment Details */}
                    <div className="space-y-3 sm:space-y-4">
                      {method.icon === "Banknote" && (
                        <>
                          <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                {language === "fr"
                                  ? "Nom du compte:"
                                  : "Account Name:"}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  copyToClipboard(
                                    method.details.accountName || "",
                                    `${index}-accountName`,
                                  )
                                }
                                className="h-6 px-1 sm:px-2 text-xs"
                              >
                                {copiedField === `${index}-accountName` ? (
                                  <Check className="w-3 h-3" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-gray-700 p-2 rounded break-all">
                              {method.details.accountName || ""}
                            </p>
                          </div>

                          <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                {language === "fr"
                                  ? "Numéro de compte:"
                                  : "Account Number:"}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  copyToClipboard(
                                    method.details.accountNumber || "",
                                    `${index}-accountNumber`,
                                  )
                                }
                                className="h-6 px-1 sm:px-2 text-xs"
                              >
                                {copiedField === `${index}-accountNumber` ? (
                                  <Check className="w-3 h-3" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-gray-700 p-2 rounded break-all">
                              {method.details.accountNumber || ""}
                            </p>
                          </div>

                          <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                {language === "fr"
                                  ? "Code SWIFT:"
                                  : "SWIFT Code:"}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  copyToClipboard(
                                    method.details.swiftCode || "",
                                    `${index}-swiftCode`,
                                  )
                                }
                                className="h-6 px-1 sm:px-2 text-xs"
                              >
                                {copiedField === `${index}-swiftCode` ? (
                                  <Check className="w-3 h-3" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-gray-700 p-2 rounded break-all">
                              {method.details.swiftCode || ""}
                            </p>
                          </div>
                        </>
                      )}

                      {method.icon === "Smartphone" && (
                        <>
                          <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                M-Pesa:
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  copyToClipboard(
                                    method.details.mpesaNumber || "",
                                    `${index}-mpesa`,
                                  )
                                }
                                className="h-6 px-1 sm:px-2 text-xs"
                              >
                                {copiedField === `${index}-mpesa` ? (
                                  <Check className="w-3 h-3" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-gray-700 p-2 rounded break-all">
                              {method.details.mpesaNumber || ""}
                            </p>
                          </div>

                          <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                Airtel Money:
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  copyToClipboard(
                                    method.details.airtelNumber || "",
                                    `${index}-airtel`,
                                  )
                                }
                                className="h-6 px-1 sm:px-2 text-xs"
                              >
                                {copiedField === `${index}-airtel` ? (
                                  <Check className="w-3 h-3" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-gray-700 p-2 rounded break-all">
                              {method.details.airtelNumber || ""}
                            </p>
                          </div>

                          <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                {language === "fr"
                                  ? "Nom du compte:"
                                  : "Account Name:"}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  copyToClipboard(
                                    method.details.accountName || "",
                                    `${index}-mobileAccountName`,
                                  )
                                }
                                className="h-6 px-1 sm:px-2 text-xs"
                              >
                                {copiedField ===
                                `${index}-mobileAccountName` ? (
                                  <Check className="w-3 h-3" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-gray-700 p-2 rounded break-all">
                              {method.details.accountName || ""}
                            </p>
                          </div>
                        </>
                      )}

                      {method.icon === "CreditCard" && (
                        <>
                          <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                Email:
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  copyToClipboard(
                                    method.details.email || "",
                                    `${index}-email`,
                                  )
                                }
                                className="h-6 px-1 sm:px-2 text-xs"
                              >
                                {copiedField === `${index}-email` ? (
                                  <Check className="w-3 h-3" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-gray-700 p-2 rounded break-all">
                              {method.details.email || ""}
                            </p>
                          </div>

                          <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                {language === "fr"
                                  ? "Nom du compte:"
                                  : "Account Name:"}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  copyToClipboard(
                                    method.details.accountName || "",
                                    `${index}-paypalAccountName`,
                                  )
                                }
                                className="h-6 px-1 sm:px-2 text-xs"
                              >
                                {copiedField ===
                                `${index}-paypalAccountName` ? (
                                  <Check className="w-3 h-3" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-gray-700 p-2 rounded break-all">
                              {method.details.accountName || ""}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer language={language} />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}
