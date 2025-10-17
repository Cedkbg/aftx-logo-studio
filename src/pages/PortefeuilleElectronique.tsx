import { Button } from "@/components/ui/button";
import { Zap, QrCode, Send, Wallet, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import FounderBanner from "@/components/FounderBanner";
import heroWallet from "@/assets/hero-wallet.jpg";

const PortefeuilleElectronique = () => {
  const features = [
    {
      icon: Zap,
      title: "Paiements Instantanés",
      description: "Envoyez et recevez de l'argent en quelques secondes, partout dans le monde"
    },
    {
      icon: QrCode,
      title: "Paiement par QR Code",
      description: "Payez en magasin simplement en scannant un code QR avec votre smartphone"
    },
    {
      icon: Send,
      title: "Transferts Rapides",
      description: "Transférez de l'argent à vos proches instantanément sans frais cachés"
    },
    {
      icon: Wallet,
      title: "Multi-Portefeuilles",
      description: "Gérez plusieurs devises et cartes dans un seul portefeuille sécurisé"
    }
  ];

  const useCases = [
    {
      title: "Pour les particuliers",
      points: [
        "Paiements sans contact",
        "Gestion de budget intégrée",
        "Cashback sur vos achats",
        "Programme de fidélité"
      ]
    },
    {
      title: "Pour les entreprises",
      points: [
        "Solutions de paiement professionnelles",
        "Facturation automatisée",
        "Rapports financiers en temps réel",
        "Intégration API simple"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FounderBanner />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroWallet} 
            alt="Portefeuille Électronique" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-primary/70"></div>
        </div>
        
        <div className="relative container px-4 h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Portefeuille Électronique
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Votre argent, toujours à portée de main. Payez, transférez et gérez vos finances depuis votre mobile.
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Télécharger l'application
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
              Fonctionnalités Puissantes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour gérer votre argent au quotidien
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
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-accent to-accent/80 mb-4">
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Adapté à tous vos besoins
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-foreground mb-6">{useCase.title}</h3>
                  <ul className="space-y-4">
                    {useCase.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "5M+", label: "Transactions par jour" },
              { value: "<1s", label: "Temps de transaction" },
              { value: "0%", label: "Frais de transfert" },
              { value: "150+", label: "Pays supportés" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
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
      <section className="py-20 bg-gradient-to-r from-accent to-primary">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Commencez dès aujourd'hui
            </h2>
            <p className="text-xl text-white/90">
              Téléchargez l'application et profitez de 10€ de bonus de bienvenue
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Télécharger maintenant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortefeuilleElectronique;
