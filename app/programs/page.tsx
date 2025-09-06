"use client";

import { useState, useEffect, useRef } from "react";
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
  Globe,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTopButton } from "@/components/back-to-top-button";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { Footer } from "@/components/footer";

// HealthImageSlider Component
function HealthImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/programs-background.jpg", "/2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    );
  };

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Physical and mental health support ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// BlindImageSlider Component
function BlindImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/blind_1.jpg", "/blind_2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    );
  };

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Support for the blind ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// AthletesImageSlider Component
function AthletesImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/boys_1.jpg", "/boys_2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    );
  };

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Support for young athletes ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// WomenImageSlider Component
function WomenImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/womenr_1.jpg", "/womenr_2.jpg", "/hero-background.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    );
  };

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Support for widows and single mothers ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// VideoGallery Component
function VideoGallery({ language }: { language: "fr" | "en" }) {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    "/VID-20250905-WA0002.mp4",
    "/VID-20250905-WA0007.mp4",
    "/VID-20250905-WA0013.mp4",
    "/VID-20250905-WA0032.mp4",
    "/VID-20250905-WA0036.mp4",
    "/VID-20250905-WA0059.mp4",
    "/VID-20250905-WA0062.mp4",
  ];

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const content = {
    fr: {
      title: "Nos Actions en Images",
      description:
        "Découvrez nos programmes en action à travers ces moments capturés sur le terrain.",
      previous: "Précédent",
      next: "Suivant",
    },
    en: {
      title: "Our Work in Action",
      description:
        "Discover our programs in action through these moments captured in the field.",
      previous: "Previous",
      next: "Next",
    },
  };

  const t = content[language];
  const visibleVideos = isMobile ? 1 : 3;
  const maxStartIndex = Math.max(0, videos.length - visibleVideos);

  const nextVideos = () => {
    setCurrentStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  const prevVideos = () => {
    setCurrentStartIndex((prev) => Math.max(prev - 1, 0));
  };

  // Pause all videos when component unmounts or index changes
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
  }, [currentStartIndex]);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
          {t.title}
        </h3>
        <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
          {t.description}
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos
            .slice(currentStartIndex, currentStartIndex + visibleVideos)
            .map((videoSrc, index) => (
              <div
                key={currentStartIndex + index}
                className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 shadow-xl"
              >
                <video
                  ref={(el) => {
                    videoRefs.current[currentStartIndex + index] = el;
                  }}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                  muted
                >
                  <source src={videoSrc} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>
            ))}
        </div>

        {/* Navigation Buttons */}
        {videos.length > 1 && (
          <>
            <button
              onClick={prevVideos}
              disabled={currentStartIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 md:p-3 rounded-full transition-all duration-200 shadow-lg z-10"
              aria-label={t.previous}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextVideos}
              disabled={currentStartIndex >= maxStartIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 md:p-3 rounded-full transition-all duration-200 shadow-lg z-10"
              aria-label={t.next}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Video Indicators */}
        {videos.length > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {isMobile ? (
              // Mobile: Show indicator for each video
              <>
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStartIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentStartIndex
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </>
            ) : (
              // Desktop: Show indicator for each set
              <>
                {Array.from({ length: maxStartIndex + 1 }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStartIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentStartIndex
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to video set ${index + 1}`}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// AlbinismImageSlider Component
function AlbinismImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/albino.jpg", "/albino_1.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    );
  };

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Support for people with albinism ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

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
            title: "Soutien à la Santé Physique et Mentale",
            shortDescription:
              "Programmes de soins holistiques répondant aux besoins de santé physique et mentale de la communauté.",
            fullDescription:
              "Conscients que la santé ne se limite pas à l'absence de maladie, notre programme intègre à la fois des services de santé physique et mentale. Nous offrons des consultations psychologiques, des thérapies de groupe, des campagnes de sensibilisation et un soutien aux familles, tout en assurant également la rééducation physique et les soins de santé de base. Notre objectif est de créer des communautés plus saines et plus résilientes.",
            impact: {
              beneficiaries: "300+",
              description:
                "consultations, séances de thérapie et interventions de santé physique",
            },
            activities: [
              "Consultations psychologiques individuelles",
              "Séances de thérapie de groupe",
              "Campagnes de sensibilisation communautaire",
              "Formation au soutien familial",
              "Réinsertion sociale des patients",
              "Rééducation physique et soins de santé de base",
            ],
          },
          {
            title: "Soutien aux Personnes Aveugles",
            shortDescription:
              "Programmes inclusifs offrant soutien et autonomisation aux personnes malvoyantes.",
            fullDescription:
              "Les personnes aveugles et malvoyantes font souvent face à l'exclusion sociale et à des opportunités limitées. Notre programme est dédié à favoriser leur autonomie et leur inclusion en offrant une éducation adaptée, une formation à l'orientation et à la mobilité, l'accès aux technologies d'assistance et la défense de leurs droits. Nous croyons en une société où les personnes aveugles peuvent s'épanouir avec dignité et égalité des chances.",
            impact: {
              beneficiaries: "120+",
              description: "personnes aveugles et malvoyantes accompagnées",
            },
            activities: [
              "Éducation adaptée et alphabétisation en braille",
              "Formation à l'orientation et à la mobilité",
              "Fourniture de technologies d'assistance",
              "Campagnes de sensibilisation communautaire",
              "Plaidoyer pour les droits des personnes aveugles",
            ],
          },
          {
            title: "Soutien aux Jeunes Athlètes",
            shortDescription:
              "Programmes de développement et de soutien pour les jeunes sportifs à Kisangani.",
            fullDescription:
              "Le sport est un outil puissant d'éducation, d'intégration sociale et de développement personnel. Notre programme soutient les jeunes athlètes en leur offrant des formations, du matériel et des opportunités de valoriser leur talent. Nous promouvons également des valeurs telles que l'esprit d'équipe, la discipline et la persévérance, qui contribuent à former de jeunes leaders responsables et confiants.",
            impact: {
              beneficiaries: "100+",
              description: "jeunes athlètes formés et accompagnés",
            },
            activities: [
              "Séances d'entraînement sportif",
              "Fourniture de matériel et uniformes",
              "Participation aux compétitions locales et régionales",
              "Ateliers sur la santé, la nutrition et la discipline",
              "Mentorat par des athlètes expérimentés",
            ],
          },
          {
            title: "Soutien aux Veuves et Mères Célibataires",
            shortDescription:
              "Un programme holistique offrant sécurité, autonomisation et opportunités de réintégration aux veuves et mères célibataires.",
            fullDescription:
              "Les veuves et mères célibataires font souvent face à des difficultés économiques, à la stigmatisation sociale et à des défis émotionnels. Notre programme leur offre un espace sûr et un accompagnement complet pour reconstruire leur vie. Grâce au soutien psychosocial, à la formation professionnelle et à l'accès aux soins de santé, nous visons à donner à ces femmes les moyens d'atteindre l'indépendance et la stabilité. Nous favorisons également leur autonomisation économique à travers le microcrédit, les activités génératrices de revenus et la création de coopératives féminines.",
            impact: {
              beneficiaries: "75+",
              description:
                "veuves et mères célibataires accompagnées dans leur réintégration",
            },
            activities: [
              "Conseil et soutien psychosocial",
              "Formation professionnelle en couture et artisanat",
              "Microcrédit et activités génératrices de revenus",
              "Accès aux soins de santé généraux et reproductifs",
              "Programmes d'alphabétisation et d'éducation de base",
            ],
          },
          {
            title: "Soutien aux Personnes Atteintes d'Albinisme",
            shortDescription:
              "Programmes de protection et d'intégration pour les personnes atteintes d'albinisme.",
            fullDescription:
              "Face à la discrimination et aux dangers vécus par les personnes atteintes d'albinisme, notre programme offre une protection complète et un accompagnement vers l'intégration sociale. Nous distribuons des crèmes solaires et des équipements de protection, organisons des campagnes de sensibilisation et facilitons l'accès à l'éducation et à l'emploi. Notre objectif est de créer un environnement où les personnes atteintes d'albinisme peuvent vivre en sécurité et dans la dignité.",
            impact: {
              beneficiaries: "45+",
              description:
                "personnes atteintes d'albinisme protégées et accompagnées",
            },
            activities: [
              "Distribution de crèmes solaires et d'équipements",
              "Campagnes de sensibilisation communautaire",
              "Soutien scolaire spécialisé",
              "Conseil psychologique",
              "Plaidoyer pour leurs droits",
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
            title: "Physical and Mental Health Support",
            shortDescription:
              "Holistic care programs addressing both physical and mental health needs in the community.",
            fullDescription:
              "Recognizing that health is more than the absence of disease, our program integrates both physical and mental health services. We provide psychological consultations, group therapy, community awareness, and family support while also addressing physical rehabilitation and general healthcare. Our goal is to create healthier and more resilient communities.",
            impact: {
              beneficiaries: "300+",
              description:
                "consultations, therapy sessions, and physical health interventions",
            },
            activities: [
              "Individual psychological consultations",
              "Group therapy sessions",
              "Community awareness campaigns",
              "Family support training",
              "Social reintegration of patients",
              "Physical rehabilitation and basic healthcare",
            ],
          },
          {
            title: "Support for the Blind",
            shortDescription:
              "Inclusive programs providing support and empowerment for visually impaired individuals.",
            fullDescription:
              "Blind and visually impaired people often face social exclusion and limited opportunities. Our program is dedicated to fostering independence and inclusion by providing adapted education, orientation and mobility training, access to assistive technologies, and advocacy for their rights. We believe in creating a society where the blind can thrive with dignity and equal opportunities.",
            impact: {
              beneficiaries: "120+",
              description: "blind and visually impaired individuals supported",
            },
            activities: [
              "Braille literacy and adapted education",
              "Orientation and mobility training",
              "Provision of assistive technologies",
              "Community awareness campaigns",
              "Advocacy for the rights of the blind",
            ],
          },
          {
            title: "Support for Young Athletes",
            shortDescription:
              "Development and support programs for young athletes in Kisangani.",
            fullDescription:
              "Sport is a powerful tool for education, social integration, and personal growth. Our program helps young athletes by providing training, equipment, and opportunities to showcase their talent. We also promote values such as teamwork, discipline, and perseverance, which contribute to building responsible and confident young leaders.",
            impact: {
              beneficiaries: "100+",
              description: "young athletes trained and supported",
            },
            activities: [
              "Sports training sessions",
              "Provision of equipment and uniforms",
              "Participation in local and regional competitions",
              "Workshops on health, nutrition, and discipline",
              "Mentorship by experienced athletes",
            ],
          },
          {
            title: "Support for Widows and Single Mothers",
            shortDescription:
              "A holistic program offering safety, empowerment, and reintegration opportunities for widows and single mothers.",
            fullDescription:
              "Widows and single mothers often face economic hardship, social stigma, and emotional challenges. Our program provides them with a safe space and comprehensive support to rebuild their lives. Through psychosocial care, vocational training, and access to healthcare, we aim to empower women to achieve independence and stability. We also promote economic empowerment through microcredit, income-generating activities, and the creation of women-led cooperatives.",
            impact: {
              beneficiaries: "75+",
              description:
                "widows and single mothers supported in their reintegration",
            },
            activities: [
              "Psychosocial counseling and support",
              "Vocational training in sewing and crafts",
              "Microcredit and income-generating activities",
              "Access to reproductive and general healthcare",
              "Literacy and basic education programs",
            ],
          },
          {
            title: "Support for People with Albinism",
            shortDescription:
              "Protection and integration programs for people living with albinism.",
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
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                {t.nav.programs}
              </span>
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
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {t.nav.programs}
                </span>
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
                  {/* Support Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 text-white rounded-lg py-3 text-sm font-medium transition-all duration-300"
                    onClick={() => {
                      const element = document.getElementById("support");
                      element?.scrollIntoView({ behavior: "smooth" });
                      toggleMobileMenu();
                    }}
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
      <section className="relative py-16 min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/programs-background.jpg"
            alt="Programs Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {/* Back to Home Link */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center text-white/90 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === "fr" ? "Retour à l'accueil" : "Back to Home"}
              </Link>
            </div>

            <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 rounded-full px-4 py-2 font-medium">
              {t.hero.badge}
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto drop-shadow-md">
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
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${colorScheme.color} flex items-center justify-center overflow-hidden`}
                        >
                          <Image
                            src="/logo.jpg"
                            alt="Foundation Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                          />
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

                    {/* Program Image - Special sliders for each program */}
                    {index === 0 ? (
                      <HealthImageSlider />
                    ) : index === 1 ? (
                      <BlindImageSlider />
                    ) : index === 2 ? (
                      <AthletesImageSlider />
                    ) : index === 3 ? (
                      <WomenImageSlider />
                    ) : index === 4 ? (
                      <AlbinismImageSlider />
                    ) : (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src="/logo.jpg"
                          alt="Foundation Logo"
                          fill
                          className="object-contain p-8"
                        />
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/programs-background.jpg"
            alt="Programs Background"
            fill
            className="object-cover object-center"
            quality={75}
          />
          {/* Overlay for better content readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoGallery language={language} />
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
      <Footer language={language} />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}
