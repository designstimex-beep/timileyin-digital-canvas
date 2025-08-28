const Platforms = () => {
  const platforms = [
    { name: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg" },
    { name: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork-1.svg" },
    { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
    { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg" },
    { name: "Behance", logo: "https://cdn.worldvectorlogo.com/logos/behance-1.svg" },
    { name: "Dribbble", logo: "https://cdn.worldvectorlogo.com/logos/dribbble-icon.svg" },
  ];

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Find Me On These Platforms
          </h2>
          <p className="text-muted-foreground">
            Connect with me and explore my work across various professional networks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
          {platforms.map((platform, index) => (
            <div 
              key={platform.name}
              className="flex flex-col items-center group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mb-3 p-3 rounded-xl bg-background border border-border/50 group-hover:border-hero-primary/50 transition-all duration-300 group-hover:shadow-hero/20 group-hover:-translate-y-1">
                <img 
                  src={platform.logo} 
                  alt={platform.name}
                  className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;