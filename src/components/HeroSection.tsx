import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-herbs.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Organic herbs and natural wellness products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 to-forest-medium/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cream/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-cream/30">
            <Leaf className="h-4 w-4 text-cream" />
            <span className="font-body text-sm text-cream">100% Organic & Natural</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
            Nurture Your Body with 
            <span className="block bg-gradient-to-r from-sage to-accent bg-clip-text text-transparent">
              Nature's Wisdom
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg sm:text-xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover premium organic plant and herb products for health, wellness, healing, and skincare. 
            Expert guidance and natural solutions for your well-being journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="/products">
              <Button size="lg" className="btn-nature rounded-full px-8 py-3 text-base font-medium group">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#blog">
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline-nature rounded-full px-8 py-3 text-base font-medium bg-cream/10 backdrop-blur-sm border-cream/30 text-cream hover:bg-cream hover:text-forest-deep"
              >
                Read Our Blog
              </Button>
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto slide-up">
            <div className="flex flex-col items-center text-center p-4 bg-cream/10 backdrop-blur-sm rounded-lg border border-cream/20">
              <Heart className="h-8 w-8 text-sage mb-2" />
              <h3 className="font-body font-semibold text-cream mb-1">Wellness</h3>
              <p className="font-body text-sm text-cream/80">Mind & body harmony</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-cream/10 backdrop-blur-sm rounded-lg border border-cream/20">
              <Leaf className="h-8 w-8 text-sage mb-2" />
              <h3 className="font-body font-semibold text-cream mb-1">Natural</h3>
              <p className="font-body text-sm text-cream/80">Pure organic ingredients</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-cream/10 backdrop-blur-sm rounded-lg border border-cream/20">
              <Shield className="h-8 w-8 text-sage mb-2" />
              <h3 className="font-body font-semibold text-cream mb-1">Trusted</h3>
              <p className="font-body text-sm text-cream/80">Expert crafted formulas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;