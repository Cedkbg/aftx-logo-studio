import { Button } from "@/components/ui/button";
import { Award, Globe, Users, TrendingUp, Linkedin, Twitter, Mail } from "lucide-react";
import Header from "@/components/Header";
import cedKabongo from "@/assets/ced-kabongo.jpg";

const Fondateur = () => {
  const achievements = [
    {
      icon: Award,
      title: "Prix de l'Innovation Fintech 2023",
      description: "Reconnu par l'African Tech Summit pour ses contributions révolutionnaires"
    },
    {
      icon: Globe,
      title: "Expansion Globale",
      description: "A conduit AFRIFINETECH X à opérer dans plus de 50 pays en 5 ans"
    },
    {
      icon: Users,
      title: "Impact Social",
      description: "A permis à plus de 10 millions d'Africains d'accéder aux services financiers digitaux"
    },
    {
      icon: TrendingUp,
      title: "Levée de Fonds Historique",
      description: "A levé plus de 500M$ pour accélérer la révolution fintech africaine"
    }
  ];

  const milestones = [
    { year: "2018", event: "Fondation d'AFRIFINETECH X à Kinshasa" },
    { year: "2019", event: "Lancement du premier portefeuille électronique panafricain" },
    { year: "2020", event: "Prix Entrepreneur Technologique de l'Année" },
    { year: "2021", event: "Expansion en Europe et Amérique du Nord" },
    { year: "2022", event: "Introduction de la plateforme de trading AFTX" },
    { year: "2023", event: "Lancement d'AFTX Coin, la crypto-monnaie révolutionnaire" },
    { year: "2024", event: "Partenariats stratégiques avec les banques centrales africaines" },
    { year: "2025", event: "Vision 2030: Bancariser 100M d'Africains" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font-semibold">Fondateur & CEO</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                  Ced Kabongo
                </h1>
                <p className="text-2xl text-muted-foreground font-semibold">
                  Pionnier de la Fintech Africaine
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Visionnaire et entrepreneur passionné, Ced Kabongo a révolutionné l'accès aux services financiers en Afrique. 
                  Avec plus de 15 ans d'expérience dans la technologie financière et le développement digital, il a créé 
                  AFRIFINETECH X pour démocratiser la finance et construire un avenir économique inclusif.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href="https://www.linkedin.com/in/ced-kabongo-678403292/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href="https://x.com/Ced07LejeuneIr" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                      Twitter
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href="https://web.facebook.com/cedrick.kabongo.984" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href="mailto:cedkbg07@gmail.com">
                      <Mail className="h-5 w-5" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-30"></div>
                  <img 
                    src={cedKabongo} 
                    alt="Ced Kabongo" 
                    className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
              Sa Vision
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                "Ma mission est de transformer l'Afrique en leader mondial de la fintech. Nous construisons 
                l'infrastructure financière de demain, où chaque Africain, qu'il soit dans une métropole ou un 
                village reculé, peut accéder aux mêmes opportunités financières que n'importe qui dans le monde."
              </p>
              <p className="text-xl leading-relaxed">
                "AFRIFINETECH X n'est pas seulement une entreprise technologique. C'est un mouvement pour 
                l'inclusion financière, l'autonomisation économique et la prospérité partagée. Nous utilisons 
                la technologie pour éliminer les barrières et créer un écosystème financier véritablement démocratique."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
              Réalisations Majeures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-accent mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
              Parcours & Étapes Clés
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <div className="p-6 bg-card rounded-xl border border-border shadow-sm group-hover:shadow-md transition-all">
                      <p className="text-lg text-foreground font-medium">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Impact en Chiffres
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10M+", label: "Vies transformées" },
                { value: "50+", label: "Pays couverts" },
                { value: "$500M", label: "Fonds levés" },
                { value: "2000+", label: "Employés" }
              ].map((stat, index) => (
                <div key={index} className="text-center text-white space-y-2">
                  <div className="text-5xl md:text-6xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-lg text-white/90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Rejoignez la Révolution Fintech
            </h2>
            <p className="text-xl text-muted-foreground">
              Faites partie de la vision de Ced Kabongo pour transformer l'économie africaine
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 text-lg px-8 py-6">
              Découvrir AFRIFINETECH X
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fondateur;
