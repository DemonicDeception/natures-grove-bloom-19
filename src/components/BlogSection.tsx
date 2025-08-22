import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Healing Power of Adaptogenic Herbs",
      excerpt: "Discover how adaptogenic herbs like ashwagandha and rhodiola can help your body manage stress and boost resilience naturally.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Wellness",
      image: "🌿"
    },
    {
      title: "Building Your Natural Skincare Routine",
      excerpt: "Learn how to create an effective skincare routine using only natural, organic ingredients that nourish and protect your skin.",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Beauty",
      image: "✨"
    },
    {
      title: "Mental Wellness Through Plant Medicine",
      excerpt: "Explore the ancient wisdom of plant medicine and how modern science validates traditional approaches to mental health.",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Mental Health",
      image: "🧠"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Wisdom from The Grove
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover expert insights, wellness tips, and the latest research on natural health. 
            Our blog is your guide to living a more balanced, healthy life.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-nature group hover:shadow-medium transition-all duration-300 slide-up overflow-hidden">
              <CardContent className="p-0">
                {/* Image/Icon */}
                <div className="h-48 bg-gradient-accent flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-forest-medium/10 text-forest-medium px-3 py-1 rounded-full text-xs font-body font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-forest-medium transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-body">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span className="font-body">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-body text-forest-medium hover:text-forest-deep group"
                  >
                    Read More 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center slide-up">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-cream mb-4">
            Stay Connected with Nature
          </h3>
          <p className="font-body text-cream/90 mb-6 max-w-lg mx-auto">
            Subscribe to our newsletter for weekly wellness tips, new product updates, and exclusive insights from our herbalists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-cream/30 bg-cream/10 backdrop-blur-sm text-cream placeholder-cream/70 focus:outline-none focus:ring-2 focus:ring-cream/50"
            />
            <Button className="bg-cream text-forest-deep hover:bg-cream/90 rounded-full px-8 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="mt-20 bg-gradient-card rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Get in Touch
          </h3>
          <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
            Have questions about our products or need personalized wellness guidance? We're here to help!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-forest-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                📧
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Email</h4>
              <p className="font-body text-sm text-muted-foreground">hello@naturesgrove.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-forest-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                📞
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Phone</h4>
              <p className="font-body text-sm text-muted-foreground">1-800-NATURE-1</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-forest-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                📍
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Location</h4>
              <p className="font-body text-sm text-muted-foreground">Portland, Oregon</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BlogSection;