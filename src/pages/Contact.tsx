import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AFRIFINETECH X est à votre écoute. N'hésitez pas à nous contacter pour toute question ou demande d'information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <Input id="name" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <Input id="subject" placeholder="Sujet de votre message" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Votre message..."
                    rows={5}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:cedkbg07@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        cedkbg07@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone / WhatsApp</h3>
                      <a 
                        href="https://wa.me/974957156"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +974 957 156
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Kinshasa, République Démocratique du Congo
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Suivez-nous</h2>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a 
                      href="https://web.facebook.com/cedrick.kabongo.984" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a 
                      href="https://x.com/Ced07LejeuneIr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a 
                      href="https://www.linkedin.com/in/ced-kabongo-678403292/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Heures d'ouverture</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lundi - Vendredi</span>
                    <span className="font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Samedi</span>
                    <span className="font-medium">9h00 - 14h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimanche</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
