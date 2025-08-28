import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-hero-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-hero-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-hero-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Let's Build Something{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm available for freelance projects, collaborations, and long-term work. 
            Ready to turn your ideas into reality with cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <Button onClick={()=>{window.location.href="mailto:timileyinareola2@gmail.com"}} variant="hero" size="lg" className="group shadow-hero">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button onClick={()=>{window.location.href="https://wa.me/2347041538350"}} variant="outline" size="lg" className="group border-hero-primary/30 text-hero-primary hover:bg-hero-primary hover:text-hero-primary-foreground">
              <MessageCircle className="mr-2 h-5 w-5" />
              Let's Chat
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 animate-scale-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground mb-4">
              Typically responds within 24 hours
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground/80">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for work
              </span>
              <span>•</span>
              <span>Remote & On-site</span>
              <span>•</span>
              <span>Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;