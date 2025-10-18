import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom"; // <- plus de BrowserRouter ici
import Index from "./pages/Index";
import BanqueElectronique from "./pages/BanqueElectronique";
import PortefeuilleElectronique from "./pages/PortefeuilleElectronique";
import MonnaieElectronique from "./pages/MonnaieElectronique";
import Trading from "./pages/Trading";
import Fondateur from "./pages/Fondateur";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FounderSidebar from "./components/FounderSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FounderSidebar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/banque-electronique" element={<BanqueElectronique />} />
        <Route path="/portefeuille-electronique" element={<PortefeuilleElectronique />} />
        <Route path="/monnaie-electronique" element={<MonnaieElectronique />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/fondateur" element={<Fondateur />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
