const stats = [
  { value: '10,000+', label: 'Active Farmers' },
  { value: '500+', label: 'Verified Buyers' },
  { value: '47', label: 'Counties Covered' },
  { value: 'KES 50M+', label: 'Transactions Processed' },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center px-4 animate-in slide-in-from-bottom-5 duration-700"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-white/80 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
