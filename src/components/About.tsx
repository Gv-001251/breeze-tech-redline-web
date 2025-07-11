import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Calendar, 
  Globe,
  CheckCircle,
  Target,
  Lightbulb,
  Heart
} from "lucide-react";

export function About() {
  const stats = [
    { icon: Calendar, value: "25+", label: "Years Experience" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: Globe, value: "15+", label: "Countries Served" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "We deliver pneumatic solutions with unmatched precision and reliability for critical industrial applications."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Continuously advancing pneumatic technology to provide cutting-edge solutions for modern manufacturing."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Building lasting relationships through exceptional service, quality products, and dedicated support."
    }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "CE Marking Compliance",
    "Energy Star Partner",
    "Industrial Safety Standards"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            About BREEZE TECHNIQUES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Leading </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Pneumatic</span>
            <span className="text-foreground"> Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over two decades, BREEZE TECHNIQUES has been at the forefront of pneumatic technology, 
            delivering exceptional solutions that power industries worldwide.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 1999, BREEZE TECHNIQUES began as a small engineering company with a big vision: 
              to revolutionize pneumatic systems for industrial applications. Today, we're proud to be 
              a leading manufacturer and supplier of premium pneumatic equipment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction has driven us to develop 
              state-of-the-art air compressors, dryers, filters, and complete pneumatic solutions that 
              meet the evolving needs of modern manufacturing.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Key Achievements:</h4>
              <ul className="space-y-2">
                {[
                  "First to introduce energy-efficient refrigerating compressors in the region",
                  "Pioneered heatless dryer technology for extreme environments",
                  "Established service network across 15+ countries",
                  "Achieved 99.5% customer satisfaction rating"
                ].map((achievement, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-primary p-3 rounded-xl w-fit mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Certifications & Standards</h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2 border-primary/20 text-primary">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-glow transition-smooth border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary p-4 rounded-xl w-fit mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Expert Engineering Team</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of experienced engineers, technicians, and support specialists brings 
                decades of combined expertise in pneumatic systems design, manufacturing, and service.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Certified pneumatic engineers",
                  "24/7 technical support team",
                  "Experienced field service technicians",
                  "Dedicated customer success managers"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="industrial">
                Meet Our Team
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Engineers</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Technicians</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Support Staff</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Locations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}