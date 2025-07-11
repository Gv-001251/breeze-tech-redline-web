import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial Manufacturing"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Leading Pneumatic Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Precision</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Pneumatic
                </span>
                <br />
                <span className="text-foreground">Solutions</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                BREEZE TECHNIQUES delivers cutting-edge pneumatic systems, air compressors, 
                dryers, and filtration solutions for industrial excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button variant="industrial" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div>
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right side - Features grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-card">
                <div className="text-2xl font-bold text-primary mb-2">Air Compressors</div>
                <p className="text-muted-foreground text-sm">High-efficiency refrigerating air compressors</p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-card">
                <div className="text-2xl font-bold text-primary mb-2">Air Dryers</div>
                <p className="text-muted-foreground text-sm">Advanced heatless and heated dryer systems</p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-card">
                <div className="text-2xl font-bold text-primary mb-2">Air Filters</div>
                <p className="text-muted-foreground text-sm">Premium filtration for clean compressed air</p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-card">
                <div className="text-2xl font-bold text-primary mb-2">Custom Solutions</div>
                <p className="text-muted-foreground text-sm">Tailored pneumatic systems for your needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}