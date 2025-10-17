import aftxLogo from "@/assets/aftx-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-6">
      <div className="max-w-5xl w-full text-center space-y-12 animate-fade-in">
        {/* Logo Section */}
        <div className="space-y-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse-glow"></div>
            <img 
              src={aftxLogo} 
              alt="AFTX globale logo" 
              className="relative h-32 md:h-48 w-auto mx-auto object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 hover:scale-105"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            AFTX globale
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Excellence mondiale, innovation locale
          </p>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105">
            Découvrir nos services
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          
          <button className="px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-xl font-semibold text-lg hover:bg-card hover:shadow-lg transition-all duration-300">
            Nous contacter
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {[
            { title: "Global", desc: "Présence mondiale" },
            { title: "Innovation", desc: "Technologies avancées" },
            { title: "Excellence", desc: "Qualité premium" }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
