import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, PieChart, Activity, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import FounderBanner from "@/components/FounderBanner";
import heroTrading from "@/assets/hero-trading.jpg";

const Trading = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Trading Professionnel",
      description: "Plateforme avancée avec outils d'analyse technique et graphiques en temps réel"
    },
    {
      icon: BarChart3,
      title: "Analyse Avancée",
      description: "Indicateurs techniques, analyses graphiques et signaux de trading automatisés"
    },
    {
      icon: PieChart,
      title: "Portfolio Diversifié",
      description: "Actions, forex, commodités, indices et crypto-monnaies sur une seule plateforme"
    },
    {
      icon: Activity,
      title: "Exécution Rapide",
      description: "Ordres exécutés en millisecondes avec les meilleurs prix du marché"
    }
  ];

  const markets = [
    {
      name: "Actions",
      description: "Plus de 10 000 actions internationales des principales bourses mondiales"
    },
    {
      name: "Forex",
      description: "Trading de devises avec spreads ultra-compétitifs sur 50+ paires"
    },
    {
      name: "Commodités",
      description: "Or, pétrole, argent et autres matières premières"
    },
    {
      name: "Indices",
      description: "S&P 500, NASDAQ, DAX, CAC 40 et plus de 20 indices majeurs"
    },
    {
      name: "Crypto-monnaies",
      description: "Bitcoin, Ethereum et 100+ crypto-monnaies avec effet de levier"
    },
    {
      name: "ETFs",
      description: "Large sélection d'ETFs pour diversifier votre portefeuille"
    }
  ];

  const benefits = [
    "Spreads à partir de 0.1 pips",
    "Effet de levier jusqu'à 1:500",
    "Compte démo illimité et gratuit",
    "Formation trading gratuite",
    "Analyses de marché quotidiennes",
    "Support d'experts 24/5",
    "Application mobile performante",
    "Copy trading disponible"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FounderBanner />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroTrading} 
            alt="Trading & Broker" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent/80 to-secondary/70"></div>
        </div>
        
        <div className="relative container px-4 h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Trading & Broker
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Tradez sur les marchés financiers mondiaux avec notre plateforme professionnelle. Accédez à des milliers d'instruments financiers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Ouvrir un compte
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Essayer la démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Plateforme de Trading Avancée
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des outils professionnels pour tous les niveaux de traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Marchés Disponibles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {markets.map((market, index) => (
                <div key={index} className="p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-foreground mb-2">{market.name}</h3>
                  <p className="text-muted-foreground">{market.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Avantages AFRIFINETECH X
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "10K+", label: "Instruments tradables" },
              { value: "0.1", label: "Spreads min (pips)" },
              { value: "<10ms", label: "Temps d'exécution" },
              { value: "1:500", label: "Levier maximum" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
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

      {/* Education Section */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Formation Trading Gratuite
            </h2>
            <p className="text-lg text-muted-foreground">
              Apprenez le trading avec nos experts. Webinaires en direct, cours vidéo, ebooks et analyses quotidiennes.
            </p>
            <Button size="lg" variant="outline">
              Accéder aux formations
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Commencez à Trader Aujourd'hui
            </h2>
            <p className="text-xl text-white/90">
              Ouvrez un compte et recevez un bonus de bienvenue de 100€
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                Compte réel
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Compte démo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trading;
