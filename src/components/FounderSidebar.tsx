import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import cedKabongo from "@/assets/ced-kabongo.jpg";

const FounderSidebar = () => {
  return (
    <Link to="/fondateur">
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-gradient-to-b from-primary via-primary-glow to-accent shadow-2xl hover:shadow-primary/50 transition-all duration-300 group">
          <div className="p-4 flex flex-col items-center gap-3 min-w-[120px]">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img 
                src={cedKabongo} 
                alt="Ced Kabongo" 
                className="relative h-20 w-20 rounded-full object-cover border-3 border-white shadow-lg"
              />
            </div>
            <div className="text-white text-center">
              <p className="font-bold text-sm">Ced Kabongo</p>
              <p className="text-xs text-white/90">Fondateur</p>
            </div>
            <ChevronRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FounderSidebar;
