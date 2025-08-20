import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, Leaf, Brain, Star, ShoppingCart } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Natural supplements and herbal remedies to support your overall health and vitality.",
      products: ["Immune Boosters", "Energy Blends", "Digestive Support", "Sleep Aids"],
      color: "text-forest-medium",
      bgColor: "bg-forest-medium/10"
    },
    {
      icon: Sparkles,
      title: "Skincare & Beauty",
      description: "Organic skincare solutions that nourish and rejuvenate your skin naturally.",
      products: ["Face Serums", "Body Oils", "Cleansers", "Anti-aging Creams"],
      color: "text-sage",
      bgColor: "bg-sage/10"
    },
    {
      icon: Brain,
      title: "Mental Wellness",
      description: "Calming herbs and adaptogens to support emotional balance and mental clarity.",
      products: ["Stress Relief", "Focus Blends", "Mood Support", "Meditation Aids"],
      color: "text-moss",
      bgColor: "bg-moss/10"
    },
    {
      icon: Leaf,
      title: "Healing Herbs",
      description: "Traditional medicinal plants and herbal preparations for natural healing.",
      products: ["Pain Relief", "Inflammation Support", "Recovery Blends", "Detox Teas"],
      color: "text-earth",
      bgColor: "bg-earth/10"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Natural Solutions for Every Need
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collection of organic products, each crafted with 
            the finest herbs and plants to support your well-being journey.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Shop by Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="card-nature group hover:shadow-medium transition-all duration-300 slide-up">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className={`${category.bgColor} p-4 rounded-lg inline-flex mb-4`}>
                        <Icon className={`h-8 w-8 ${category.color}`} />
                      </div>
                      <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {category.title}
                      </h4>
                      <p className="font-body text-muted-foreground mb-4 text-sm">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-1 justify-center mb-4">
                        {category.products.map((product, productIndex) => (
                          <span
                            key={productIndex}
                            className="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-body"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="btn-outline-nature group-hover:bg-forest-medium group-hover:text-cream group-hover:border-forest-medium transition-all duration-300"
                      >
                        Browse {category.title}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12 slide-up">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-cream mb-4">
            Not Sure Where to Start?
          </h3>
          <p className="font-body text-cream/90 mb-6 max-w-lg mx-auto">
            Take our wellness quiz to discover the perfect natural products for your unique needs and goals.
          </p>
          <Button size="lg" className="bg-cream text-forest-deep hover:bg-cream/90 rounded-full px-8">
            Take Wellness Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;