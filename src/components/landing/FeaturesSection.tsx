import { Scan, TrendingUp, ShoppingBag, CloudSun, Smartphone, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "AI Disease Detection",
    description: "Instantly identify crop diseases by scanning leaves with your phone camera.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: ShoppingBag,
    title: "Direct Marketplace",
    description: "Connect directly with buyers and sellers. No middlemen, better prices.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Real-time Prices",
    description: "Get up-to-the-minute market prices for crops across major Kenyan markets.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: CloudSun,
    title: "Smart Weather",
    description: "Localized weather forecasts and alerts to help you plan your farming activities.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designed for every phone. Works perfectly even with low connectivity.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "Verified Users",
    description: "Safe and secure trading with verified profiles and rating systems.",
    color: "bg-rose-100 text-rose-600",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-black/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Why Choose AgriConnect?</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">grow and trade better</span>
          </h3>
          <p className="text-xl text-muted-foreground pt-4">
            We combine cutting-edge technology with local agricultural knowledge to solve real problems for Kenyan farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white dark:bg-card border border-border/50 shadow-sm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
