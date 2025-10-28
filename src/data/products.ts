import { Heart, Sparkles, Leaf, Brain } from "lucide-react";
import { Product } from "@/types/product";
import testItemImage from "@/assets/test-item.jpeg";

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Lavender Dream Body Lotion",
    category: "Skincare & Beauty",
    description: "A luxurious, fast-absorbing body lotion infused with organic lavender essential oil and shea butter. Perfect for evening relaxation and skin nourishment.",
    price: 28.99,
    rating: 4.8,
    reviews: 127,
    ingredients: ["Organic Lavender Essential Oil", "Shea Butter", "Coconut Oil", "Vitamin E", "Aloe Vera"],
    variants: [
      { type: "Travel Size", size: "2 fl oz", price: 12.99 },
      { type: "Standard", size: "8 fl oz", price: 28.99 },
      { type: "Family Size", size: "16 fl oz", price: 48.99 }
    ],
    image: "/placeholder.svg",
    badges: ["Organic", "Cruelty-Free"],
    icon: Sparkles,
    color: "text-sage",
    bgColor: "bg-sage/10"
  },
  {
    id: 2,
    name: "Immune Support Herbal Blend",
    category: "Health & Wellness",
    description: "A powerful blend of echinacea, elderberry, and astragalus root designed to naturally boost your immune system and overall vitality.",
    price: 34.99,
    rating: 4.9,
    reviews: 89,
    ingredients: ["Echinacea Root", "Elderberry Extract", "Astragalus Root", "Ginger Root", "Turmeric"],
    variants: [
      { type: "30-Day Supply", size: "60 capsules", price: 34.99 },
      { type: "60-Day Supply", size: "120 capsules", price: 59.99 },
      { type: "90-Day Supply", size: "180 capsules", price: 79.99 }
    ],
    image: "/placeholder.svg",
    badges: ["Organic", "Third-Party Tested"],
    icon: Heart,
    color: "text-forest-medium",
    bgColor: "bg-forest-medium/10"
  },
  {
    id: 3,
    name: "Calm Mind Tea Blend",
    category: "Mental Wellness",
    description: "A soothing herbal tea blend featuring chamomile, lemon balm, and passionflower to promote relaxation and peaceful sleep.",
    price: 19.99,
    rating: 4.7,
    reviews: 203,
    ingredients: ["Chamomile Flowers", "Lemon Balm", "Passionflower", "Lavender Buds", "Rose Petals"],
    variants: [
      { type: "Sample Pack", size: "10 tea bags", price: 8.99 },
      { type: "Standard", size: "30 tea bags", price: 19.99 },
      { type: "Bulk Pack", size: "60 tea bags", price: 34.99 }
    ],
    image: "/placeholder.svg",
    badges: ["Organic", "Caffeine-Free"],
    icon: Brain,
    color: "text-moss",
    bgColor: "bg-moss/10"
  },
  {
    id: 4,
    name: "Arnica Recovery Salve",
    category: "Healing Herbs",
    description: "Traditional arnica-infused salve combined with comfrey and calendula for natural pain relief and muscle recovery support.",
    price: 24.99,
    rating: 4.6,
    reviews: 156,
    ingredients: ["Arnica Montana", "Comfrey Root", "Calendula", "Beeswax", "Olive Oil"],
    variants: [
      { type: "Travel Tin", size: "0.5 oz", price: 12.99 },
      { type: "Standard Jar", size: "2 oz", price: 24.99 },
      { type: "Professional Size", size: "4 oz", price: 39.99 }
    ],
    image: "/placeholder.svg",
    badges: ["Organic", "Handcrafted"],
    icon: Leaf,
    color: "text-earth",
    bgColor: "bg-earth/10"
  },
  {
    id: 5,
    name: "Energy Boost Morning Tonic",
    category: "Health & Wellness",
    description: "An invigorating herbal tonic with ginseng, rhodiola, and green tea extract to naturally enhance energy and mental focus.",
    price: 32.99,
    rating: 4.5,
    reviews: 74,
    ingredients: ["Ginseng Root", "Rhodiola Rosea", "Green Tea Extract", "Ginkgo Biloba", "B-Complex Vitamins"],
    variants: [
      { type: "1-Month Supply", size: "30 servings", price: 32.99 },
      { type: "2-Month Supply", size: "60 servings", price: 58.99 },
      { type: "3-Month Supply", size: "90 servings", price: 79.99 }
    ],
    image: "/placeholder.svg",
    badges: ["Organic", "Vegan"],
    icon: Heart,
    color: "text-forest-medium",
    bgColor: "bg-forest-medium/10"
  },
  {
    id: 6,
    name: "Rose Hip Vitamin C Serum",
    category: "Skincare & Beauty",
    description: "A potent anti-aging serum with rosehip oil and vitamin C to brighten skin, reduce fine lines, and promote collagen production.",
    price: 42.99,
    rating: 4.9,
    reviews: 198,
    ingredients: ["Rosehip Oil", "Vitamin C", "Hyaluronic Acid", "Jojoba Oil", "Rose Extract"],
    variants: [
      { type: "Trial Size", size: "0.5 fl oz", price: 18.99 },
      { type: "Standard", size: "1 fl oz", price: 42.99 },
      { type: "Value Size", size: "2 fl oz", price: 75.99 }
    ],
    image: "/placeholder.svg",
    badges: ["Organic", "Anti-Aging"],
    icon: Sparkles,
    color: "text-sage",
    bgColor: "bg-sage/10"
  },
  {
    id: 7,
    name: "Test Item",
    category: "Health & Wellness",
    description: "A delicious and nutritious test product for your wellness journey.",
    price: 19.99,
    rating: 4.7,
    reviews: 45,
    ingredients: ["Natural Ingredients", "Quality Tested", "Freshly Prepared"],
    variants: [
      { type: "Small", size: "Single Serving", price: 19.99 },
      { type: "Medium", size: "2 Servings", price: 34.99 },
      { type: "Large", size: "Family Pack", price: 54.99 }
    ],
    image: testItemImage,
    badges: ["Organic", "Fresh"],
    icon: Leaf,
    color: "text-earth",
    bgColor: "bg-earth/10"
  },
  {
    id: 8,
    name: "Pain and Inflammation Salve",
    category: "Healing Herbs",
    description: "A therapeutic herbal salve formulated with turmeric, ginger, and CBD to naturally reduce pain and inflammation while promoting healing.",
    price: 29.99,
    rating: 4.8,
    reviews: 142,
    ingredients: ["Turmeric Extract", "Ginger Root", "CBD Oil", "Arnica Montana", "Menthol", "Beeswax"],
    variants: [
      { type: "Travel Size", size: "0.5 oz", price: 14.99 },
      { type: "Standard Jar", size: "2 oz", price: 29.99 },
      { type: "Large Jar", size: "4 oz", price: 49.99 }
    ],
    image: "/placeholder.svg",
    badges: ["Organic", "CBD-Infused"],
    icon: Leaf,
    color: "text-earth",
    bgColor: "bg-earth/10"
  }
];