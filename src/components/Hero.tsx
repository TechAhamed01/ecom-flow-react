import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary-foreground fill-current" />
            <span className="text-primary-foreground text-sm font-medium">
              Premium Quality Products
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover Amazing
            <span className="block text-primary-glow">
              Products
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Shop the latest trends and premium products with fast shipping, 
            excellent customer service, and unbeatable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group">
              Shop Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
            >
              Browse Categories
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">10K+</div>
              <div className="text-primary-foreground/70 text-sm">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">50K+</div>
              <div className="text-primary-foreground/70 text-sm">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">4.9</div>
              <div className="text-primary-foreground/70 text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl animate-bounce-gentle" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary-foreground/10 rounded-full blur-2xl animate-bounce-gentle" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;