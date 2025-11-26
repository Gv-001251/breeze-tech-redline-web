import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS
  const PUBLIC_KEY = 'maDLHCzI4jGPlQ69M';
  const SERVICE_ID = 'service_otredh8';
  const TEMPLATE_ID = 'template_ex0spwi';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with public key
      emailjs.init(PUBLIC_KEY);
      
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        service: formData.service || 'Not specified',
        message: formData.message,
        to_email: 'info@breezetechniques.com' // Default recipient
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );
      
      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Message Failed to Send",
        description: "Please try again or contact us directly at info@breezetechniques.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Facility",
      details: ["123 Industrial Avenue", "Manufacturing District", "City, State 12345"],
      badge: "Headquarters"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Toll Free: 1-800-BREEZE"],
      badge: "24/7 Support"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@breezetechniques.com", "sales@breezetechniques.com", "support@breezetechniques.com"],
      badge: "Quick Response"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Emergency Only"],
      badge: "Extended Hours"
    }
  ];

  const services = [
    "Air Compressor Installation",
    "Air Dryer Service",
    "Filter Replacement",
    "System Maintenance",
    "Emergency Repair",
    "Custom Solution",
    "Technical Consultation",
    "Training & Support"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Contact </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Our</span>
            <span className="text-foreground"> Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your pneumatic needs? Our team of experts is here to help you 
            find the perfect solution for your industrial requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 lg:mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
                Whether you need a quote, technical support, or want to learn more about our products, 
                we're here to help. Contact us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-glow transition-smooth border-border bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex items-center justify-between mb-3 lg:mb-4">
                      <div className="bg-gradient-primary p-2 lg:p-3 rounded-xl">
                        <info.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground" />
                      </div>
                      <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                        {info.badge}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 lg:mb-3 group-hover:text-primary transition-smooth text-sm lg:text-base">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact */}
            <Card className="bg-muted/30 border-border">
              <CardContent className="p-4 lg:p-6">
                <h4 className="font-semibold text-foreground mb-3 lg:mb-4 text-sm lg:text-base">Emergency Support</h4>
                <p className="text-muted-foreground text-xs lg:text-sm mb-3 lg:mb-4">
                  Need immediate assistance? Our emergency support team is available 24/7 
                  for critical system failures and urgent repairs.
                </p>
                <Button variant="hero" size="sm" className="w-full text-xs lg:text-sm">
                  Call Emergency Line: 8056765859
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border shadow-card">
            <CardContent className="p-4 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 lg:mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-primary focus:outline-none text-foreground"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements or questions..."
                    rows={5}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  We'll respond to your inquiry within 24 hours
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}