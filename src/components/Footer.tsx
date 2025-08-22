import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">EliteStore</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted destination for premium products with exceptional quality, 
              fast shipping, and outstanding customer service.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Quick Links</h3>
            <div className="space-y-2">
              {['About Us', 'Contact', 'FAQ', 'Shipping Info', 'Returns', 'Size Guide'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Categories</h3>
            <div className="space-y-2">
              {['Electronics', 'Fashion', 'Home & Living', 'Sports', 'Books', 'Beauty'].map((category) => (
                <a 
                  key={category}
                  href="#" 
                  className="block text-background/70 hover:text-background transition-colors text-sm"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Stay Updated</h3>
            <p className="text-background/70 text-sm">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:bg-background/20"
              />
              <Button variant="hero" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-background/70" />
            <div>
              <p className="text-sm text-background/70">Email</p>
              <p className="text-background font-medium">support@elitestore.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-background/70" />
            <div>
              <p className="text-sm text-background/70">Phone</p>
              <p className="text-background font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-background/70" />
            <div>
              <p className="text-sm text-background/70">Address</p>
              <p className="text-background font-medium">123 Commerce St, City, ST 12345</p>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/70 text-sm">
            © 2024 EliteStore. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;