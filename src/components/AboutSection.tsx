import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Award, Users, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "Every product is certified organic and sourced from sustainable farms."
    },
    {
      icon: Award,
      title: "Expert Crafted",
      description: "Formulated by herbalists and wellness experts with decades of experience."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community around natural health and wellness."
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "We believe in treating the whole person - mind, body, and spirit."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Rooted in Nature, 
              <span className="text-forest-medium"> Guided by Science</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              At The Nature's Grove, we believe that the earth provides everything we need for optimal health and wellness. 
              Founded by a team of herbalists, nutritionists, and wellness experts, we're dedicated to bringing you the 
              finest organic products that honor traditional wisdom while embracing modern scientific understanding.
            </p>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Our journey began with a simple mission: to make natural health accessible, reliable, and effective for everyone. 
              Every product in our collection is carefully sourced, rigorously tested, and crafted with the highest standards 
              of quality and purity.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-forest-medium mb-1">10+</div>
                <div className="font-body text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-forest-medium mb-1">50K+</div>
                <div className="font-body text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-forest-medium mb-1">100%</div>
                <div className="font-body text-sm text-muted-foreground">Organic Certified</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-forest-medium mb-1">200+</div>
                <div className="font-body text-sm text-muted-foreground">Natural Products</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="slide-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="card-nature hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="bg-forest-medium/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-forest-medium" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gradient-accent rounded-xl border border-sage/20">
              <h3 className="font-heading text-xl font-semibold text-forest-deep mb-3">
                Our Mission
              </h3>
              <p className="font-body text-forest-deep/80">
                To empower individuals on their wellness journey by providing the highest quality organic products, 
                educational resources, and compassionate support for a naturally healthy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;