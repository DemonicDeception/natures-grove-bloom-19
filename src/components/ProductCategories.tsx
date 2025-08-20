import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, Leaf, Brain, Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const ProductCategories = () => {
  const { addToCart } = useCart();

  const categories = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Natural supplements and herbal remedies to support your overall health and vitality.",
      products: [
        { id: "immune-booster", name: "Immune Booster", price: 29.99 },
        { id: "energy-blend", name: "Energy Blend", price: 24.99 },
        { id: "digestive-support", name: "Digestive Support", price: 19.99 },
        { id: "sleep-aid", name: "Sleep Aid", price: 22.99 }
      ],
      color: "text-forest-medium",
      bgColor: "bg-forest-medium/10"
    },
    {
      icon: Sparkles,
      title: "Skincare & Beauty",
      description: "Organic skincare solutions that nourish and rejuvenate your skin naturally.",
      products: [
        { id: "face-serum", name: "Face Serum", price: 45.99 },
        { id: "body-oil", name: "Body Oil", price: 32.99 },
        { id: "cleanser", name: "Cleanser", price: 18.99 },
        { id: "anti-aging-cream", name: "Anti-aging Cream", price: 56.99 }
      ],
      color: "text-sage",
      bgColor: "bg-sage/10"
    },
    {
      icon: Brain,
      title: "Mental Wellness",
      description: "Calming herbs and adaptogens to support emotional balance and mental clarity.",
      products: [
        { id: "stress-relief", name: "Stress Relief", price: 27.99 },
        { id: "focus-blend", name: "Focus Blend", price: 31.99 },
        { id: "mood-support", name: "Mood Support", price: 25.99 },
        { id: "meditation-aid", name: "Meditation Aid", price: 20.99 }
      ],
      color: "text-moss",
      bgColor: "bg-moss/10"
    },
    {
      icon: Leaf,
      title: "Healing Herbs",
      description: "Traditional medicinal plants and herbal preparations for natural healing.",
      products: [
        { id: "pain-relief", name: "Pain Relief", price: 33.99 },
        { id: "inflammation-support", name: "Inflammation Support", price: 28.99 },
        { id: "recovery-blend", name: "Recovery Blend", price: 35.99 },
        { id: "detox-tea", name: "Detox Tea", price: 16.99 }
      ],
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
                      <div className="space-y-2 mb-4">
                        {category.products.map((product, productIndex) => (
                          <div
                            key={productIndex}
                            className="flex items-center justify-between p-2 bg-background/50 rounded-lg"
                          >
                            <div className="flex-1">
                              <span className="font-body text-sm font-medium text-foreground">
                                {product.name}
                              </span>
                              <span className="text-xs text-muted-foreground ml-2">
                                ${product.price}
                              </span>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => addToCart(product)}
                              className="h-8 w-8 p-0 hover:bg-primary/10"
                            >
                              <ShoppingCart className="h-3 w-3" />
                            </Button>
                          </div>
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