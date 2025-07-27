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
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
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
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-amber-800 hover:text-amber-600 transition-colors">
                À Propos
              </a>
              <a href="#programs" className="text-amber-800 hover:text-amber-600 transition-colors">
                Programmes
              </a>
              <a href="#impact" className="text-amber-800 hover:text-amber-600 transition-colors">
                Impact
              </a>
              <a href="#contact" className="text-amber-800 hover:text-amber-600 transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full">
              Soutenir Notre Travail
            </Button>
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
                  Kisangani, République Démocratique du Congo
                </Badge>
                <h1 className="font-serif text-4xl lg:text-6xl font-bold text-amber-900 leading-tight">
                  Ensemble pour un
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    {" "}
                    avenir meilleur
                  </span>
                </h1>
                <p className="text-xl text-amber-800 leading-relaxed">
                  La Fondation Marie Mwape pour le Progrès Social œuvre pour transformer des vies à Kisangani. Nous
                  soutenons les orphelins, les personnes handicapées, les femmes en détresse, les personnes albinos et
                  ceux qui ont besoin d'aide en santé mentale.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full px-8 py-4 text-lg"
                >
                  Soutenir Notre Travail
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 rounded-full px-8 py-4 text-lg bg-transparent"
                >
                  En Savoir Plus
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
                    <p className="text-amber-700">Vies Transformées</p>
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
                <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">Notre Histoire</Badge>
                <h2 className="font-serif text-4xl font-bold text-amber-900">Marie Mwape Kashimbo</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fondatrice et présidente de la Fondation Marie Mwape pour le Progrès Social, Marie Mwape Kashimbo est
                  une philanthrope passionnée qui a consacré sa vie à améliorer les conditions de vie des plus
                  vulnérables à Kisangani.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Née d'une vision profonde de justice sociale et d'égalité, notre fondation travaille sans relâche pour
                  offrir espoir, dignité et opportunités à ceux qui en ont le plus besoin. Chaque action que nous menons
                  est guidée par l'amour, la compassion et la détermination à créer un changement durable.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-2xl">
                  <p className="font-bold text-3xl text-amber-900">2018</p>
                  <p className="text-amber-700">Année de Fondation</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-2xl">
                  <p className="font-bold text-3xl text-orange-900">5</p>
                  <p className="text-orange-700">Programmes Actifs</p>
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
                <p className="font-medium">"Chaque vie compte, chaque rêve mérite d'être réalisé."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">Nos Programmes</Badge>
            <h2 className="font-serif text-4xl font-bold text-amber-900">Domaines d'Intervention</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nous concentrons nos efforts sur cinq domaines clés pour créer un impact durable dans la communauté de
              Kisangani.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Soutien aux Orphelins",
                description: "Nous offrons un foyer, une éducation et un avenir aux enfants orphelins de Kisangani.",
                color: "from-red-500 to-pink-500",
                bgColor: "bg-red-50",
              },
              {
                icon: Shield,
                title: "Aide aux Personnes Handicapées",
                description: "Programmes d'inclusion et de soutien pour les personnes en situation de handicap.",
                color: "from-blue-500 to-indigo-500",
                bgColor: "bg-blue-50",
              },
              {
                icon: Users,
                title: "Récupération des Femmes",
                description: "Accompagnement et réinsertion sociale des femmes en situation de détresse.",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50",
              },
              {
                icon: Star,
                title: "Soutien aux Personnes Albinos",
                description: "Protection, sensibilisation et intégration des personnes albinos dans la société.",
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50",
              },
              {
                icon: Lightbulb,
                title: "Aide en Santé Mentale",
                description: "Services de soutien psychologique et de sensibilisation à la santé mentale.",
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
                  <CardTitle className="font-serif text-xl text-gray-900">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed">
                    {program.description}
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
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">Notre Impact</Badge>
            <h2 className="font-serif text-4xl font-bold text-amber-900">Histoires de Transformation</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez comment nous changeons des vies et créons de l'espoir dans notre communauté.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Mama Beatrice",
                role: "Femme Réintégrée",
                quote:
                  "Grâce à la Fondation Marie Mwape, j'ai retrouvé ma dignité et je peux maintenant subvenir aux besoins de ma famille.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Jean-Claude",
                role: "Ancien Orphelin",
                quote:
                  "La fondation m'a donné une famille et une éducation. Aujourd'hui, je suis enseignant et j'aide d'autres enfants.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Marie-Claire",
                role: "Bénéficiaire Programme Albinos",
                quote:
                  "J'ai appris à m'accepter et à poursuivre mes rêves malgré les défis. Merci pour votre soutien inconditionnel.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((story, index) => (
              <Card key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-lg">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <Image
                      src={story.image || "/placeholder.svg"}
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
            {[
              { number: "150+", label: "Orphelins Soutenus" },
              { number: "75+", label: "Femmes Réintégrées" },
              { number: "200+", label: "Personnes Handicapées Aidées" },
              { number: "50+", label: "Consultations Santé Mentale" },
            ].map((stat, index) => (
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
            <h2 className="font-serif text-4xl font-bold">Rejoignez Notre Mission</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Votre soutien peut transformer des vies. Découvrez comment vous pouvez contribuer à notre mission de
              progrès social à Kisangani.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-amber-700 hover:bg-amber-50 rounded-full px-8 py-4 text-lg font-semibold"
              >
                Faire un Don
                <Heart className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-700 rounded-full px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Devenir Bénévole
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">Actualités</Badge>
            <h2 className="font-serif text-4xl font-bold text-amber-900">Dernières Nouvelles</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Restez informés de nos dernières actions et succès dans la communauté.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nouvelle École pour Orphelins Inaugurée",
                date: "15 Décembre 2024",
                excerpt: "Nous avons inauguré une nouvelle école qui accueillera 100 enfants orphelins de Kisangani.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Programme de Formation Professionnelle",
                date: "8 Décembre 2024",
                excerpt: "Lancement d'un programme de formation en couture et menuiserie pour 50 femmes en détresse.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Campagne de Sensibilisation Albinisme",
                date: "1 Décembre 2024",
                excerpt: "Grande campagne de sensibilisation sur l'albinisme dans les écoles de Kisangani.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
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
                  <CardTitle className="font-serif text-xl text-gray-900 leading-tight">{article.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{article.excerpt}</CardDescription>
                  <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0">
                    Lire la suite
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
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 rounded-full">Contact</Badge>
            <h2 className="font-serif text-4xl font-bold text-amber-900">Contactez-Nous</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nous sommes là pour répondre à vos questions et accueillir votre soutien.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-900">Adresse</h3>
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
                      Nous Contacter sur WhatsApp
                      <MessageCircle className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-amber-900">Suivez-nous</h3>
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
              <h3 className="font-serif text-2xl font-bold text-amber-900 mb-6">Envoyez-nous un Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl py-3 text-lg">
                  Envoyer le Message
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
              <p className="text-amber-200 leading-relaxed">
                Transformant des vies et créant de l'espoir dans la communauté de Kisangani depuis 2018.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Programmes</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Soutien aux Orphelins</li>
                <li>Aide aux Handicapés</li>
                <li>Récupération des Femmes</li>
                <li>Soutien aux Albinos</li>
                <li>Santé Mentale</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-amber-200">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    À Propos
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-white transition-colors">
                    Programmes
                  </a>
                </li>
                <li>
                  <a href="#impact" className="hover:text-white transition-colors">
                    Impact
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
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
            <p>&copy; 2024 Fondation Marie Mwape pour le Progrès Social. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
