import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Sample product data - in a real app, this would come from an API
const featuredProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 324,
    category: "Electronics",
    inStock: true,
  },
  {
    id: "2", 
    name: "Smart Fitness Watch",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 156,
    category: "Wearables",
    inStock: true,
  },
  {
    id: "3",
    name: "Professional Camera Lens",
    price: 899,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 89,
    category: "Photography",
    inStock: true,
  },
  {
    id: "4",
    name: "Luxury Leather Wallet",
    price: 129,
    originalPrice: 179,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 203,
    category: "Accessories",
    inStock: false,
  },
  {
    id: "5",
    name: "Gaming Mechanical Keyboard",
    price: 149,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 412,
    category: "Gaming",
    inStock: true,
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    price: 89,
    originalPrice: 119,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 267,
    category: "Audio",
    inStock: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products with exceptional quality and value.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;