import { Button } from "@/components/ui/button";
import { Shield, Lock, Smartphone, CreditCard, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import FounderBanner from "@/components/FounderBanner";
import heroBanking from "@/assets/hero-banking.jpg";

const BanqueElectronique = () => {
  const features = [
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Cryptage de bout en bout et authentification multi-facteurs pour protéger vos données"
    },
    {
      icon: Lock,
      title: "Comptes Protégés",
      description: "Surveillance 24/7 et notifications en temps réel pour toutes vos transactions"
    },
    {
      icon: Smartphone,
      title: "Banque Mobile",
      description: "Gérez tous vos comptes depuis votre smartphone avec notre application intuitive"
    },
    {
      icon: CreditCard,
      title: "Cartes Virtuelles",
      description: "Créez des cartes virtuelles instantanées pour vos achats en ligne sécurisés"
    }
  ];

  const benefits = [
    "Ouverture de compte en 5 minutes",
    "Transferts internationaux instantanés",
    "Frais bancaires réduits de 80%",
    "Support client disponible 24/7",
    "Taux d'intérêt compétitifs",
    "Gestion multi-devises"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FounderBanner />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBanking} 
            alt="Banque Électronique" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/70"></div>
        </div>
        
        <div className="relative container px-4 h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              AFTX banque
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              L'avenir de la banque est numérique. Gérez vos finances en toute simplicité avec nos solutions bancaires innovantes.
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Ouvrir un compte
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
              Fonctionnalités Avancées
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profitez d'une expérience bancaire moderne avec des outils puissants
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
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4">
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Pourquoi choisir notre banque électronique ?
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Prêt à démarrer ?
            </h2>
            <p className="text-xl text-white/90">
              Rejoignez des millions d'utilisateurs qui font confiance à AFRIFINETECH X
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Créer mon compte gratuitement
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BanqueElectronique;
