import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BanqueElectronique from "./pages/BanqueElectronique";
import PortefeuilleElectronique from "./pages/PortefeuilleElectronique";
import MonnaieElectronique from "./pages/MonnaieElectronique";
import Trading from "./pages/Trading";
import Fondateur from "./pages/Fondateur";
import NotFound from "./pages/NotFound";
import FounderSidebar from "./components/FounderSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FounderSidebar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/banque-electronique" element={<BanqueElectronique />} />
          <Route path="/portefeuille-electronique" element={<PortefeuilleElectronique />} />
          <Route path="/monnaie-electronique" element={<MonnaieElectronique />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/fondateur" element={<Fondateur />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
