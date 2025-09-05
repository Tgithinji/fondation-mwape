"use client";

import type React from "react";

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
  Lightbulb,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  ArrowRight,
  Star,
  Quote,
  Globe,
  Menu,
  X,
  Moon,
  Sun,
  Building,
  Target,
  UserCheck,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { BackToTopButton } from "@/components/back-to-top-button";

export default function HomePage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode, mounted } = useDarkMode();

  // Contact form state
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleContactInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create FormData object for Google Form submission
      const googleFormData = new FormData();

      // Map form fields to Google Form entry IDs
      googleFormData.append("entry.131189408", contactForm.firstName);
      googleFormData.append("entry.857802779", contactForm.lastName);
      googleFormData.append("entry.2004383498", contactForm.email);
      googleFormData.append("entry.484732165", contactForm.message);

      // Submit to Google Form
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfmjPWomcYdWcg_3vufURBFZLVdP_M1hi6BYw24wR7ziunpgA/formResponse",
        {
          method: "POST",
          mode: "no-cors", // Required for Google Forms
          body: googleFormData,
        },
      );

      // Since we're using no-cors mode, we can't check response status
      // Assume success if no error is thrown
      setSubmitStatus("success");

      // Reset form
      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus("error");

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false); // Close mobile menu after clicking link
    }
  };

  const content = {
    fr: {
      nav: {
        about: "À Propos",
        programs: "Programmes",
        governance: "Gouvernance",
        impact: "Impact",
        contact: "Contact",
        support: "Soutenir Notre Travail",
      },
      logo: {
        title: "Fondation Marie Mwape",
        subtitle: "pour le Progrès Social",
      },
      hero: {
        location: "Kisangani, République Démocratique du Congo",
        title: "Ensemble pour un",
        titleHighlight: "avenir meilleur",
        description:
          "La Fondation Marie Mwape pour le Progrès Social œuvre pour transformer des vies à Kisangani. Nous soutenons les orphelins, les personnes handicapées, les femmes en détresse, les personnes albinos et ceux qui ont besoin d'aide en santé mentale.",
        supportBtn: "Soutenir Notre Travail",
        learnBtn: "En Savoir Plus",
        statsLabel: "Vies Transformées",
      },
      about: {
        badge: "Notre Histoire",
        title: "Marie Mwape Kashimbo",
        description1:
          "Fondatrice et présidente de la Fondation Marie Mwape pour le Progrès Social, Marie Mwape Kashimbo est une philanthrope passionnée qui a consacré sa vie à améliorer les conditions de vie des plus vulnérables à Kisangani.",
        description2:
          "Née d'une vision profonde de justice sociale et d'égalité, notre fondation travaille sans relâche pour offrir espoir, dignité et opportunités à ceux qui en ont le plus besoin. Chaque action que nous menons est guidée par l'amour, la compassion et la détermination à créer un changement durable.",
        foundedYear: "Année de Fondation",
        activePrograms: "Programmes Actifs",
        quote: "Chaque vie compte, chaque rêve mérite d'être réalisé.",
      },
      programs: {
        badge: "Nos Programmes",
        title: "Domaines d'Intervention",
        description:
          "Nous concentrons nos efforts sur cinq domaines clés pour créer un impact durable dans la communauté de Kisangani.",
        items: [
          {
            title: "Soutien aux Orphelins",
            description:
              "Nous offrons un foyer, une éducation et un avenir aux enfants orphelins de Kisangani.",
          },
          {
            title: "Aide aux Personnes Handicapées",
            description:
              "Programmes d'inclusion et de soutien pour les personnes en situation de handicap.",
          },
          {
            title: "Récupération des Femmes",
            description:
              "Accompagnement et réinsertion sociale des femmes en situation de détresse.",
          },
          {
            title: "Soutien aux Personnes Albinos",
            description:
              "Protection, sensibilisation et intégration des personnes albinos dans la société.",
          },
          {
            title: "Aide en Santé Mentale",
            description:
              "Services de soutien psychologique et de sensibilisation à la santé mentale.",
          },
        ],
      },
      impact: {
        badge: "Notre Impact",
        title: "Histoires de Transformation",
        description:
          "Découvrez comment nous changeons des vies et créons de l'espoir dans notre communauté.",
        stories: [
          {
            name: "Mama Beatrice",
            role: "Femme Réintégrée",
            quote:
              "Grâce à la Fondation Marie Mwape, j'ai retrouvé ma dignité et je peux maintenant subvenir aux besoins de ma famille.",
          },
          {
            name: "Jean-Claude",
            role: "Ancien Orphelin",
            quote:
              "La fondation m'a donné une famille et une éducation. Aujourd'hui, je suis enseignant et j'aide d'autres enfants.",
          },
          {
            name: "Marie-Claire",
            role: "Bénéficiaire Programme Albinos",
            quote:
              "J'ai appris à m'accepter et à poursuivre mes rêves malgré les défis. Merci pour votre soutien inconditionnel.",
          },
        ],
        stats: [
          { number: "150+", label: "Orphelins Soutenus" },
          { number: "75+", label: "Femmes Réintégrées" },
          { number: "200+", label: "Personnes Handicapées Aidées" },
          { number: "50+", label: "Consultations Santé Mentale" },
        ],
      },
      getInvolved: {
        title: "Rejoignez Notre Mission",
        description:
          "Votre soutien peut transformer des vies. Découvrez comment vous pouvez contribuer à notre mission de progrès social à Kisangani.",
        donateBtn: "Faire un Don",
        volunteerBtn: "Devenir Bénévole",
      },
      founder: {
        badge: "À propos de la Fondatrice",
        title: "À propos de Marie Mwape Kashimbo",
        bio1: "Marie Mwape Kashimbo est une philanthrope passionnée et visionnaire, née à Kisangani. Diplômée en travail social et développement communautaire, elle a consacré sa vie à améliorer les conditions de vie des plus vulnérables de sa communauté.",
        bio2: "Après avoir travaillé pendant plus de 15 ans dans diverses organisations humanitaires, Marie a fondé la Fondation Marie Mwape pour le Progrès Social en 2018, avec la conviction profonde que chaque individu mérite une chance de réaliser son potentiel, peu importe ses circonstances.",
        quote: "Chaque vie compte, chaque rêve mérite d'être réalisé.",
      },
      mission: {
        badge: "Notre Mission",
        title: "Notre Mission",
        text: "Notre mission est de redonner espoir, dignité et autonomie aux populations les plus vulnérables de Kisangani, à travers des actions concrètes et durables dans les domaines de l'éducation, la santé mentale, l'inclusion sociale, et la protection des droits humains.",
      },
      governance: {
        badge: "Gouvernance & Statuts",
        title: "Gouvernance & Statuts",
        description:
          "Notre structure de gouvernance transparente garantit une gestion éthique et responsable de nos ressources et programmes.",
        items: [
          {
            icon: "Building",
            title: "Structure Organisationnelle",
            description:
              "Une gouvernance claire avec un conseil d'administration indépendant, une direction exécutive et des comités spécialisés pour assurer une gestion transparente et efficace.",
          },
          {
            icon: "Target",
            title: "Objectifs Statutaires",
            description:
              "Nos statuts définissent clairement nos objectifs de promotion sociale, d'éducation, de santé mentale et de protection des droits humains dans la région de Kisangani.",
          },
          {
            icon: "UserCheck",
            title: "Responsabilité & Transparence",
            description:
              "Nous nous engageons à maintenir les plus hauts standards de transparence financière et de responsabilité envers nos bénéficiaires et donateurs.",
          },
        ],
      },
      blog: {
        badge: "Actualités",
        title: "Dernières Nouvelles",
        description:
          "Restez informés de nos dernières actions et succès dans la communauté.",
        readMore: "Lire la suite",
        articles: [
          {
            title: "Nouvelle école pour orphelins inaugurée à Kisangani",
            date: "15 Décembre 2024",
            summary:
              "Nous avons inauguré une nouvelle école qui accueillera 100 enfants orphelins de Kisangani, offrant un environnement d'apprentissage moderne et sécurisé.",
          },
          {
            title:
              "Réinsertion réussie d'une femme souffrant de troubles mentaux",
            date: "8 Octobre 2024",
            summary:
              "Grâce à notre programme de soutien psychologique, Mama Beatrice a retrouvé sa stabilité et peut maintenant subvenir aux besoins de sa famille.",
          },
          {
            title: "Programme de formation professionnelle pour femmes",
            date: "1 Septembre 2024",
            summary:
              "Lancement d'un programme de formation en couture et menuiserie pour 50 femmes en détresse, leur offrant de nouvelles opportunités économiques.",
          },
        ],
      },
      contact: {
        badge: "Contact",
        title: "Contactez-Nous",
        description:
          "Nous sommes là pour répondre à vos questions et accueillir votre soutien.",
        address: "Adresse",
        followUs: "Suivez-nous",
        sendMessage: "Envoyez-nous un Message",
        firstName: "Prénom",
        lastName: "Nom",
        message: "Message",
        sendBtn: "Envoyer le Message",
        whatsappBtn: "Nous Contacter sur WhatsApp",
      },
      footer: {
        tagline:
          "Transformant des vies et créant de l'espoir dans la communauté de Kisangani depuis 2018.",
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
    },
    en: {
      nav: {
        about: "About",
        programs: "Programs",
        governance: "Governance",
        impact: "Impact",
        contact: "Contact",
        support: "Support Our Work",
      },
      logo: {
        title: "Marie Mwape Foundation",
        subtitle: "for Social Progress",
      },
      hero: {
        location: "Kisangani, Democratic Republic of Congo",
        title: "Together for a",
        titleHighlight: "better future",
        description:
          "The Marie Mwape Foundation for Social Progress works to transform lives in Kisangani. We support orphans, people with disabilities, women in distress, people with albinism, and those who need mental health assistance.",
        supportBtn: "Support Our Work",
        learnBtn: "Learn More",
        statsLabel: "Lives Transform",
      },
      about: {
        badge: "Our Story",
        title: "Marie Mwape Kashimbo",
        description1:
          "Founder and president of the Marie Mwape Foundation for Social Progress, Marie Mwape Kashimbo is a passionate philanthropist who has dedicated her life to improving the living conditions of the most vulnerable in Kisangani.",
        description2:
          "Born from a deep vision of social justice and equality, our foundation works tirelessly to offer hope, dignity and opportunities to those who need it most. Every action we take is guided by love, compassion and determination to create lasting change.",
        foundedYear: "Year Founded",
        activePrograms: "Active Programs",
        quote: "Every life matters, every dream deserves to be realized.",
      },
      programs: {
        badge: "Our Programs",
        title: "Areas of Intervention",
        description:
          "We focus our efforts on five key areas to create lasting impact in the Kisangani community.",
        items: [
          {
            title: "Support for Orphans",
            description:
              "We provide a home, education and future for orphaned children in Kisangani.",
          },
          {
            title: "Assistance for People with Disabilities",
            description:
              "Inclusion and support programs for people with disabilities.",
          },
          {
            title: "Women's Recovery",
            description:
              "Support and social reintegration for women in distress.",
          },
          {
            title: "Support for People with Albinism",
            description:
              "Protection, awareness and integration of people with albinism in society.",
          },
          {
            title: "Mental Health Support",
            description:
              "Psychological support services and mental health awareness.",
          },
        ],
      },
      impact: {
        badge: "Our Impact",
        title: "Transformation Stories",
        description:
          "Discover how we change lives and create hope in our community.",
        stories: [
          {
            name: "Mama Beatrice",
            role: "Reintegrated Woman",
            quote:
              "Thanks to the Marie Mwape Foundation, I have regained my dignity and can now provide for my family's needs.",
          },
          {
            name: "Jean-Claude",
            role: "Former Orphan",
            quote:
              "The foundation gave me a family and an education. Today, I am a teacher and I help other children.",
          },
          {
            name: "Marie-Claire",
            role: "Albinism Program Beneficiary",
            quote:
              "I learned to accept myself and pursue my dreams despite the challenges. Thank you for your unconditional support.",
          },
        ],
        stats: [
          { number: "150+", label: "Orphans Supported" },
          { number: "75+", label: "Women Reintegrated" },
          { number: "200+", label: "People with Disabilities Helped" },
          { number: "50+", label: "Mental Health Consultations" },
        ],
      },
      getInvolved: {
        title: "Join Our Mission",
        description:
          "Your support can transform lives. Discover how you can contribute to our mission of social progress in Kisangani.",
        donateBtn: "Make a Donation",
        volunteerBtn: "Become a Volunteer",
      },
      founder: {
        badge: "About the Founder",
        title: "About Marie Mwape Kashimbo",
        bio1: "Marie Mwape Kashimbo is a passionate and visionary philanthropist, born in Kisangani. With a degree in social work and community development, she has dedicated her life to improving the living conditions of the most vulnerable in her community.",
        bio2: "After working for over 15 years in various humanitarian organizations, Marie founded the Marie Mwape Foundation for Social Progress in 2018, with the deep conviction that every individual deserves a chance to realize their potential, regardless of their circumstances.",
        quote: "Every life matters, every dream deserves to be realized.",
      },
      mission: {
        badge: "Our Mission",
        title: "Our Mission",
        text: "Our mission is to restore hope, dignity, and empowerment to the most vulnerable communities in Kisangani through sustainable and meaningful action in education, mental health, social inclusion, and human rights protection.",
      },
      governance: {
        badge: "Governance & Statutes",
        title: "Governance & Statutes",
        description:
          "Our transparent governance structure ensures ethical and responsible management of our resources and programs.",
        items: [
          {
            icon: "Building",
            title: "Organizational Structure",
            description:
              "Clear governance with an independent board of directors, executive management, and specialized committees to ensure transparent and efficient management.",
          },
          {
            icon: "Target",
            title: "Statutory Objectives",
            description:
              "Our statutes clearly define our objectives of social promotion, education, mental health, and human rights protection in the Kisangani region.",
          },
          {
            icon: "UserCheck",
            title: "Accountability & Transparency",
            description:
              "We are committed to maintaining the highest standards of financial transparency and accountability to our beneficiaries and donors.",
          },
        ],
      },
      blog: {
        badge: "News",
        title: "Latest News",
        description:
          "Stay informed about our latest actions and successes in the community.",
        readMore: "Read more",
        articles: [
          {
            title: "New school for orphans inaugurated in Kisangani",
            date: "December 15, 2024",
            summary:
              "We inaugurated a new school that will welcome 100 orphaned children from Kisangani, providing a modern and secure learning environment.",
          },
          {
            title:
              "Successful reintegration of a woman with mental health issues",
            date: "October 8, 2024",
            summary:
              "Thanks to our psychological support program, Mama Beatrice has regained her stability and can now provide for my family's needs.",
          },
          {
            title: "Professional training program for women",
            date: "September 1, 2024",
            summary:
              "Launch of a sewing and carpentry training program for 50 women in distress, offering them new economic opportunities.",
          },
        ],
      },
      contact: {
        badge: "Contact",
        title: "Contact Us",
        description:
          "We are here to answer your questions and welcome your support.",
        address: "Address",
        followUs: "Follow Us",
        sendMessage: "Send Us a Message",
        firstName: "First Name",
        lastName: "Last Name",
        message: "Message",
        sendBtn: "Send Message",
        whatsappBtn: "Contact Us on WhatsApp",
      },
      footer: {
        tagline:
          "Transforming lives and creating hope in the Kisangani community since 2018.",
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
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40 border-b border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo Section - Always visible */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="font-serif text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-300">
                  <span className="block">{t.logo.title}</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 transition-colors duration-300">
                  {t.logo.subtitle}
                </p>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium text-sm"
              >
                {t.nav.about}
              </a>
              <a
                href="#programs"
                onClick={(e) => handleSmoothScroll(e, "programs")}
                className="text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium text-sm"
              >
                {t.nav.programs}
              </a>
              <a
                href="#governance"
                onClick={(e) => handleSmoothScroll(e, "governance")}
                className="text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium text-sm"
              >
                {t.nav.governance}
              </a>
              <a
                href="#impact"
                onClick={(e) => handleSmoothScroll(e, "impact")}
                className="text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium text-sm"
              >
                {t.nav.impact}
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium text-sm"
              >
                {t.nav.contact}
              </a>
            </div>

            {/* Desktop Controls - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-3">
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

              {/* Support Button */}
              <Button
                className="bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 text-white rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
                onClick={(e) => handleSmoothScroll(e, "get-involved")}
              >
                {t.nav.support}
              </Button>
            </div>

            {/* Mobile Hamburger Menu Button - Only visible on mobile */}
            <div className="md:hidden">
              <Button
                onClick={toggleMobileMenu}
                variant="ghost"
                size="sm"
                className="p-2 text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
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

          {/* Mobile Menu Dropdown - Only visible when hamburger is clicked */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Navigation Links */}
                <a
                  href="#about"
                  className="block px-3 py-2 text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-md transition-colors font-medium"
                  onClick={(e) => handleSmoothScroll(e, "about")}
                >
                  {t.nav.about}
                </a>
                <a
                  href="#programs"
                  className="block px-3 py-2 text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-md transition-colors font-medium"
                  onClick={(e) => handleSmoothScroll(e, "programs")}
                >
                  {t.nav.programs}
                </a>
                <a
                  href="#governance"
                  className="block px-3 py-2 text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-md transition-colors font-medium"
                  onClick={(e) => handleSmoothScroll(e, "governance")}
                >
                  {t.nav.governance}
                </a>
                <a
                  href="#impact"
                  className="block px-3 py-2 text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-md transition-colors font-medium"
                  onClick={(e) => handleSmoothScroll(e, "impact")}
                >
                  {t.nav.impact}
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-md transition-colors font-medium"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                >
                  {t.nav.contact}
                </a>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-600 my-3"></div>

                {/* Mobile Controls */}
                <div className="space-y-3 px-3">
                  {/* Support Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 text-white rounded-lg py-3 text-sm font-medium transition-all duration-300"
                    onClick={(e) => handleSmoothScroll(e, "get-involved")}
                  >
                    {t.nav.support}
                  </Button>

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
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-2 font-medium transition-colors duration-300">
                  {t.hero.location}
                </Badge>
                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-300">
                  {t.hero.title}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400">
                    {" "}
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {t.hero.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 text-white rounded-lg px-8 py-4 text-lg font-medium transition-all duration-300"
                  onClick={(e) => handleSmoothScroll(e, "get-involved")}
                >
                  {t.hero.supportBtn}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-800 rounded-lg px-8 py-4 text-lg font-medium bg-transparent transition-colors duration-300"
                >
                  {t.hero.learnBtn}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Enfants souriants au centre communautaire"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-slate-900 dark:text-white transition-colors duration-300">
                      500+
                    </p>
                    <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                      {t.hero.statsLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-2 font-medium transition-colors duration-300">
                  {t.about.badge}
                </Badge>
                <h2 className="font-serif text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                  {t.about.title}
                </h2>
                <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {t.about.description1}
                </p>
                <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {t.about.description2}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                  <CardContent className="text-center p-6">
                    <p className="font-bold text-3xl text-indigo-600 dark:text-indigo-400 mb-2 transition-colors duration-300">
                      2018
                    </p>
                    <p className="text-slate-600 dark:text-gray-300 font-medium transition-colors duration-300">
                      {t.about.foundedYear}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                  <CardContent className="text-center p-6">
                    <p className="font-bold text-3xl text-sky-500 dark:text-sky-400 mb-2 transition-colors duration-300">
                      5
                    </p>
                    <p className="text-slate-600 dark:text-gray-300 font-medium transition-colors duration-300">
                      {t.about.activePrograms}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Marie Mwape Kashimbo, Fondatrice"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-xl p-6 text-white shadow-xl">
                <Quote className="w-8 h-8 mb-2" />
                <p className="font-medium text-sm">"{t.about.quote}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-2 font-medium transition-colors duration-300">
              {t.programs.badge}
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.programs.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.programs.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                color: "from-red-500 to-pink-500",
                bgColor: "bg-red-50 dark:bg-red-900/20",
                borderColor: "border-red-200 dark:border-red-800",
              },
              {
                icon: Shield,
                color: "from-blue-500 to-indigo-500",
                bgColor: "bg-blue-50 dark:bg-blue-900/20",
                borderColor: "border-blue-200 dark:border-blue-800",
              },
              {
                icon: Users,
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50 dark:bg-purple-900/20",
                borderColor: "border-purple-200 dark:border-purple-800",
              },
              {
                icon: Star,
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
                borderColor: "border-yellow-200 dark:border-yellow-800",
              },
              {
                icon: Lightbulb,
                color: "from-green-500 to-teal-500",
                bgColor: "bg-green-50 dark:bg-green-900/20",
                borderColor: "border-green-200 dark:border-green-800",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className={`${program.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center mb-4`}
                  >
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-serif text-xl text-slate-900 dark:text-white transition-colors duration-300">
                    {t.programs.items[index].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-gray-300 text-center leading-relaxed transition-colors duration-300 mb-6">
                    {t.programs.items[index].description}
                  </CardDescription>
                  <div className="text-center">
                    <a
                      href="/programs"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-sky-400 text-white text-sm font-medium rounded-lg hover:from-indigo-600 hover:to-sky-500 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {language === "fr" ? "En Savoir Plus" : "Learn More"}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        id="impact"
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-2 font-medium transition-colors duration-300">
              {t.impact.badge}
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.impact.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.impact.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {t.impact.stories.map((story, index) => (
              <Card
                key={index}
                className="border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt={story.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-700 shadow-lg transition-colors duration-300"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <blockquote className="text-slate-600 dark:text-gray-300 italic leading-relaxed transition-colors duration-300">
                    "{story.quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white transition-colors duration-300">
                      {story.name}
                    </p>
                    <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">
                      {story.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {t.impact.stats.map((stat, index) => (
              <Card
                key={index}
                className="border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <CardContent className="text-center p-6">
                  <p className="font-bold text-4xl text-indigo-600 dark:text-indigo-400 mb-2 transition-colors duration-300">
                    {stat.number}
                  </p>
                  <p className="text-slate-600 dark:text-gray-300 font-medium transition-colors duration-300">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section
        id="get-involved"
        className="py-20 bg-gradient-to-r from-indigo-500 to-sky-400 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl font-bold">
              {t.getInvolved.title}
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              {t.getInvolved.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-lg px-8 py-4 text-lg font-medium transition-all duration-300"
                >
                  {t.getInvolved.donateBtn}
                  <Heart className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 rounded-lg px-8 py-4 text-lg font-medium bg-transparent transition-all duration-300"
                >
                  {t.getInvolved.volunteerBtn}
                  <Users className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-2 font-medium transition-colors duration-300">
              {t.founder.badge}
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.founder.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Marie Mwape Kashimbo, Fondatrice"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-xl p-6 text-white shadow-xl">
                <Quote className="w-8 h-8 mb-2" />
                <p className="font-medium text-sm">"{t.founder.quote}"</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {t.founder.bio1}
                </p>
                <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {t.founder.bio2}
                </p>
                <blockquote className="border-l-4 border-indigo-500 dark:border-indigo-400 pl-6 italic text-indigo-700 dark:text-indigo-300 text-xl transition-colors duration-300">
                  "{t.founder.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-2 font-medium transition-colors duration-300">
              {t.mission.badge}
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.mission.title}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                    {language === "fr" ? "Français" : "English"}
                  </h3>
                </div>
                <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {t.mission.text}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance & Statutes Section */}
      <section
        id="governance"
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-2 font-medium transition-colors duration-300">
              {t.governance.badge}
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.governance.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.governance.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.governance.items.map((item, index) => {
              const IconComponent =
                item.icon === "Building"
                  ? Building
                  : item.icon === "Target"
                    ? Target
                    : UserCheck;
              return (
                <Card
                  key={index}
                  className="border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/governance"
              className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-700 transition"
            >
              {language === "fr" ? "Voir les détails" : "View Details"}
              <ChevronRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-2 font-medium transition-colors duration-300">
              {t.blog.badge}
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.blog.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.blog.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.blog.articles.map((article, index) => (
              <Card
                key={index}
                className="border-slate-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="secondary"
                      className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs transition-colors duration-300"
                    >
                      {article.date}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <CardTitle className="font-serif text-lg text-slate-900 dark:text-white leading-tight transition-colors duration-300">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {article.summary}
                    </CardDescription>
                  </div>

                  <Button
                    variant="ghost"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 p-0 mt-4 transition-colors duration-300"
                  >
                    {t.blog.readMore}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-2 font-medium transition-colors duration-300">
              {t.contact.badge}
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.contact.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.contact.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <Card className="border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                          {t.contact.address}
                        </h3>
                        <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                          Kisangani, République Démocratique du Congo
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                          Email
                        </h3>
                        <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                          contact@fondationmariemwape.org
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                          WhatsApp
                        </h3>
                        <p className="text-slate-600 dark:text-gray-300 mb-3 transition-colors duration-300">
                          +243 XXX XXX XXX
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300">
                          {t.contact.whatsappBtn}
                          <MessageCircle className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white transition-colors duration-300">
                  {t.contact.followUs}
                </h3>
                <div className="flex space-x-4">
                  <Button
                    size="icon"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="border-slate-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                  {t.contact.sendMessage}
                </h3>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      {language === "fr"
                        ? "✅ Votre message a été envoyé avec succès ! Nous vous répondrons bientôt."
                        : "✅ Your message has been sent successfully! We will respond to you soon."}
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 font-medium">
                      {language === "fr"
                        ? "❌ Une erreur s'est produite lors de l'envoi. Veuillez réessayer."
                        : "❌ An error occurred while sending. Please try again."}
                    </p>
                  </div>
                )}

                {/* Loading Message */}
                {isSubmitting && (
                  <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-lg">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        {language === "fr"
                          ? "Envoi de votre message en cours..."
                          : "Sending your message..."}
                      </p>
                    </div>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                        {t.contact.firstName}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={contactForm.firstName}
                        onChange={handleContactInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder={
                          language === "fr" ? "Votre prénom" : "Your first name"
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                        {t.contact.lastName}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={contactForm.lastName}
                        onChange={handleContactInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder={
                          language === "fr" ? "Votre nom" : "Your last name"
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={
                        language === "fr" ? "votre@email.com" : "your@email.com"
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      {t.contact.message}
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={
                        language === "fr"
                          ? "Votre message..."
                          : "Your message..."
                      }
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg py-3 text-lg font-medium transition-all duration-300"
                  >
                    {isSubmitting
                      ? language === "fr"
                        ? "Envoi en cours..."
                        : "Sending..."
                      : t.contact.sendBtn}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-gray-950 text-white py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">
                    {t.logo.title}
                  </h3>
                  <p className="text-sm text-slate-300 dark:text-gray-400 transition-colors duration-300">
                    {t.logo.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-slate-300 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.programs}</h4>
              <ul className="space-y-2 text-slate-300 dark:text-gray-400 transition-colors duration-300">
                {t.footer.programsList.map((program, index) => (
                  <li key={index}>{program}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-slate-300 dark:text-gray-400 transition-colors duration-300">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleSmoothScroll(e, "about")}
                    className="hover:text-white transition-colors"
                  >
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    onClick={(e) => handleSmoothScroll(e, "programs")}
                    className="hover:text-white transition-colors"
                  >
                    {t.nav.programs}
                  </a>
                </li>
                <li>
                  <a
                    href="#impact"
                    onClick={(e) => handleSmoothScroll(e, "impact")}
                    className="hover:text-white transition-colors"
                  >
                    {t.nav.impact}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "contact")}
                    className="hover:text-white transition-colors"
                  >
                    {t.nav.contact}
                  </a>
                </li>
                <li>
                  <a
                    href="#governance"
                    onClick={(e) => handleSmoothScroll(e, "governance")}
                    className="hover:text-white transition-colors"
                  >
                    {t.nav.governance}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-slate-300 dark:text-gray-400 transition-colors duration-300">
                <p>Kisangani, RDC</p>
                <p>contact@fondationmariemwape.org</p>
                <p>+243 XXX XXX XXX</p>
              </div>
              <div className="flex space-x-3 mt-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-slate-300 dark:text-gray-400 hover:text-white hover:bg-slate-800 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-slate-300 dark:text-gray-400 hover:text-white hover:bg-slate-800 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-slate-300 dark:text-gray-400 hover:text-white hover:bg-slate-800 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 dark:border-gray-800 mt-12 pt-8 text-center text-slate-400 dark:text-gray-500 transition-colors duration-300">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}
