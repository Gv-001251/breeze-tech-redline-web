import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Wrench, 
  Shield, 
  Headphones, 
  Truck, 
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    {
      icon: Settings,
      title: "Installation & Commissioning",
      description: "Professional installation and commissioning services ensuring optimal system performance from day one.",
      features: [
        "Site assessment and planning",
        "Professional installation",
        "System commissioning",
        "Performance testing"
      ],
      duration: "1-3 days",
      warranty: "2 years"
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance programs and expert repair services to keep your systems running at peak efficiency.",
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "Parts replacement",
        "Performance optimization"
      ],
      duration: "24/7",
      warranty: "1 year"
    },
    {
      icon: Shield,
      title: "System Upgrades",
      description: "Modernize your existing pneumatic systems with the latest technology and efficiency improvements.",
      features: [
        "Technology assessment",
        "Upgrade planning",
        "Component replacement",
        "System integration"
      ],
      duration: "2-5 days",
      warranty: "3 years"
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support from our certified engineers to minimize downtime and maximize productivity.",
      features: [
        "Remote diagnostics",
        "Technical consultation",
        "Troubleshooting guidance",
        "Emergency response"
      ],
      duration: "24/7",
      warranty: "Ongoing"
    },
    {
      icon: Truck,
      title: "On-Site Services",
      description: "Complete on-site services including installation, maintenance, and emergency repairs at your facility.",
      features: [
        "On-site installation",
        "Field maintenance",
        "Emergency callouts",
        "System training"
      ],
      duration: "Same day",
      warranty: "Service based"
    },
    {
      icon: Clock,
      title: "Scheduled Maintenance",
      description: "Proactive maintenance programs designed to prevent downtime and extend equipment life.",
      features: [
        "Scheduled inspections",
        "Preventive maintenance",
        "Performance monitoring",
        "Maintenance reporting"
      ],
      duration: "Monthly/Quarterly",
      warranty: "Program based"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Complete </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Service</span>
            <span className="text-foreground"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From installation to maintenance, we provide comprehensive support 
            throughout your pneumatic system's lifecycle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-glow transition-smooth border-border bg-card/80 backdrop-blur-sm h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-primary p-3 rounded-xl">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                    {service.duration}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Warranty info */}
                <div className="mt-auto pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Warranty:</span>
                    <span className="text-primary font-medium">{service.warranty}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Service Process</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Initial assessment and requirements analysis" },
              { step: "02", title: "Planning", desc: "Detailed planning and scheduling" },
              { step: "03", title: "Execution", desc: "Professional service delivery" },
              { step: "04", title: "Follow-up", desc: "Quality assurance and support" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-3 h-6 w-6 text-primary/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact our service team today to discuss your requirements and schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Service
            </Button>
            <Button variant="industrial" size="lg">
              Emergency Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}