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
  Users,
  Shield,
  Star,
  Lightbulb,
  ArrowLeft,
  ChevronRight,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTopButton } from "@/components/back-to-top-button";
import Link from "next/link";

export default function ProgramsPage() {
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
        support: "Soutenir Notre Travail",
      },
      hero: {
        badge: "Nos Programmes",
        title: "Domaines d'Intervention",
        description:
          "Découvrez en détail nos cinq programmes phares qui transforment des vies à Kisangani. Chaque programme répond à des besoins spécifiques de notre communauté avec une approche holistique et durable.",
      },
      programs: {
        items: [
          {
            title: "Soutien aux Orphelins",
            shortDescription:
              "Nous offrons un foyer, une éducation et un avenir aux enfants orphelins de Kisangani.",
            fullDescription:
              "Notre programme de soutien aux orphelins est au cœur de notre mission. Nous accueillons les enfants abandonnés ou orphelins dans un environnement sécurisé et aimant. Notre approche va au-delà de l'hébergement : nous offrons une éducation de qualité, un accompagnement psychologique, des activités récréatives et une préparation à la vie autonome. Chaque enfant bénéficie d'un suivi personnalisé pour développer ses talents et réaliser son potentiel.",
            impact: {
              beneficiaries: "150+",
              description: "enfants soutenus depuis 2018",
            },
            activities: [
              "Hébergement et soins quotidiens",
              "Scolarisation et soutien scolaire",
              "Accompagnement psychologique",
              "Formation professionnelle pour les plus âgés",
              "Activités culturelles et sportives",
            ],
          },
          {
            title: "Aide aux Personnes Handicapées",
            shortDescription:
              "Programmes d'inclusion et de soutien pour les personnes en situation de handicap.",
            fullDescription:
              "Nous croyons fermement que le handicap ne doit pas être un obstacle à l'épanouissement personnel. Notre programme vise l'inclusion sociale et économique des personnes handicapées à travers des services adaptés, de la formation professionnelle, et la sensibilisation communautaire. Nous travaillons à briser les stigmates et à créer une société plus inclusive où chacun peut contribuer selon ses capacités.",
            impact: {
              beneficiaries: "200+",
              description: "personnes handicapées accompagnées",
            },
            activities: [
              "Rééducation et thérapie physique",
              "Formation professionnelle adaptée",
              "Fourniture d'équipements d'assistance",
              "Sensibilisation communautaire",
              "Accompagnement à l'insertion professionnelle",
            ],
          },
          {
            title: "Récupération des Femmes",
            shortDescription:
              "Accompagnement et réinsertion sociale des femmes en situation de détresse.",
            fullDescription:
              "Les femmes en détresse trouvent chez nous un refuge sûr et un accompagnement complet vers la réinsertion sociale. Notre programme aborde les traumatismes, offre une formation professionnelle, et facilite l'accès aux soins de santé. Nous travaillons également sur l'autonomisation économique à travers des activités génératrices de revenus et la création de coopératives féminines.",
            impact: {
              beneficiaries: "75+",
              description: "femmes réintégrées avec succès",
            },
            activities: [
              "Accompagnement psychosocial",
              "Formation en couture et artisanat",
              "Microcrédit et activités génératrices de revenus",
              "Soins de santé reproductive",
              "Alphabétisation et éducation de base",
            ],
          },
          {
            title: "Soutien aux Personnes Albinos",
            shortDescription:
              "Protection, sensibilisation et intégration des personnes albinos dans la société.",
            fullDescription:
              "Face aux discriminations et dangers que vivent les personnes albinos, notre programme offre une protection complète et un accompagnement vers l'intégration sociale. Nous distribuons des crèmes solaires et équipements de protection, organisons des campagnes de sensibilisation, et facilitons l'accès à l'éducation et à l'emploi. Notre objectif est de créer un environnement où les personnes albinos peuvent vivre en sécurité et dignité.",
            impact: {
              beneficiaries: "45+",
              description: "personnes albinos protégées et accompagnées",
            },
            activities: [
              "Distribution de crèmes solaires et équipements",
              "Campagnes de sensibilisation communautaire",
              "Soutien scolaire spécialisé",
              "Accompagnement psychologique",
              "Plaidoyer pour leurs droits",
            ],
          },
          {
            title: "Aide en Santé Mentale",
            shortDescription:
              "Services de soutien psychologique et de sensibilisation à la santé mentale.",
            fullDescription:
              "La santé mentale étant souvent négligée dans notre contexte, nous offrons des services de consultation psychologique, de thérapie de groupe, et de sensibilisation communautaire. Notre équipe de psychologues formés accompagne les personnes souffrant de troubles mentaux et leurs familles. Nous travaillons également à déstigmatiser les maladies mentales et à promouvoir le bien-être psychologique dans la communauté.",
            impact: {
              beneficiaries: "300+",
              description: "consultations et séances de thérapie",
            },
            activities: [
              "Consultations psychologiques individuelles",
              "Thérapie de groupe",
              "Sensibilisation communautaire",
              "Formation des familles d'accompagnement",
              "Réinsertion sociale des patients",
            ],
          },
        ],
      },
      support: {
        title: "Soutenez Nos Programmes",
        description:
          "Votre soutien nous permet de continuer à transformer des vies. Chaque contribution, qu'elle soit financière, matérielle ou sous forme de bénévolat, a un impact direct sur notre communauté.",
        ways: [
          {
            title: "Don Financier",
            description: "Contribuez financièrement à nos programmes",
          },
          {
            title: "Don Matériel",
            description: "Offrez des équipements, vêtements ou fournitures",
          },
          {
            title: "Bénévolat",
            description: "Partagez vos compétences avec notre équipe",
          },
        ],
        donateBtn: "Faire un Don",
        volunteerBtn: "Devenir Bénévole",
      },
    },
    en: {
      nav: {
        home: "Home",
        programs: "Programs",
        governance: "Governance",
        contact: "Contact",
        support: "Support Our Work",
      },
      hero: {
        badge: "Our Programs",
        title: "Areas of Intervention",
        description:
          "Discover in detail our five flagship programs that transform lives in Kisangani. Each program addresses specific needs in our community with a holistic and sustainable approach.",
      },
      programs: {
        items: [
          {
            title: "Support for Orphans",
            shortDescription:
              "We provide a home, education and future for orphaned children in Kisangani.",
            fullDescription:
              "Our orphan support program is at the heart of our mission. We welcome abandoned or orphaned children in a safe and loving environment. Our approach goes beyond accommodation: we offer quality education, psychological support, recreational activities and preparation for independent living. Each child receives personalized follow-up to develop their talents and realize their potential.",
            impact: {
              beneficiaries: "150+",
              description: "children supported since 2018",
            },
            activities: [
              "Housing and daily care",
              "Schooling and academic support",
              "Psychological counseling",
              "Professional training for older children",
              "Cultural and sports activities",
            ],
          },
          {
            title: "Assistance for People with Disabilities",
            shortDescription:
              "Inclusion and support programs for people with disabilities.",
            fullDescription:
              "We firmly believe that disability should not be an obstacle to personal fulfillment. Our program aims at social and economic inclusion of people with disabilities through adapted services, professional training, and community awareness. We work to break stigma and create a more inclusive society where everyone can contribute according to their abilities.",
            impact: {
              beneficiaries: "200+",
              description: "people with disabilities supported",
            },
            activities: [
              "Rehabilitation and physical therapy",
              "Adapted professional training",
              "Provision of assistive equipment",
              "Community awareness",
              "Professional integration support",
            ],
          },
          {
            title: "Women's Recovery",
            shortDescription:
              "Support and social reintegration for women in distress.",
            fullDescription:
              "Women in distress find with us a safe refuge and complete support towards social reintegration. Our program addresses trauma, offers professional training, and facilitates access to healthcare. We also work on economic empowerment through income-generating activities and the creation of women's cooperatives.",
            impact: {
              beneficiaries: "75+",
              description: "women successfully reintegrated",
            },
            activities: [
              "Psychosocial support",
              "Training in sewing and crafts",
              "Microcredit and income-generating activities",
              "Reproductive health care",
              "Literacy and basic education",
            ],
          },
          {
            title: "Support for People with Albinism",
            shortDescription:
              "Protection, awareness and integration of people with albinism in society.",
            fullDescription:
              "Faced with the discrimination and dangers experienced by people with albinism, our program offers comprehensive protection and support towards social integration. We distribute sunscreens and protective equipment, organize awareness campaigns, and facilitate access to education and employment. Our goal is to create an environment where people with albinism can live safely and with dignity.",
            impact: {
              beneficiaries: "45+",
              description: "people with albinism protected and supported",
            },
            activities: [
              "Distribution of sunscreens and equipment",
              "Community awareness campaigns",
              "Specialized school support",
              "Psychological counseling",
              "Advocacy for their rights",
            ],
          },
          {
            title: "Mental Health Support",
            shortDescription:
              "Psychological support services and mental health awareness.",
            fullDescription:
              "As mental health is often neglected in our context, we offer psychological consultation services, group therapy, and community awareness. Our team of trained psychologists supports people with mental disorders and their families. We also work to destigmatize mental illness and promote psychological well-being in the community.",
            impact: {
              beneficiaries: "300+",
              description: "consultations and therapy sessions",
            },
            activities: [
              "Individual psychological consultations",
              "Group therapy",
              "Community awareness",
              "Family support training",
              "Social reintegration of patients",
            ],
          },
        ],
      },
      support: {
        title: "Support Our Programs",
        description:
          "Your support allows us to continue transforming lives. Every contribution, whether financial, material, or in the form of volunteering, has a direct impact on our community.",
        ways: [
          {
            title: "Financial Donation",
            description: "Contribute financially to our programs",
          },
          {
            title: "Material Donation",
            description: "Offer equipment, clothing or supplies",
          },
          {
            title: "Volunteering",
            description: "Share your skills with our team",
          },
        ],
        donateBtn: "Make a Donation",
        volunteerBtn: "Become a Volunteer",
      },
    },
  };

  const t = content[language];

  const programIcons = [Heart, Shield, Users, Star, Lightbulb];
  const programColors = [
    {
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
    },
    {
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
    },
    {
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
  ];

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
                  {language === "fr"
                    ? "Fondation Marie Mwape"
                    : "Marie Mwape Foundation"}
                </div>
                <div className="text-xs text-slate-600 dark:text-gray-400 transition-colors duration-300">
                  {language === "fr"
                    ? "pour le Progrès Social"
                    : "for Social Progress"}
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

              <Button
                className="bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 text-white"
                onClick={() => {
                  const element = document.getElementById("support");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t.nav.support}
              </Button>
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
                <Button
                  className="bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 text-white w-full"
                  onClick={() => {
                    const element = document.getElementById("support");
                    element?.scrollIntoView({ behavior: "smooth" });
                    toggleMobileMenu();
                  }}
                >
                  {t.nav.support}
                </Button>
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

      {/* Programs Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {t.programs.items.map((program, index) => {
              const IconComponent = programIcons[index];
              const colorScheme = programColors[index];

              return (
                <Card
                  key={index}
                  className={`${colorScheme.borderColor} bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Program Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${colorScheme.color} flex items-center justify-center`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                            {program.title}
                          </h2>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge
                              className={`${colorScheme.bgColor} text-slate-700 dark:text-gray-300 border-0`}
                            >
                              {program.impact.beneficiaries}
                            </Badge>
                            <span className="text-sm text-slate-600 dark:text-gray-400">
                              {program.impact.description}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                        {program.fullDescription}
                      </p>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                          {language === "fr"
                            ? "Activités principales :"
                            : "Main Activities:"}
                        </h3>
                        <ul className="space-y-2">
                          {program.activities.map((activity, activityIndex) => (
                            <li
                              key={activityIndex}
                              className="flex items-start space-x-2 text-slate-600 dark:text-gray-300 transition-colors duration-300"
                            >
                              <ChevronRight
                                className={`w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0`}
                              />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Program Image Placeholder */}
                    <div className="relative">
                      <div
                        className={`aspect-video rounded-lg bg-gradient-to-br ${colorScheme.color} opacity-10 flex items-center justify-center`}
                      >
                        <IconComponent className="w-24 h-24 text-gray-400" />
                      </div>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-black/20 to-black/40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <IconComponent className="w-16 h-16 mx-auto mb-4 opacity-80" />
                          <p className="text-lg font-medium">{program.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section
        id="support"
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                {t.support.title}
              </h2>
              <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                {t.support.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {t.support.ways.map((way, index) => (
                <Card
                  key={index}
                  className="border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                      {way.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                      {way.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 text-white px-8 py-4 text-lg font-medium transition-all duration-300"
                >
                  {t.support.donateBtn}
                  <Heart className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-500 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300"
                >
                  {t.support.volunteerBtn}
                  <Users className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
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
                  {language === "fr"
                    ? "Fondation Marie Mwape"
                    : "Marie Mwape Foundation"}
                </h3>
                <p className="text-sm text-slate-300 dark:text-gray-400 transition-colors duration-300">
                  {language === "fr"
                    ? "pour le Progrès Social"
                    : "for Social Progress"}
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
