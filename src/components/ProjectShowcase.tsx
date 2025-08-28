import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Websites", "AI Apps", "Landing Pages", "Mobile Apps", "Others"];

  const projects = [
    {
      title: "SaaS Analytics Dashboard",
      category: "Websites",
      role: "Full Stack Developer",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      description: "Comprehensive analytics platform with real-time data visualization and custom reporting.",
      image: "/placeholder.svg",
    },
    {
      title: "AI Content Generator",
      category: "AI Apps", 
      role: "AI Integration Specialist",
      tech: ["Next.js", "OpenAI API", "Supabase", "Stripe"],
      description: "Intelligent content creation tool powered by advanced AI models with user management.",
      image: "/placeholder.svg",
    },
    {
      title: "Restaurant Landing Page",
      category: "Landing Pages",
      role: "Frontend Developer",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      description: "Beautiful, responsive landing page with smooth animations and modern design.",
      image: "/placeholder.svg",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      role: "React Native Developer", 
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      description: "Cross-platform mobile app for tracking workouts and nutrition with social features.",
      image: "/placeholder.svg",
    },
    {
      title: "E-learning Platform",
      category: "Websites",
      role: "Full Stack Developer",
      tech: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      description: "Complete learning management system with video calls and progress tracking.",
      image: "/placeholder.svg",
    },
    {
      title: "Chrome Extension",
      category: "Others",
      role: "Browser Extension Developer",
      tech: ["JavaScript", "Chrome APIs", "Local Storage"],
      description: "Productivity extension for managing tasks and bookmarks across browser sessions.",
      image: "/placeholder.svg",
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover My Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my diverse portfolio of projects across different technologies and industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-hero-primary hover:bg-hero-primary/90 shadow-hero/50" 
                  : "hover:border-hero-primary/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-up" style={{ animationDelay: "0.4s" }}>
          {filteredProjects.map((project, index) => (
            <Card 
              key={`${project.title}-${activeCategory}`}
              className="group bg-gradient-card border-border/50 hover:border-hero-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="h-48 bg-muted rounded-t-lg overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-hero-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button size="sm" variant="secondary" className="shadow-lg">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="shadow-lg">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-hero-primary/10 text-hero-primary border-hero-primary/20">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {project.role}
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
                  
                  {/* Action Button */}
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-hero-primary group-hover:text-hero-primary-foreground transition-colors">
                    See Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;