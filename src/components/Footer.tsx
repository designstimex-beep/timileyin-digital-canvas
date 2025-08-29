import { Github, Linkedin, Twitter, Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "mailto:timileyinareola2@gmail.com" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/designstimex-beep", icon: <Github className="h-5 w-5" /> },
    { name: "LinkedIn", href: "#", icon: <Linkedin className="h-5 w-5" /> },
    { name: "Twitter", href: "https://x.com/DeveloperTimmy0", icon: <Twitter className="h-5 w-5" /> },
    { name: "Email", href: "mailto:timileyinareola2@gmail.com", icon: <Mail className="h-5 w-5" /> },
    { name: "Twitter", href: "https://wa.me/2347041538350", icon: <Phone className="h-5 w-5" /> },
    { name: "Instagram", href: "https://instagram.com/developertimmy01", icon: <Instagram className="h-5 w-5" /> },

  ];

  return (
    <footer className="bg-nav-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="animate-fade-in-up">
            <div className="text-2xl font-bold text-foreground mb-4">
              Timileyin <span className="text-hero-primary">Dev</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Creating digital experiences that inspire and engage. 
              Specialized in modern web development and AI integration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="text-muted-foreground hover:text-hero-primary transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-hero-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 bg-background border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-hero-primary hover:border-hero-primary/50 hover:shadow-hero/20 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Timileyin Dev. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-hero-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-hero-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;