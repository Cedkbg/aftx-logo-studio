import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import FounderBanner from "@/components/FounderBanner";
import afrifintechLogo from "@/assets/afrifinetech-logo.png";

const Index = () => {
  const services = [
    {
      title: "Banque Électronique",
      description: "Solutions bancaires digitales complètes pour une gestion financière moderne et sécurisée",
      icon: Shield,
      link: "/banque-electronique",
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Portefeuille Électronique",
      description: "Paiements mobiles instantanés et transferts d'argent en toute sécurité",
      icon: Zap,
      link: "/portefeuille-electronique",
      gradient: "from-accent to-accent/80"
    },
    {
      title: "Monnaie Électronique",
      description: "Accédez aux crypto-monnaies et actifs numériques de nouvelle génération",
      icon: Globe,
      link: "/monnaie-electronique",
      gradient: "from-secondary to-secondary/80"
    },
    {
      title: "Trading & Broker",
      description: "Plateforme professionnelle pour le trading sur les marchés financiers mondiaux",
      icon: TrendingUp,
      link: "/trading",
      gradient: "from-primary via-accent to-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FounderBanner />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10"></div>
        <div className="container relative px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse-glow"></div>
              <img 
                src={afrifintechLogo} 
                alt="AFRIFINETECH X Logo" 
                className="relative h-24 md:h-32 w-auto mx-auto object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              AFRIFINETECH X
            </h1>
            
            <p className="text-2xl md:text-3xl text-foreground font-semibold">
              AFTX Globale
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              L'avenir de la finance africaine. Solutions fintech innovantes pour un monde connecté.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 text-lg px-8 py-6"
                asChild
              >
                <Link to="/banque-electronique">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2"
                asChild
              >
                <Link to="/fondateur">
                  Rencontrer le fondateur
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nos Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions financières innovantes adaptées à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={index}
                  to={service.link}
                  className="group block"
                >
                  <div className="h-full p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      En savoir plus
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "10M+", label: "Utilisateurs actifs" },
              { value: "50+", label: "Pays couverts" },
              { value: "99.9%", label: "Uptime garanti" },
              { value: "24/7", label: "Support client" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Prêt à transformer votre avenir financier ?
            </h2>
            <p className="text-xl text-white/90">
              Rejoignez des millions d'utilisateurs qui font confiance à AFRIFINTECH X
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              Commencer maintenant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
