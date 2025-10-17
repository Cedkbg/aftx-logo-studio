import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import cedKabongo from "@/assets/ced-kabongo.jpg";

const FounderBanner = () => {
  return (
    <Link to="/fondateur" className="block">
      <div className="bg-gradient-to-r from-primary via-primary-glow to-accent py-4 hover:opacity-95 transition-opacity">
        <div className="container px-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={cedKabongo} 
                alt="Ced Kabongo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-secondary"
              />
              <div className="text-white">
                <p className="font-semibold">Ced Kabongo - Fondateur & CEO</p>
                <p className="text-sm text-white/90">Pionnier de la fintech africaine</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-white hidden sm:block" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FounderBanner;
