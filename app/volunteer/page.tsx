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
  Users,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  Clock,
  MapPin,
  Star,
  BookOpen,
  Stethoscope,
  Briefcase,
} from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTopButton } from "@/components/back-to-top-button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/ui/logo";

export default function VolunteerPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode, mounted } = useDarkMode();
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    availability: "",
    skills: "",
    motivation: "",
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create FormData object for Google Form submission
      const googleFormData = new FormData();

      // Map form fields to Google Form entry IDs (you'll need to inspect the Google Form to get these)
      // These are placeholder entry IDs - replace with actual ones from your Google Form
      googleFormData.append("entry.28324842", formData.fullName); // Replace with actual entry ID
      googleFormData.append("entry.820610477", formData.email); // Replace with actual entry ID
      googleFormData.append("entry.1081040339", formData.phone); // Replace with actual entry ID
      googleFormData.append("entry.2066402697", formData.availability); // Replace with actual entry ID
      googleFormData.append("entry.1910859079", formData.skills); // Replace with actual entry ID
      googleFormData.append("entry.1376523727", formData.motivation); // Replace with actual entry ID

      // Submit to Google Form
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeHqKMt2d-vEHzfX5NROtBJIQCLYWw4ba_vmoe6Lxw7MsPnLg/formResponse",
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
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        availability: "",
        skills: "",
        motivation: "",
      });

      // Redirect to thank you page after a short delay
      setTimeout(() => {
        router.push("/volunteer/thank-you");
      }, 1500);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
        badge: "Devenir Bénévole",
        title: "Rejoignez Notre Équipe",
        description:
          "Partagez vos compétences et votre temps pour transformer des vies à Kisangani. Nous recherchons des personnes passionnées pour soutenir les albinos, les veuves, les mères célibataires, les enfants sans-abri, les personnes handicapées et les jeunes athlètes.",
      },
      impact: {
        title: "Votre Impact en Tant que Bénévole",
        description: "Découvrez comment votre temps transforme des vies",
        stats: [
          { number: "50+", label: "Bénévoles actifs", icon: "Users" },
          { number: "1000+", label: "Heures de service", icon: "Clock" },
          { number: "200+", label: "Vies touchées", icon: "Heart" },
          { number: "5", label: "Programmes soutenus", icon: "Star" },
        ],
      },
      opportunities: {
        title: "Opportunités de Bénévolat",
        description:
          "Trouvez le rôle qui correspond à vos compétences et votre passion",
        roles: [
          {
            title: "Éducation et Tutorat",
            description:
              "Aidez les enfants orphelins et défavorisés avec leurs études",
            icon: "BookOpen",
            requirements: [
              "Niveau d'études secondaires minimum",
              "Patience avec les enfants",
              "Disponibilité 2-3 heures/semaine",
            ],
            commitment: "Flexible",
          },
          {
            title: "Soutien Médical",
            description:
              "Assistez notre équipe médicale pour les soins aux personnes handicapées",
            icon: "Stethoscope",
            requirements: [
              "Formation médicale ou paramédicale",
              "Expérience en soins de santé",
              "Certification valide",
            ],
            commitment: "10-15 heures/mois",
          },
          {
            title: "Formation Professionnelle",
            description:
              "Enseignez des compétences professionnelles aux femmes en détresse",
            icon: "Briefcase",
            requirements: [
              "Expertise dans un métier spécifique",
              "Capacité à transmettre des connaissances",
              "Engagement à long terme",
            ],
            commitment: "1-2 jours/semaine",
          },
          {
            title: "Accompagnement Psychologique",
            description: "Offrez un soutien émotionnel aux bénéficiaires",
            icon: "Heart",
            requirements: [
              "Formation en psychologie/counseling",
              "Empathie et écoute active",
              "Confidentialité stricte",
            ],
            commitment: "Selon disponibilité",
          },
          {
            title: "Sensibilisation Communautaire",
            description:
              "Aidez à sensibiliser sur les droits des personnes albinos",
            icon: "Users",
            requirements: [
              "Bonnes compétences de communication",
              "Connaissance des enjeux sociaux",
              "Capacité à parler en public",
            ],
            commitment: "Événements ponctuels",
          },
          {
            title: "Support Logistique",
            description:
              "Aidez avec l'organisation d'événements et la coordination",
            icon: "MapPin",
            requirements: [
              "Compétences organisationnelles",
              "Flexibilité d'horaires",
              "Esprit d'équipe",
            ],
            commitment: "Selon les besoins",
          },
        ],
      },
      benefits: {
        title: "Pourquoi Devenir Bénévole ?",
        items: [
          "Faire une différence tangible dans votre communauté",
          "Développer de nouvelles compétences et expériences",
          "Rencontrer des personnes partageant les mêmes valeurs",
          "Recevoir une formation et un encadrement",
          "Obtenir des certificats de bénévolat",
          "Participer à des événements exclusifs pour bénévoles",
        ],
      },
      application: {
        title: "Postulez Maintenant",
        description: "Rejoignez notre équipe de bénévoles dévoués",
        form: {
          fullName: "Nom complet",
          email: "Adresse email",
          phone: "Numéro de téléphone",
          skills: "Compétences et expériences",
          availability: "Disponibilité",
          motivation: "Pourquoi voulez-vous être bénévole ?",
          submit: "Envoyer ma Candidature",
        },
      },
      contact: {
        title: "Besoin de Plus d'Informations ?",
        description: "Contactez notre coordinateur des bénévoles",
        whatsapp: "Contactez-nous sur WhatsApp",
        email: "Envoyez-nous un email",
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
        badge: "Become a Volunteer",
        title: "Join Our Team",
        description:
          "Share your skills and time to transform lives in Kisangani. We're looking for passionate people to support people with albinism, widows, single mothers, homeless children, people with disabilities, and young athletes.",
      },
      impact: {
        title: "Your Impact as a Volunteer",
        description: "Discover how your time transforms lives",
        stats: [
          { number: "50+", label: "Active volunteers", icon: "Users" },
          { number: "1000+", label: "Service hours", icon: "Clock" },
          { number: "200+", label: "Lives touched", icon: "Heart" },
          { number: "5", label: "Programs supported", icon: "Star" },
        ],
      },
      opportunities: {
        title: "Volunteer Opportunities",
        description: "Find the role that matches your skills and passion",
        roles: [
          {
            title: "Education and Tutoring",
            description:
              "Help orphaned and disadvantaged children with their studies",
            icon: "BookOpen",
            requirements: [
              "Minimum high school education",
              "Patience with children",
              "Availability 2-3 hours/week",
            ],
            commitment: "Flexible",
          },
          {
            title: "Medical Support",
            description:
              "Assist our medical team in caring for people with disabilities",
            icon: "Stethoscope",
            requirements: [
              "Medical or paramedical training",
              "Healthcare experience",
              "Valid certification",
            ],
            commitment: "10-15 hours/month",
          },
          {
            title: "Professional Training",
            description: "Teach professional skills to women in distress",
            icon: "Briefcase",
            requirements: [
              "Expertise in a specific trade",
              "Ability to transfer knowledge",
              "Long-term commitment",
            ],
            commitment: "1-2 days/week",
          },
          {
            title: "Psychological Support",
            description: "Provide emotional support to beneficiaries",
            icon: "Heart",
            requirements: [
              "Psychology/counseling training",
              "Empathy and active listening",
              "Strict confidentiality",
            ],
            commitment: "According to availability",
          },
          {
            title: "Community Awareness",
            description:
              "Help raise awareness about the rights of people with albinism",
            icon: "Users",
            requirements: [
              "Good communication skills",
              "Knowledge of social issues",
              "Public speaking ability",
            ],
            commitment: "Occasional events",
          },
          {
            title: "Logistics Support",
            description: "Help with event organization and coordination",
            icon: "MapPin",
            requirements: [
              "Organizational skills",
              "Schedule flexibility",
              "Team spirit",
            ],
            commitment: "As needed",
          },
        ],
      },
      benefits: {
        title: "Why Become a Volunteer?",
        items: [
          "Make a tangible difference in your community",
          "Develop new skills and experiences",
          "Meet people who share the same values",
          "Receive training and guidance",
          "Get volunteer certificates",
          "Participate in exclusive volunteer events",
        ],
      },
      application: {
        title: "Apply Now",
        description: "Join our team of dedicated volunteers",
        form: {
          fullName: "Full name",
          email: "Email address",
          phone: "Phone number",
          skills: "Skills and experience",
          availability: "Availability",
          motivation: "Why do you want to volunteer?",
          submit: "Submit My Application",
        },
      },
      contact: {
        title: "Need More Information?",
        description: "Contact our volunteer coordinator",
        whatsapp: "Contact us on WhatsApp",
        email: "Send us an email",
      },
    },
  };

  const t = content[language];

  const getIcon = (iconName: string) => {
    const iconMap: Record<
      string,
      React.ComponentType<{ className?: string }>
    > = {
      Users,
      Clock,
      Heart,
      Star,
      BookOpen,
      Stethoscope,
      Briefcase,
      MapPin,
    };
    return iconMap[iconName] || Heart;
  };

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
                {t.nav.volunteer}
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
                  {t.nav.volunteer}
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
            {t.impact.stats.map((stat, index) => {
              const IconComponent = getIcon(stat.icon);
              return (
                <Card
                  key={index}
                  className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-center hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                      {stat.number}
                    </div>
                    <p className="text-slate-600 dark:text-gray-300">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.opportunities.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.opportunities.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.opportunities.roles.map((role, index) => {
              const IconComponent = getIcon(role.icon);

              return (
                <Card
                  key={index}
                  className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl text-slate-900 dark:text-white transition-colors duration-300 text-center">
                      {role.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-gray-300 transition-colors duration-300 text-center">
                      {role.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                          {language === "fr" ? "Exigences :" : "Requirements:"}
                        </h4>
                        <ul className="space-y-2">
                          {role.requirements.map((req, reqIndex) => (
                            <li
                              key={reqIndex}
                              className="flex items-start space-x-2"
                            >
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-600 dark:text-gray-300">
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-slate-200 dark:border-gray-600">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            {language === "fr" ? "Engagement :" : "Commitment:"}
                          </span>
                          <Badge className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-0">
                            {role.commitment}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.benefits.title}
            </h2>
          </div>

          <Card className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {t.benefits.items.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.application.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 transition-colors duration-300">
              {t.application.description}
            </p>
          </div>

          <Card className="border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl">
            <CardContent className="p-8">
              {isSubmitting && (
                <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-lg">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    <p className="text-blue-800 dark:text-blue-200 font-medium">
                      {language === "fr"
                        ? "Envoi de votre candidature en cours..."
                        : "Submitting your application..."}
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    {language === "fr"
                      ? "Une erreur s'est produite lors de l'envoi. Veuillez réessayer."
                      : "An error occurred while submitting. Please try again."}
                  </p>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      {t.application.form.fullName}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      {t.application.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      {t.application.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      {t.application.form.availability}
                    </label>
                    <input
                      type="text"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    {t.application.form.skills}
                  </label>
                  <textarea
                    rows={4}
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    {t.application.form.motivation}
                  </label>
                  <textarea
                    rows={4}
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white transition-colors duration-300"
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-12 py-4 text-lg font-medium transition-all duration-300"
                  >
                    <Users className="w-5 h-5 mr-3" />
                    {isSubmitting
                      ? language === "fr"
                        ? "Envoi en cours..."
                        : "Submitting..."
                      : t.application.form.submit}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              {t.contact.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              {t.contact.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300"
              >
                {t.contact.whatsapp}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 px-8 py-3 text-lg font-medium transition-all duration-300"
              >
                {t.contact.email}
              </Button>
            </div>
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
