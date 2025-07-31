"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"))
  }

  const content = {
    fr: {
      nav: {
        about: "À Propos",
        programs: "Programmes",
        impact: "Impact",
        contact: "Contact",
        support: "Soutenir Notre Travail",
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
            description: "Nous offrons un foyer, une éducation et un avenir aux enfants orphelins de Kisangani.",
          },
          {
            title: "Aide aux Personnes Handicapées",
            description: "Programmes d'inclusion et de soutien pour les personnes en situation de handicap.",
          },
          {
            title: "Récupération des Femmes",
            description: "Accompagnement et réinsertion sociale des femmes en situation de détresse.",
          },
          {
            title: "Soutien aux Personnes Albinos",
            description: "Protection, sensibilisation et intégration des personnes albinos dans la société.",
          },
          {
            title: "Aide en Santé Mentale",
            description: "Services de soutien psychologique et de sensibilisation à la santé mentale.",
          },
        ],
      },
      impact: {
        badge: "Notre Impact",
        title: "Histoires de Transformation",
        description: "Découvrez comment nous changeons des vies et créons de l'espoir dans notre communauté.",
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
      blog: {
        badge: "Actualités",
        title: "Dernières Nouvelles",
        description: "Restez informés de nos dernières actions et succès dans la communauté.",
        readMore: "Lire la suite",
        articles: [
          {
            title: "Nouvelle école pour orphelins inaugurée à Kisangani",
            date: "15 Décembre 2024",
            summary:
              "Nous avons inauguré une nouvelle école qui accueillera 100 enfants orphelins de Kisangani, offrant un environnement d'apprentissage moderne et sécurisé.",
          },
          {
            title: "Réinsertion réussie d'une femme souffrant de troubles mentaux",
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
        description: "Nous sommes là pour répondre à vos questions et accueillir votre soutien.",
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
        tagline: "Transformant des vies et créant de l'espoir dans la communauté de Kisangani depuis 2018.",
        programs: "Programmes",
        quickLinks: "Liens Rapides",
        programsList: [
          "Soutien aux Orphelins",
          "Aide aux Handicapés",
          "Récupération des Femmes",
          "Soutien aux Albinos",
          "Santé Mentale",
        ],
        copyright: "© 2024 Fondation Marie Mwape pour le Progrès Social. Tous droits réservés.",
      },
    },
    en: {
      nav: {
        about: "About",
        programs: "Programs",
        impact: "Impact",
        contact: "Contact",
        support: "Support Our Work",
      },
      hero: {
        location: "Kisangani, Democratic Republic of Congo",
        title: "Together for a",
        titleHighlight: "better future",
        description:
          "The Marie Mwape Foundation for Social Progress works to transform lives in Kisangani. We support orphans, people with disabilities, women in distress, people with albinism, and those who need mental health assistance.",
        supportBtn: "Support Our Work",
        learnBtn: "Learn More",
        statsLabel: "Lives Transformed",
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
        description: "We focus our efforts on five key areas to create lasting impact in the Kisangani community.",
        items: [
          {
            title: "Support for Orphans",
            description: "We provide a home, education and future for orphaned children in Kisangani.",
          },
          {
            title: "Assistance for People with Disabilities",
            description: "Inclusion and support programs for people with disabilities.",
          },
          {
            title: "Women's Recovery",
            description: "Support and social reintegration for women in distress.",
          },
          {
            title: "Support for People with Albinism",
            description: "Protection, awareness and integration of people with albinism in society.",
          },
          {
            title: "Mental Health Support",
            description: "Psychological support services and mental health awareness.",
          },
        ],
      },
      impact: {
        badge: "Our Impact",
        title: "Transformation Stories",
        description: "Discover how we change lives and create hope in our community.",
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
            quote: "The foundation gave me a family and an education. Today, I am a teacher and I help other children.",
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
      blog: {
        badge: "News",
        title: "Latest News",
        description: "Stay informed about our latest actions and successes in the community.",
        readMore: "Read more",
        articles: [
          {
            title: "New school for orphans inaugurated in Kisangani",
            date: "December 15, 2024",
            summary:
              "We inaugurated a new school that will welcome 100 orphaned children from Kisangani, providing a modern and secure learning environment.",
          },
          {
            title: "Successful reintegration of a woman with mental health issues",
            date: "October 8, 2024",
            summary:
              "Thanks to our psychological support program, Mama Beatrice has regained her stability and can now provide for her family's needs.",
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
        description: "We are here to answer your questions and welcome your support.",
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
        tagline: "Transforming lives and creating hope in the Kisangani community since 2018.",
        programs: "Programs",
        quickLinks: "Quick Links",
        programsList: ["Orphan Support", "Disability Aid", "Women's Recovery", "Albinism Support", "Mental Health"],
        copyright: "© 2024 Marie Mwape Foundation for Social Progress. All rights reserved.",
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-amber-900">Fondation Marie Mwape</h1>
                <p className="text-sm text-amber-700">pour le Progrès Social</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-amber-800 hover:text-amber-600 transition-colors">
                  {t.nav.about}
                </a>
                <a href="#programs" className="text-amber-800 hover:text-amber-600 transition-colors">
                  {t.nav.programs}
                </a>
                <a href="#impact" className="text-amber-800 hover:text-amber-600 transition-colors">
                  {t.nav.impact}
                </a>
                <a href="#contact" className="text-amber-800 hover:text-amber-600 transition-colors">
                  {t.nav.contact}
                </a>
              </div>

              {/* Language Toggle */}
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="border-amber-300 text-amber-800 hover:bg-amber-50 rounded-full px-3 py-1 text-sm font-medium bg-transparent"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
              </Button>

              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full">
                {t.nav.support}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full px-4 py-2">
                  {t.hero.location}
                </Badge>
                <h1 className="font-serif text-4xl lg:text-6xl font-bold text-amber-900 leading-tight">
                  {t.hero.title}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    {" "}
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                <p className="text-xl text-amber-800 leading-relaxed">{t.hero.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full px-8 py-4 text-lg"
                >
                  {t.hero.supportBtn}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 rounded-full px-8 py-4 text-lg bg-transparent"
                >
                  {t.hero.learnBtn}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Enfants souriants au centre communautaire"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-amber-900">500+</p>
                    <p className="text-amber-700">{t.hero.statsLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">{t.about.badge}</Badge>
                <h2 className="font-serif text-4xl font-bold text-amber-900">{t.about.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{t.about.description1}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{t.about.description2}</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-2xl">
                  <p className="font-bold text-3xl text-amber-900">2018</p>
                  <p className="text-amber-700">{t.about.foundedYear}</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-2xl">
                  <p className="font-bold text-3xl text-orange-900">5</p>
                  <p className="text-orange-700">{t.about.activePrograms}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Marie Mwape Kashimbo, Fondatrice"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-6 text-white shadow-xl">
                <Quote className="w-8 h-8 mb-2" />
                <p className="font-medium">"{t.about.quote}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">{t.programs.badge}</Badge>
            <h2 className="font-serif text-4xl font-bold text-amber-900">{t.programs.title}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.programs.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                color: "from-red-500 to-pink-500",
                bgColor: "bg-red-50",
              },
              {
                icon: Shield,
                color: "from-blue-500 to-indigo-500",
                bgColor: "bg-blue-50",
              },
              {
                icon: Users,
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50",
              },
              {
                icon: Star,
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50",
              },
              {
                icon: Lightbulb,
                color: "from-green-500 to-teal-500",
                bgColor: "bg-green-50",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className={`${program.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center mb-4`}
                  >
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-serif text-xl text-gray-900">{t.programs.items[index].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed">
                    {t.programs.items[index].description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">{t.impact.badge}</Badge>
            <h2 className="font-serif text-4xl font-bold text-amber-900">{t.impact.title}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.impact.description}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {t.impact.stories.map((story, index) => (
              <Card key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-lg">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt={story.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed">"{story.quote}"</blockquote>
                  <div>
                    <p className="font-bold text-amber-900">{story.name}</p>
                    <p className="text-amber-700 text-sm">{story.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {t.impact.stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl">
                <p className="font-bold text-4xl text-amber-900 mb-2">{stat.number}</p>
                <p className="text-amber-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl font-bold">{t.getInvolved.title}</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">{t.getInvolved.description}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-amber-700 hover:bg-amber-50 rounded-full px-8 py-4 text-lg font-semibold"
              >
                {t.getInvolved.donateBtn}
                <Heart className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-700 rounded-full px-8 py-4 text-lg font-semibold bg-transparent"
              >
                {t.getInvolved.volunteerBtn}
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">{t.founder.badge}</Badge>
            <h2 className="font-serif text-4xl font-bold text-amber-900">{t.founder.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Marie Mwape Kashimbo, Fondatrice"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-6 text-white shadow-xl">
                <Quote className="w-8 h-8 mb-2" />
                <p className="font-medium text-sm">"{t.founder.quote}"</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">{t.founder.bio1}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{t.founder.bio2}</p>
                <blockquote className="border-l-4 border-amber-600 pl-6 italic text-amber-800 text-xl">
                  "{t.founder.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">{t.mission.badge}</Badge>
            <h2 className="font-serif text-4xl font-bold text-amber-900">{t.mission.title}</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-white border-0 shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-amber-900">
                    {language === "fr" ? "Français" : "English"}
                  </h3>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">{t.mission.text}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">{t.blog.badge}</Badge>
            <h2 className="font-serif text-4xl font-bold text-amber-900">{t.blog.title}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.blog.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.blog.articles.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.date}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <CardTitle className="font-serif text-lg text-gray-900 leading-tight">{article.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{article.summary}</CardDescription>
                  </div>

                  <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0 mt-4">
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
      <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">{t.contact.badge}</Badge>
            <h2 className="font-serif text-4xl font-bold text-amber-900">{t.contact.title}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.contact.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-900">{t.contact.address}</h3>
                    <p className="text-gray-700">Kisangani, République Démocratique du Congo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-900">Email</h3>
                    <p className="text-gray-700">contact@fondationmariemwape.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-900">WhatsApp</h3>
                    <p className="text-gray-700">+243 XXX XXX XXX</p>
                    <Button className="mt-2 bg-green-600 hover:bg-green-700 text-white rounded-full">
                      {t.contact.whatsappBtn}
                      <MessageCircle className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-amber-900">{t.contact.followUs}</h3>
                <div className="flex space-x-4">
                  <Button size="icon" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button size="icon" className="bg-sky-500 hover:bg-sky-600 text-white rounded-full">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button size="icon" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full">
                    <Instagram className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="font-serif text-2xl font-bold text-amber-900 mb-6">{t.contact.sendMessage}</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.firstName}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder={language === "fr" ? "Votre prénom" : "Your first name"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.lastName}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder={language === "fr" ? "Votre nom" : "Your last name"}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder={language === "fr" ? "votre@email.com" : "your@email.com"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.message}</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder={language === "fr" ? "Votre message..." : "Your message..."}
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl py-3 text-lg">
                  {t.contact.sendBtn}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">Fondation Marie Mwape</h3>
                  <p className="text-sm text-amber-200">pour le Progrès Social</p>
                </div>
              </div>
              <p className="text-amber-200 leading-relaxed">{t.footer.tagline}</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.programs}</h4>
              <ul className="space-y-2 text-amber-200">
                {t.footer.programsList.map((program, index) => (
                  <li key={index}>{program}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-amber-200">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-white transition-colors">
                    {t.nav.programs}
                  </a>
                </li>
                <li>
                  <a href="#impact" className="hover:text-white transition-colors">
                    {t.nav.impact}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-amber-200">
                <p>Kisangani, RDC</p>
                <p>contact@fondationmariemwape.org</p>
                <p>+243 XXX XXX XXX</p>
              </div>
              <div className="flex space-x-3 mt-4">
                <Button size="icon" variant="ghost" className="text-amber-200 hover:text-white hover:bg-amber-800">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-amber-200 hover:text-white hover:bg-amber-800">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-amber-200 hover:text-white hover:bg-amber-800">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-200">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
