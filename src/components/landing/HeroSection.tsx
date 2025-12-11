import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Layer with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-pan-zoom"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
          }}
        />
        {/* Dynamic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
      </div>

      {/* Floating UI Elements (Parallax feel) */}
      <div className="hidden lg:block absolute right-20 top-1/3 z-20 animate-float">
        <div className="glass p-4 rounded-2xl flex items-center gap-4 max-w-xs transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="h-10 w-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="text-emerald-400 h-6 w-6" />
          </div>
          <div>
            <p className="text-white/60 text-xs uppercase tracking-wider">Crop Health</p>
            <p className="text-white font-bold text-lg">98% Optimal</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-40 bottom-1/3 z-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass p-4 rounded-2xl flex items-center gap-4 max-w-xs transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="h-10 w-10 bg-amber-500/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="text-amber-400 h-6 w-6" />
          </div>
          <div>
            <p className="text-white/60 text-xs uppercase tracking-wider">Market Price</p>
            <p className="text-white font-bold text-lg text-emerald-400">+12% Today</p>
          </div>
        </div>
      </div>

      <div className="container relative z-30 px-4 pt-20">
        <div className="max-w-3xl space-y-8 animate-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            The Future of African Agriculture is Here
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Empowering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-lime-400">
              Farmers & Buyers
            </span> <br />
            with AI Technology
          </h1>

          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Connect directly with markets, detect crop diseases instantly, and access real-time weather insights.
            Transform your harvest into profit with Kenya's most advanced agri-tech platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-full text-lg shadow-glow transition-all hover:scale-105">
                Join Now - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-full text-lg backdrop-blur-md">
                <Play className="mr-2 h-5 w-5 fill-current" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="pt-8 flex items-center gap-8 text-white/60">
            <div>
              <p className="text-2xl font-bold text-white">10k+</p>
              <p className="text-sm">Farmers</p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-white">KES 50M+</p>
              <p className="text-sm">Traded</p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="text-sm">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30 text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
