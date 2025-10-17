import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Lock, Coins, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import FounderBanner from "@/components/FounderBanner";
import heroCurrency from "@/assets/hero-currency.jpg";

const MonnaieElectronique = () => {
  const features = [
    {
      icon: Globe,
      title: "Accès Global",
      description: "Tradez et stockez plus de 200 crypto-monnaies depuis n'importe où dans le monde"
    },
    {
      icon: TrendingUp,
      title: "Croissance Optimale",
      description: "Bénéficiez de rendements attractifs avec nos programmes de staking et d'épargne"
    },
    {
      icon: Lock,
      title: "Sécurité Blockchain",
      description: "Vos actifs sont protégés par la technologie blockchain la plus avancée"
    },
    {
      icon: Coins,
      title: "Diversification",
      description: "Investissez dans un large éventail d'actifs numériques et de crypto-monnaies"
    }
  ];

  const cryptos = [
    { name: "Bitcoin (BTC)", description: "La première et plus célèbre crypto-monnaie" },
    { name: "Ethereum (ETH)", description: "Plateforme leader pour les smart contracts" },
    { name: "AFTX Coin", description: "Notre propre monnaie numérique avec avantages exclusifs" },
    { name: "Stablecoins", description: "Monnaies stables adossées aux devises traditionnelles" }
  ];

  const services = [
    "Achat et vente de crypto-monnaies",
    "Portefeuille sécurisé multi-devises",
    "Staking avec rendements jusqu'à 12% APY",
    "Cartes de débit crypto",
    "Échange instantané entre crypto-monnaies",
    "Formation et guides pour débutants"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FounderBanner />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCurrency} 
            alt="Monnaie Électronique" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-primary/80 to-accent/70"></div>
        </div>
        
        <div className="relative container px-4 h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Monnaie Électronique
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Entrez dans l'économie du futur. Investissez et gérez vos crypto-monnaies en toute sécurité.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Commencer à investir
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Pourquoi les Crypto-monnaies ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les avantages des actifs numériques
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
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 mb-4">
                    <Icon className="h-6 w-6 text-secondary-foreground" />
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

      {/* Supported Cryptos */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Crypto-monnaies Supportées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cryptos.map((crypto, index) => (
                <div key={index} className="p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-foreground mb-2">{crypto.name}</h3>
                  <p className="text-muted-foreground">{crypto.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Nos Services Crypto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{service}</p>
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
              { value: "200+", label: "Crypto-monnaies" },
              { value: "12%", label: "Rendement APY" },
              { value: "$2B+", label: "Volume échangé" },
              { value: "24/7", label: "Trading disponible" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
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
      <section className="py-20 bg-gradient-to-r from-secondary via-primary to-accent">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Investissez dans votre avenir
            </h2>
            <p className="text-xl text-white/90">
              Obtenez 50€ en AFTX Coin en créant votre compte aujourd'hui
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Créer mon portefeuille crypto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonnaieElectronique;
