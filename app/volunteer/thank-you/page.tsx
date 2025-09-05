"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useDarkMode } from "@/hooks/use-dark-mode";
import {
  Menu,
  X,
  Sun,
  Moon,
  Languages,
  CheckCircle,
  Heart,
  Users,
  ArrowLeft,
  Mail,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function VolunteerThankYouPage() {
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
        volunteer: "Bénévolat",
      },
      hero: {
        title: "Merci pour Votre Candidature !",
        subtitle: "Votre demande de bénévolat a été reçue avec succès",
        description:
          "Nous sommes ravis de votre intérêt à rejoindre notre équipe de bénévoles. Votre candidature est entre de bonnes mains et nous vous contacterons bientôt pour les prochaines étapes.",
      },
      nextSteps: {
        title: "Prochaines Étapes",
        steps: [
          {
            title: "Révision de votre candidature",
            description:
              "Notre équipe va examiner votre candidature dans les 2-3 jours ouvrables.",
            time: "2-3 jours",
          },
          {
            title: "Entretien de sélection",
            description:
              "Si votre profil correspond à nos besoins, nous vous contacterons pour un entretien.",
            time: "1 semaine",
          },
          {
            title: "Formation d'accueil",
            description:
              "Les nouveaux bénévoles participent à une session d'orientation et de formation.",
            time: "2 semaines",
          },
          {
            title: "Début de votre mission",
            description:
              "Commencez à faire la différence dans la vie des personnes que nous servons.",
            time: "3 semaines",
          },
        ],
      },
      contact: {
        title: "Des Questions ?",
        description:
          "Si vous avez des questions sur votre candidature ou notre processus de sélection, n'hésitez pas à nous contacter.",
        email: "contact@fondationmariemwape.org",
        whatsapp: "+243 999 123 456",
      },
      actions: {
        backToVolunteer: "Retour à la page bénévolat",
        goHome: "Aller à l'accueil",
        learnMore: "En savoir plus sur nos programmes",
      },
    },
    en: {
      nav: {
        home: "Home",
        programs: "Programs",
        governance: "Governance",
        contact: "Contact",
        volunteer: "Volunteer",
      },
      hero: {
        title: "Thank You for Your Application!",
        subtitle: "Your volunteer application has been successfully received",
        description:
          "We are excited about your interest in joining our volunteer team. Your application is in good hands and we will contact you soon for the next steps.",
      },
      nextSteps: {
        title: "Next Steps",
        steps: [
          {
            title: "Application Review",
            description:
              "Our team will review your application within 2-3 business days.",
            time: "2-3 days",
          },
          {
            title: "Selection Interview",
            description:
              "If your profile matches our needs, we will contact you for an interview.",
            time: "1 week",
          },
          {
            title: "Orientation Training",
            description:
              "New volunteers participate in an orientation and training session.",
            time: "2 weeks",
          },
          {
            title: "Start Your Mission",
            description:
              "Begin making a difference in the lives of the people we serve.",
            time: "3 weeks",
          },
        ],
      },
      contact: {
        title: "Questions?",
        description:
          "If you have questions about your application or our selection process, feel free to contact us.",
        email: "contact@fondationmariemwape.org",
        whatsapp: "+243 999 123 456",
      },
      actions: {
        backToVolunteer: "Back to Volunteer Page",
        goHome: "Go to Home",
        learnMore: "Learn more about our programs",
      },
    },
  };

  const t = content[language];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-slate-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent"
            >
              Fondation Marie Mwape
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/programs"
                className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
              >
                {t.nav.programs}
              </Link>
              <Link
                href="/governance"
                className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
              >
                {t.nav.governance}
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
              >
                {t.nav.contact}
              </Link>
              <Link
                href="/volunteer"
                className="text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400 pb-1"
              >
                {t.nav.volunteer}
              </Link>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                aria-label="Toggle language"
              >
                <Languages className="w-5 h-5" />
              </button>

              <button
                onClick={toggleDarkMode}
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 dark:border-gray-700 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
                >
                  {t.nav.home}
                </Link>
                <Link
                  href="/programs"
                  className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
                >
                  {t.nav.programs}
                </Link>
                <Link
                  href="/governance"
                  className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
                >
                  {t.nav.governance}
                </Link>
                <Link
                  href="/contact"
                  className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
                >
                  {t.nav.contact}
                </Link>
                <Link
                  href="/volunteer"
                  className="text-indigo-600 dark:text-indigo-400 font-semibold"
                >
                  {t.nav.volunteer}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t.hero.title}
            </h1>
            <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
            {t.nextSteps.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.nextSteps.steps.map((step, index) => (
              <Card
                key={index}
                className="border-slate-200 dark:border-gray-700 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                    {step.description}
                  </p>
                  <div className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                    {step.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            {t.contact.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {t.contact.email}
                </a>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-6">
                <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${t.contact.whatsapp.replace(/\s/g, "")}`}
                  className="text-green-600 dark:text-green-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.contact.whatsapp}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-indigo-500 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-3" />
                {t.actions.backToVolunteer}
              </Button>
            </Link>

            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 text-white px-8 py-4 text-lg font-medium transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-3" />
                {t.actions.goHome}
              </Button>
            </Link>

            <Link href="/programs">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-sky-400 text-sky-600 dark:text-sky-400 hover:bg-sky-400 hover:text-white dark:hover:bg-sky-400 dark:hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-3" />
                {t.actions.learnMore}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
