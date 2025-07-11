import { Wind, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      "Air Compressors",
      "Air Dryers", 
      "Air Filters",
      "Pneumatic Controls",
      "Custom Solutions"
    ],
    services: [
      "Installation",
      "Maintenance",
      "Repair Services",
      "24/7 Support",
      "Training"
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "News & Updates",
      "Case Studies"
    ],
    support: [
      "Documentation",
      "Technical Support",
      "Warranty",
      "FAQs",
      "Contact"
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay Updated with BREEZE TECHNIQUES
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates on pneumatic technology, product releases, and industry insights.
              </p>
            </div>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-background border-border focus:border-primary"
              />
              <Button variant="hero">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-primary p-2 rounded-lg">
                  <Wind className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-xl font-bold text-foreground">BREEZE</span>
                  <span className="text-xl font-bold text-primary"> TECHNIQUES</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Leading manufacturer of premium pneumatic equipment, delivering 
                innovative solutions for industrial applications worldwide.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">123 Industrial Ave, Manufacturing District</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">info@breezetechniques.com</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} BREEZE TECHNIQUES. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Cookies
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Made with</span>
              <span className="text-primary">❤️</span>
              <span className="text-sm text-muted-foreground">for Industry</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}