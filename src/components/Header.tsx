import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import afrifintechLogo from "@/assets/afrifinetech-logo.png";

const Header = () => {
  const location = useLocation();

  const services = [
    { title: "Banque Électronique", url: "/banque-electronique", description: "Solutions bancaires digitales innovantes" },
    { title: "Portefeuille Électronique", url: "/portefeuille-electronique", description: "Paiements mobiles sécurisés" },
    { title: "Monnaie Électronique", url: "/monnaie-electronique", description: "Crypto-monnaies et actifs digitaux" },
    { title: "Trading & Broker", url: "/trading", description: "Plateforme de trading professionnel" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={afrifintechLogo} alt="AFRIFINETECH X Logo" className="h-10 w-10" />
          <div>
            <h1 className="text-xl font-bold text-foreground">AFRIFINTECH X</h1>
            <p className="text-xs text-muted-foreground">AFTX Globale</p>
          </div>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Accueil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <Link to="/banque-electronique">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Banque Électronique</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Solutions bancaires digitales innovantes
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link to="/portefeuille-electronique">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Portefeuille Électronique</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Paiements mobiles sécurisés
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link to="/monnaie-electronique">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Monnaie Électronique</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Crypto-monnaies et actifs digitaux
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link to="/trading">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Trading & Broker</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Plateforme de trading professionnel
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/fondateur">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Notre Fondateur
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 hidden sm:flex">
            <Link to="/contact">Contact</Link>
          </Button>

          {/* Menu Hamburger Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Link to="/" className="flex items-center gap-3">
                    <img src={afrifintechLogo} alt="AFRIFINETECH X Logo" className="h-8 w-8" />
                    <div>
                      <h2 className="text-lg font-bold">AFRIFINETECH X</h2>
                      <p className="text-xs text-muted-foreground">AFTX Globale</p>
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Accueil
                </Link>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors">
                    Services
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 ml-4 flex flex-col gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.url}
                        to={service.url}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Link 
                  to="/fondateur" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Notre Fondateur
                </Link>

                <Link 
                  to="/contact" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
