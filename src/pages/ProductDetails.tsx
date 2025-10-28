import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { featuredProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = featuredProducts.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/products")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <section className="py-12 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/products")}
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>

            <Card className="card-nature overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="relative h-96 md:h-full bg-gradient-subtle">
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
                    <div className={`absolute top-4 right-4 ${product.bgColor} p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${product.color}`} />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="text-sm font-body text-muted-foreground">{product.category}</span>
                      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                        {product.name}
                      </h1>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                        <span className="text-lg font-medium">{product.rating}</span>
                        <span className="text-muted-foreground">({product.reviews} reviews)</span>
                      </div>
                      <div className="font-heading text-2xl font-bold text-forest-medium">
                        ${product.price}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h2 className="font-heading text-xl font-semibold mb-3">Description</h2>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h2 className="font-heading text-xl font-semibold mb-3">Key Ingredients</h2>
                      <div className="flex flex-wrap gap-2">
                        {product.ingredients.map((ingredient) => (
                          <span
                            key={ingredient}
                            className="inline-block bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-sm font-body"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h2 className="font-heading text-xl font-semibold mb-3">Available Sizes</h2>
                      <div className="grid gap-3">
                        {product.variants.map((variant, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg"
                          >
                            <span className="font-body font-medium">
                              {variant.type} ({variant.size})
                            </span>
                            <span className="font-heading text-lg font-bold text-forest-medium">
                              ${variant.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full btn-nature" 
                      size="lg"
                      onClick={() => addToCart({
                        id: product.id.toString(),
                        name: product.name,
                        price: product.price,
                        image: product.image
                      })}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
