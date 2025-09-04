"use client";

import { useState, useEffect } from "react";
import {
  Building,
  Target,
  Users,
  Scale,
  Banknote,
  Network,
  Shield,
  ScrollText,
  ChevronRight,
  Landmark,
  CheckCircle,
  Heart,
  Globe,
  UserCheck,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTopButton } from "@/components/back-to-top-button";

export default function GovernancePage() {
  // Local language toggle
  const [language, setLanguage] = useState<"en" | "fr">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Initialize dark mode from localStorage
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = stored === "true" || (stored === null && prefersDark);

    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const content = {
    en: {
      hero: {
        title: "Governance & Statutes",
        description:
          "The Fondation Marie Mwape for Social Progress operates under clear statutes and principles of governance, ensuring transparency, accountability, and effective leadership in service of social progress.",
      },
      objectives: {
        badge: "Objectives",
        title: "Our Statutory Objectives",
        intro:
          "We support vulnerable groups and promote dignity, inclusion, and well-being across the DRC, with a focus on Tshopo Province.",
        targets: [
          "Persons with physical or mental disabilities",
          "Albinos",
          "Widows and single mothers",
          "Homeless children",
          "Young athletes",
          "Blind persons",
        ],
      },
      membership: {
        badge: "Membership",
        title: "Membership Categories & Duties",
        intro:
          "Membership is open to individuals and organizations who share our ideals and comply with our statutes.",
        cards: [
          {
            title: "Founding Members",
            body: "Initiators listed in the constitutive declaration. May serve in organs if they meet active member conditions.",
            icon: "Landmark",
          },
          {
            title: "Active Members",
            body: "Adhere to the statutes and regularly pay dues (5,000 CDF/month). Enjoy voting rights and may hold positions.",
            icon: "Users",
          },
          {
            title: "Honorary Members",
            body: "Persons or entities offering moral, material, or financial support; attend events without deliberative vote.",
            icon: "Shield",
          },
          {
            title: "Benefactor Members",
            body: "Supporters who encourage others and assist materially, morally, or financially to achieve the foundation's goals.",
            icon: "Network",
          },
        ],
        rights:
          "Members in good standing have the right to participate in benefits, vote, and serve in leadership bodies.",
        obligations:
          "Respect the statutes, pay contributions, and actively participate in meetings and activities.",
      },
      governance: {
        badge: "Governance",
        title: "Bodies & Functioning",
        intro:
          "Our governance is led by the Founding Member and structured to ensure accountability, strategic guidance, and effective execution.",
        sections: [
          {
            title: "Founding Member",
            body: "The sole Founding Member is Mrs. Marie Mwape Kashimbo. She sets the vision and supports the foundation materially and financially.",
            extra:
              "Guardian of the foundation's mission and philosophy, providing oversight and strategic direction.",
          },
          {
            title: "Board of Directors",
            body: "Decision-making, management, and orientation organ. Ensures objectives are respected, supports the program of activities, mobilizes resources, and resolves disputes.",
            extra:
              "Chaired by Dr. YANGONGO Fabien; members are appointed by the Founding Member. Mandate: 3 years, renewable. Meets monthly or as needed.",
          },
          {
            title: "Management Committee",
            body: "Executive body implementing the action program. Composed of President, Vice-Presidents, and Financial Secretary; members chosen among active members in good standing.",
            extra:
              "Mandate: 2 years, renewable. Can end by death, resignation, or revocation by the Board after advice.",
          },
          {
            title: "Advisors & Companions",
            body: "Representatives across communes and sectors who regroup active members, collect contributions, and support operations.",
            extra:
              "Areas include: Logistics, Legal, Protocol, Security, Gender/Family/Child, Youth.",
          },
        ],
      },
      finance: {
        badge: "Finance",
        title: "Financial Resources & Controls",
        description:
          "Our foundation is funded through diverse sources to ensure sustainability:",
        items: [
          "Members' contributions",
          "Donations and legacies",
          "Funds from activities",
          "Public and private subsidies",
        ],
        note: "Resources are used exclusively to achieve the foundation's objectives. 'Let us not love with words or speech but with actions and in truth.' (1 John 3:18)",
        control:
          "The President controls finances; accounts require joint signature of the President and the General Treasurer.",
      },
      org: {
        badge: "Structure",
        title: "Organizational Hierarchy",
        description:
          "Our organizational structure ensures clear lines of authority, accountability, and effective coordination across all levels.",
        cards: [
          {
            title: "Founding Member",
            name: "Marie Mwape Kashimbo",
            description:
              "Guardian of the foundation's vision and mission, providing strategic oversight and foundational support.",
            level: 1,
          },
          {
            title: "Assistant to Founding Member",
            name: "",
            description:
              "Provides direct support to the Founding Member in strategic planning and organizational oversight.",
            level: 2,
          },
          {
            title: "President of the Board of Directors",
            name: "Dr. YANGONGO Fabien",
            description:
              "Leads the Board in strategic decision-making, governance oversight, and organizational direction.",
            level: 3,
          },
          {
            title: "Secretariat & Finance Department",
            name: "",
            description:
              "Manages administrative operations, financial controls, and organizational documentation.",
            level: 4,
          },
          {
            title: "President of the Management Committee",
            name: "",
            description:
              "Oversees daily operations, program implementation, and coordination of management activities.",
            level: 5,
          },
          {
            title: "Regional Counselors",
            name: "Makiso, Kabondo, Mangobo, Tshopo, Kisangani, Lubunga, Lubuya Bera",
            description:
              "Represent the foundation across different regions, coordinate local activities and member engagement.",
            level: 6,
          },
          {
            title: "Specialized Companions",
            name: "Logistics, Legal, Protocol, Security, Gender/Family/Child, Youth",
            description:
              "Provide specialized expertise and support across key operational and programmatic areas.",
            level: 7,
          },
          {
            title: "Target Beneficiaries",
            name: "Albinos, Homeless children, Widows/Single mothers, Physically disabled, Athletes",
            description:
              "The communities and individuals we serve through our various programs and initiatives.",
            level: 8,
          },
        ],
      },
      internal: {
        badge: "Internal Regulations",
        title: "Key Roles & Responsibilities",
        roles: [
          {
            title: "President of the Management Committee",
            details:
              "Leads and coordinates activities; designs strategies; executes annual program; conducts monthly evaluations; convenes and presides over meetings.",
          },
          {
            title: "Vice-Presidents (1st, 2nd, 3rd)",
            details:
              "1st VP: Oversees administration and project development. 2nd VP: Responsible for strategy implementation. 3rd VP: In charge of mobilization and promotion.",
          },
          {
            title: "Psycho-Social & Pedagogical Manager",
            details:
              "Designs techniques to support vulnerable people, including indigenous children and persons with disabilities through specialized programs.",
          },
          {
            title: "Advisors (Pedagogical, Spiritual, Legal, Communication)",
            details:
              "Provide specialized expertise: education initiatives, spiritual support, legal assistance, public information, and strategic mobilization.",
          },
          {
            title: "General Treasurer",
            details:
              "Collects contributions, handles expenses with presidential approval; drafts annual financial report signed by the President.",
          },
        ],
        discipline:
          "Sanctions for behavior contrary to objectives include: reminder to order, suspension, or exclusion (decided by the Board with simple majority).",
      },
      closing: {
        cta: "We commit to transparency, inclusion, and measurable impact for those we serve through strong governance and dedicated service.",
        switch: "Voir en Français",
        backHome: "Back to Home",
      },
    },
    fr: {
      hero: {
        title: "Gouvernance & Statuts",
        description:
          "La Fondation Marie Mwape pour le Progrès Social fonctionne selon des statuts clairs et des principes de gouvernance, garantissant transparence, redevabilité et leadership efficace au service du progrès social.",
      },
      objectives: {
        badge: "Objectifs",
        title: "Nos Objectifs Statutaires",
        intro:
          "Nous soutenons les groupes vulnérables et promouvons la dignité, l'inclusion et le bien-être en RDC, avec un accent sur la Province de la Tshopo.",
        targets: [
          "Personnes en situation de handicap (physique ou mental)",
          "Albinos",
          "Veuves et mères célibataires",
          "Enfants sans abri",
          "Jeunes athlètes",
          "Personnes aveugles",
        ],
      },
      membership: {
        badge: "Adhésion",
        title: "Catégories & Devoirs des Membres",
        intro:
          "L'adhésion est ouverte aux personnes physiques ou morales partageant nos idéaux et respectant les statuts.",
        cards: [
          {
            title: "Membres Fondateurs",
            body: "Initiateurs repris dans la déclaration constitutive. Peuvent siéger s'ils remplissent les conditions de membres actifs.",
            icon: "Landmark",
          },
          {
            title: "Membres Actifs",
            body: "Adhèrent aux statuts et paient régulièrement les cotisations (5 000 CDF/mois). Bénéficient du droit de vote et peuvent exercer des fonctions.",
            icon: "Users",
          },
          {
            title: "Membres Honoraires",
            body: "Personnes ou entités apportant un soutien moral, matériel ou financier ; participent sans voix délibérative.",
            icon: "Shield",
          },
          {
            title: "Membres Bienfaiteurs",
            body: "Contributeurs encourageant d'autres personnes et aidant matériellement, moralement ou financièrement.",
            icon: "Network",
          },
        ],
        rights:
          "Les membres en règle bénéficient des activités, disposent du droit de vote et peuvent siéger aux organes.",
        obligations:
          "Respecter les statuts, payer les cotisations et participer activement aux réunions et activités.",
      },
      governance: {
        badge: "Gouvernance",
        title: "Organes & Fonctionnement",
        intro:
          "Notre gouvernance est conduite par le Membre Fondateur et structurée pour garantir redevabilité, orientation stratégique et exécution efficace.",
        sections: [
          {
            title: "Membre Fondateur",
            body: "L'unique Membre Fondateur est Mme Marie Mwape Kashimbo. Elle dicte la vision et soutient matériellement et financièrement la fondation.",
            extra:
              "Gardienne de la mission et de la philosophie de la fondation, assurant supervision et orientation stratégique.",
          },
          {
            title: "Conseil d'Administration",
            body: "Organe de décision, de gestion et d'orientation. Veille au respect des objectifs, soutient le programme d'activités, mobilise des ressources et règle les différends.",
            extra:
              "Présidé par le Dr YANGONGO Fabien ; membres nommés par le Membre Fondateur. Mandat : 3 ans, renouvelable. Réunion mensuelle ou selon besoin.",
          },
          {
            title: "Comité de Gestion",
            body: "Organe exécutif d'application du programme d'action. Composé du Président, des Vice-Présidents et du Secrétaire Financier ; membres choisis parmi les actifs en règle.",
            extra:
              "Mandat : 2 ans, renouvelable. Fin par décès, démission ou révocation par le Conseil après avis.",
          },
          {
            title: "Conseillers & Compagnons",
            body: "Représentants dans les communes et secteurs regroupant les membres actifs, collectant les cotisations et soutenant l'opérationnel.",
            extra:
              "Domaines : Logistique, Juridique, Protocole, Sécurité, Genre/Famille/Enfant, Jeunesse.",
          },
        ],
      },
      finance: {
        badge: "Finances",
        title: "Ressources & Contrôles Financiers",
        description:
          "Notre fondation est financée par diverses sources pour assurer la durabilité :",
        items: [
          "Cotisations des membres",
          "Dons et legs",
          "Fonds issus des activités",
          "Subventions publiques et privées",
        ],
        note: "Les ressources servent exclusivement à réaliser les objectifs. « N'aimons pas en paroles et avec la langue, mais en actions et avec vérité. » (1 Jean 3:18)",
        control:
          "Le Président contrôle les finances ; les comptes requièrent la double signature du Président et du Trésorier Général.",
      },
      org: {
        badge: "Structure",
        title: "Hiérarchie Organisationnelle",
        description:
          "Notre structure organisationnelle assure des lignes claires d'autorité, de responsabilité et de coordination efficace à tous les niveaux.",
        cards: [
          {
            title: "Membre Fondateur",
            name: "Marie Mwape Kashimbo",
            description:
              "Gardienne de la vision et de la mission de la fondation, assurant la supervision stratégique et le soutien fondamental.",
            level: 1,
          },
          {
            title: "Assistant du Membre Fondateur",
            name: "",
            description:
              "Fournit un soutien direct au Membre Fondateur dans la planification stratégique et la supervision organisationnelle.",
            level: 2,
          },
          {
            title: "Président du Conseil d'Administration",
            name: "Dr YANGONGO Fabien",
            description:
              "Dirige le Conseil dans la prise de décisions stratégiques, la supervision de la gouvernance et l'orientation organisationnelle.",
            level: 3,
          },
          {
            title: "Secrétariat & Département des Finances",
            name: "",
            description:
              "Gère les opérations administratives, les contrôles financiers et la documentation organisationnelle.",
            level: 4,
          },
          {
            title: "Président du Comité de Gestion",
            name: "",
            description:
              "Supervise les opérations quotidiennes, la mise en œuvre des programmes et la coordination des activités de gestion.",
            level: 5,
          },
          {
            title: "Conseillers Régionaux",
            name: "Makiso, Kabondo, Mangobo, Tshopo, Kisangani, Lubunga, Lubuya Bera",
            description:
              "Représentent la fondation dans différentes régions, coordonnent les activités locales et l'engagement des membres.",
            level: 6,
          },
          {
            title: "Compagnons Spécialisés",
            name: "Logistique, Juridique, Protocole, Sécurité, Genre/Famille/Enfant, Jeunesse",
            description:
              "Fournissent une expertise spécialisée et un soutien dans les domaines opérationnels et programmatiques clés.",
            level: 7,
          },
          {
            title: "Bénéficiaires Cibles",
            name: "Albinos, Enfants sans abri, Veuves/Mères célibataires, Handicapés physiques, Athlètes",
            description:
              "Les communautés et individus que nous servons à travers nos divers programmes et initiatives.",
            level: 8,
          },
        ],
      },
      internal: {
        badge: "Règlement Intérieur",
        title: "Rôles & Responsabilités Clés",
        roles: [
          {
            title: "Président du Comité de Gestion",
            details:
              "Gère et coordonne les activités ; conçoit les stratégies ; exécute le programme annuel ; évalue mensuellement ; convoque et préside les réunions.",
          },
          {
            title: "Vice-Présidents (1er, 2e, 3e)",
            details:
              "1er VP : Supervise l'administration et l'élaboration des projets. 2e VP : Responsable de l'implémentation des stratégies. 3e VP : Chargé de la mobilisation et promotion.",
          },
          {
            title: "Responsable Psycho-Social & Pédagogique",
            details:
              "Conçoit des techniques pour assister les vulnérables, notamment les enfants autochtones et les personnes handicapées à travers des programmes spécialisés.",
          },
          {
            title:
              "Conseillers (Pédagogique, Spirituel, Juridique, Communication)",
            details:
              "Fournissent une expertise spécialisée : initiatives éducatives, soutien spirituel, assistance juridique, information publique et mobilisation stratégique.",
          },
          {
            title: "Trésorier Général",
            details:
              "Perçoit les cotisations, effectue les dépenses avec accord présidentiel ; rédige le rapport financier annuel signé par le Président.",
          },
        ],
        discipline:
          "Sanctions pour comportement contraire aux objectifs : rappel à l'ordre, suspension, ou exclusion (décidée par le Conseil d'Administration à la majorité simple).",
      },
      closing: {
        cta: "Nous nous engageons à la transparence, à l'inclusion et à un impact mesurable pour ceux que nous servons à travers une gouvernance solide et un service dévoué.",
        switch: "View in English",
        backHome: "Retour à l'Accueil",
      },
    },
  };

  const t = content[language];

  const renderIcon = (iconName: string) => {
    const iconMap = {
      Landmark: Landmark,
      Users: Users,
      Shield: Shield,
      Network: Network,
      Building: Building,
      Target: Target,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Users;
    return <IconComponent className="w-6 h-6 text-white" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-slate-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3">
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
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {language === "fr" ? "Accueil" : "Home"}
              </a>
              <a
                href="/programs"
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {language === "fr" ? "Programmes" : "Programs"}
              </a>
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                {language === "fr" ? "Gouvernance" : "Governance"}
              </span>
              <a
                href="/#contact"
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Contact
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={mounted ? toggleDarkMode : undefined}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                aria-label="Toggle dark mode"
                disabled={!mounted}
              >
                {mounted && isDarkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {language === "fr" ? "EN" : "FR"}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
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
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <a
                  href="/"
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  {language === "fr" ? "Accueil" : "Home"}
                </a>
                <a
                  href="/programs"
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  {language === "fr" ? "Programmes" : "Programs"}
                </a>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {language === "fr" ? "Gouvernance" : "Governance"}
                </span>
                <a
                  href="/#contact"
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={mounted ? toggleDarkMode : undefined}
                    className="text-slate-600 dark:text-gray-300"
                    disabled={!mounted}
                  >
                    {mounted && isDarkMode ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                    className="text-slate-600 dark:text-gray-300"
                  >
                    {language === "fr" ? "EN" : "FR"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="py-12 px-6">
        {/* Hero */}
        <section className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            {t.hero.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-300 transition-colors duration-300 max-w-4xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
        </section>

        {/* Foundation Objectives */}
        <section className="max-w-5xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
            {t.objectives.badge}
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            {t.objectives.title}
          </h2>
          <p className="text-slate-600 dark:text-gray-300 mb-6 transition-colors duration-300">
            {t.objectives.intro}
          </p>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-slate-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                {language === "fr" ? "Nos Groupes Cibles" : "Our Target Groups"}
              </h3>
            </div>
            <ul className="space-y-3">
              {t.objectives.targets.map((target, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                    {target}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Membership */}
        <section className="max-w-5xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
            {t.membership.badge}
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            {t.membership.title}
          </h2>
          <p className="text-slate-600 dark:text-gray-300 mb-8 transition-colors duration-300">
            {t.membership.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {t.membership.cards.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-lg flex items-center justify-center">
                    {renderIcon(card.icon)}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700 transition-colors duration-300">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h3 className="font-semibold text-green-800 dark:text-green-300 transition-colors duration-300">
                  {language === "fr" ? "Droits" : "Rights"}
                </h3>
              </div>
              <p className="text-green-700 dark:text-green-300 transition-colors duration-300">
                {t.membership.rights}
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700 transition-colors duration-300">
              <div className="flex items-center space-x-2 mb-3">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 transition-colors duration-300">
                  {language === "fr" ? "Obligations" : "Obligations"}
                </h3>
              </div>
              <p className="text-blue-700 dark:text-blue-300 transition-colors duration-300">
                {t.membership.obligations}
              </p>
            </div>
          </div>
        </section>

        {/* Governance Structure */}
        <section className="max-w-5xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
            {t.governance.badge}
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            {t.governance.title}
          </h2>
          <p className="text-slate-600 dark:text-gray-300 mb-8 transition-colors duration-300">
            {t.governance.intro}
          </p>

          <div className="space-y-4">
            {t.governance.sections.map((section, index) => (
              <details
                key={index}
                className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg transition-colors duration-300"
              >
                <summary className="cursor-pointer p-6 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                      {section.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-slate-400 dark:text-gray-400 ml-auto" />
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 dark:text-gray-300 ml-11 mb-3 transition-colors duration-300">
                    {section.body}
                  </p>
                  {section.extra && (
                    <p className="text-slate-500 dark:text-gray-400 ml-11 text-sm transition-colors duration-300">
                      {section.extra}
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Financial Resources */}
        <section className="max-w-5xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
            {t.finance.badge}
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-8 text-slate-900 dark:text-white transition-colors duration-300">
            {t.finance.title}
          </h2>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-slate-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-lg flex items-center justify-center">
                <Banknote className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                  {language === "fr"
                    ? "Sources de Financement"
                    : "Funding Sources"}
                </h3>
                <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                  {t.finance.description}
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {t.finance.items.map((source, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                    {source}
                  </span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-indigo-50 to-sky-50 dark:from-indigo-900/20 dark:to-sky-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-700 mb-4 transition-colors duration-300">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-slate-600 dark:text-gray-300 italic transition-colors duration-300">
                  {t.finance.note}
                </p>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700 transition-colors duration-300">
              <p className="text-amber-700 dark:text-amber-300 transition-colors duration-300 text-sm">
                {t.finance.control}
              </p>
            </div>
          </div>
        </section>

        {/* Organizational Hierarchy */}
        <section className="max-w-5xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
            {t.org.badge}
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            {t.org.title}
          </h2>
          <p className="text-slate-600 dark:text-gray-300 mb-8 transition-colors duration-300">
            {t.org.description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {t.org.cards.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      card.level <= 2
                        ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                        : card.level <= 4
                          ? "bg-gradient-to-r from-indigo-500 to-sky-400"
                          : card.level <= 6
                            ? "bg-gradient-to-r from-sky-400 to-blue-500"
                            : "bg-gradient-to-r from-blue-500 to-green-500"
                    }`}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-800">
                        {card.level}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 dark:text-white transition-colors duration-300 mb-1">
                      {card.title}
                    </h3>
                    {card.name && (
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 transition-colors duration-300 mb-2">
                        {card.name}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Regulations */}
        <section className="max-w-5xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
            {t.internal.badge}
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-8 text-slate-900 dark:text-white transition-colors duration-300">
            {t.internal.title}
          </h2>

          <div className="space-y-4 mb-8">
            {t.internal.roles.map((role, index) => (
              <details
                key={index}
                className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg transition-colors duration-300"
              >
                <summary className="cursor-pointer p-6 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center">
                      <ScrollText className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                      {role.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-slate-400 dark:text-gray-400 ml-auto" />
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 dark:text-gray-300 ml-11 transition-colors duration-300">
                    {role.details}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-700 transition-colors duration-300">
            <div className="flex items-center space-x-2 mb-3">
              <Scale className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 transition-colors duration-300">
                {language === "fr" ? "Discipline" : "Discipline"}
              </h3>
            </div>
            <p className="text-amber-700 dark:text-amber-300 transition-colors duration-300">
              {t.internal.discipline}
            </p>
          </div>
        </section>

        {/* Closing CTA + Language Toggle */}
        <section className="max-w-5xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-sky-50 dark:from-indigo-900/20 dark:to-sky-900/20 p-12 rounded-lg border border-indigo-200 dark:border-indigo-700 transition-colors duration-300">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-lg font-medium text-slate-700 dark:text-gray-200 mb-8 leading-relaxed transition-colors duration-300 max-w-4xl mx-auto">
              {t.closing.cta}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/"
                className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors duration-300"
              >
                {t.closing.backHome}
              </a>
              <button
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300 font-semibold"
              >
                {t.closing.switch}
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Buttons */}
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}
