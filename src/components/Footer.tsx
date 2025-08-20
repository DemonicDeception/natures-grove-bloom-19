import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Products: [
      "Health & Wellness",
      "Skincare & Beauty", 
      "Mental Wellness",
      "Healing Herbs"
    ],
    Company: [
      "About Us",
      "Our Story",
      "Certifications",
      "Careers"
    ],
    Support: [
      "Contact Us",
      "FAQ",
      "Shipping Info",
      "Returns"
    ],
    Resources: [
      "Blog",
      "Wellness Guide",
      "Herb Library",
      "Research"
    ]
  };

  return (
    <footer className="bg-forest-deep text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-sage" />
              <span className="font-heading text-xl font-bold">
                The Nature's Grove
              </span>
            </div>
            <p className="font-body text-cream/80 mb-6 leading-relaxed">
              Nurturing wellness through nature's wisdom. Discover organic products 
              crafted with care for your health, beauty, and peace of mind.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sage" />
                <span className="font-body text-sm text-cream/80">hello@naturesgrove.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-sage" />
                <span className="font-body text-sm text-cream/80">1-800-NATURE-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-sage" />
                <span className="font-body text-sm text-cream/80">Portland, Oregon</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="font-body text-sm text-cream/80 hover:text-sage transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-cream/80 hover:text-sage transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/80 hover:text-sage transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/80 hover:text-sage transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-cream/60">
              <span className="font-body">© 2024 The Nature's Grove. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-sage transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-sage transition-colors duration-200">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;