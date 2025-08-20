import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import { featuredProducts } from "@/data/products";

const Products = () => {

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Natural Products
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our carefully curated collection of organic products, each crafted with 
              the finest herbs and plants to support your well-being journey. From skincare to supplements, 
              every product is made with love and respect for nature.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.id} className="card-nature group hover:shadow-medium transition-all duration-300 slide-up overflow-hidden">
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="relative h-48 bg-gradient-subtle">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {product.badges.map((badge) => (
                          <Badge key={badge} variant="secondary" className="bg-cream/90 text-forest-deep">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      <div className={`absolute top-4 right-4 ${product.bgColor} p-2 rounded-lg`}>
                        <Icon className={`h-5 w-5 ${product.color}`} />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-sm font-body text-muted-foreground">{product.category}</span>
                          <h3 className="font-heading text-xl font-semibold text-foreground">
                            {product.name}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-medium">{product.rating}</span>
                            <span className="text-sm text-muted-foreground">({product.reviews})</span>
                          </div>
                          <div className="font-heading text-lg font-bold text-forest-medium">
                            ${product.price}
                          </div>
                        </div>
                      </div>

                      <p className="font-body text-muted-foreground mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>

                      {/* Key Ingredients */}
                      <div className="mb-4">
                        <h4 className="font-body font-semibold text-sm text-foreground mb-2">Key Ingredients:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.ingredients.slice(0, 3).map((ingredient) => (
                            <span
                              key={ingredient}
                              className="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-body"
                            >
                              {ingredient}
                            </span>
                          ))}
                          {product.ingredients.length > 3 && (
                            <span className="inline-block text-xs text-muted-foreground px-2 py-1">
                              +{product.ingredients.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Variants */}
                      <div className="mb-4">
                        <h4 className="font-body font-semibold text-sm text-foreground mb-2">Available Sizes:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {product.variants.map((variant, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center p-2 bg-secondary/50 rounded text-sm"
                            >
                              <span className="font-body">
                                {variant.type} ({variant.size})
                              </span>
                              <span className="font-medium text-forest-medium">
                                ${variant.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button className="flex-1 btn-nature" size="sm">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button variant="outline" className="btn-outline-nature" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12 slide-up mt-16">
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
      </div>
    </div>
  );
};

export default Products;