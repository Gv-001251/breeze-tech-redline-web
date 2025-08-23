import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Wind, User } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Wind className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">BREEZE</span>
              <span className="text-xl font-bold text-primary"> TECHNIQUES</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            <Button variant="hero" size="sm">
              Get Quote
            </Button>
            <Link to="/auth">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 pt-2 space-y-2">
                <Button variant="hero" size="sm" className="w-full">
                  Get Quote
                </Button>
                <Link to="/auth" className="block">
                  <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}