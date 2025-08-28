import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Palette, Zap } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies and best practices."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Integration",
      description: "Implementing cutting-edge AI solutions to enhance application functionality."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="animate-fade-in-up">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-float" />
                <img 
                  src={profileAvatar}
                  alt="Timileyin Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-hero-primary/20 shadow-hero relative z-10"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-hero-primary rounded-full animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-hero-accent rounded-full animate-float" style={{ animationDelay: "2s" }} />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-hero-primary">Me</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm <span className="text-foreground font-semibold">Timileyin</span>, a creative developer passionate about 
                AI, web applications, and modern design. I build fast, user-friendly digital experiences 
                that help businesses achieve their goals.
              </p>
              
              <p>
                With over 5 years of experience in the industry, I've worked with startups and established 
                companies to deliver high-quality digital solutions. My expertise spans across frontend 
                and backend development, with a special focus on integrating AI technologies.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="hero" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-scale-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What I Do Best
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title}
                className="group bg-gradient-card border-border/50 hover:border-hero-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-hero-primary/10 text-hero-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-foreground mb-4 group-hover:text-hero-primary transition-colors">
                    {skill.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;