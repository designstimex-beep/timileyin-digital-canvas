import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const stats = [
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Years Experience", value: "5+" },
  ];

  const featuredProjects = [
    {
      title: "AI Chat Platform",
      category: "Web App",
      description: "Modern chat application with AI integration and real-time messaging.",
      tech: ["React", "TypeScript", "Supabase", "AI"],
      image: "/image2.png",
    },
    {
      title: "E-commerce Dashboard",
      category: "Dashboard",
      description: "Comprehensive admin panel with analytics and inventory management.",
      tech: ["Next.js", "Tailwind", "PostgreSQL"],
      image: "/image3.png",
    },
    {
      title: "PAYROT Website",
      category: "Landing Page",
      description: "Landing Page Projects: Photos, videos, logos, illustrations and branding Behance.",
      tech: ["React", "Framer Motion", "Vercel"],
      image: "/image4.png",
    },
  ];

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Future of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I design and build modern websites, AI apps, and digital solutions 
            that help businesses grow and thrive in the digital age.
          </p>
          <Button variant="hero" size="lg" className="group">
            Explore My Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
          {stats.map((stat, index) => (
            <Card key={stat.label} className="bg-gradient-card border-border/50 hover:shadow-hero transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-hero-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-lg">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="animate-scale-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="group bg-gradient-card border-border/50 hover:border-hero-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="h-48 bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-hero-primary/10 text-hero-primary border-hero-primary/20">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-hero-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;