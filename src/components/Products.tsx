import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Gauge, 
  Filter, 
  Snowflake, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

export function Products() {
  const products = [
    {
      id: 1,
      name: "Refrigerating Air Compressors",
      description: "High-efficiency refrigerating air compressors designed for continuous operation with advanced cooling systems.",
      icon: Snowflake,
      features: [
        "Energy efficient operation",
        "Low maintenance design",
        "Advanced cooling system",
        "Quiet operation"
      ],
      capacity: "5-500 CFM",
      pressure: "80-175 PSI",
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Heatless Air Dryers",
      description: "State-of-the-art heatless air dryers that remove moisture without external heat sources.",
      icon: Zap,
      features: [
        "No external heat required",
        "Consistent dew point",
        "Automatic regeneration",
        "Corrosion resistant"
      ],
      capacity: "10-1000 CFM",
      dewPoint: "-40°F to -100°F",
      badge: "Eco-Friendly"
    },
    {
      id: 3,
      name: "Premium Air Filters",
      description: "High-performance filtration systems ensuring clean, dry compressed air for critical applications.",
      icon: Filter,
      features: [
        "99.9% particle removal",
        "Multiple filtration stages",
        "Easy maintenance",
        "Long service life"
      ],
      capacity: "5-2000 CFM",
      efficiency: "99.9%",
      badge: "Premium Quality"
    },
    {
      id: 4,
      name: "Pneumatic Control Systems",
      description: "Complete pneumatic control solutions with advanced monitoring and automation capabilities.",
      icon: Gauge,
      features: [
        "Smart control panels",
        "Remote monitoring",
        "Automated operation",
        "Energy optimization"
      ],
      capacity: "Custom",
      control: "PLC Based",
      badge: "Smart Technology"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Our Product Range
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Premium </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Pneumatic</span>
            <span className="text-foreground"> Equipment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of industrial pneumatic solutions, 
            engineered for reliability, efficiency, and performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-glow transition-smooth border-border bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-gradient-primary p-3 rounded-xl">
                    <product.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {product.badge}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg border border-border/50">
                  <div>
                    <div className="text-sm text-muted-foreground">Capacity</div>
                    <div className="font-semibold text-foreground">{product.capacity}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {product.pressure ? "Pressure" : product.dewPoint ? "Dew Point" : product.efficiency ? "Efficiency" : "Control"}
                    </div>
                    <div className="font-semibold text-foreground">
                      {product.pressure || product.dewPoint || product.efficiency || product.control}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="industrial" className="w-full group">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our engineering team can design and manufacture custom pneumatic systems 
            tailored to your specific industrial requirements.
          </p>
          <Button variant="hero" size="lg">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}