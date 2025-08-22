import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Headphones, 
  Camera, 
  Watch, 
  Gamepad2, 
  Home,
  Shirt,
  Book
} from "lucide-react";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    count: "2.5k products"
  },
  {
    id: "audio",
    name: "Audio",
    icon: Headphones,
    color: "text-purple-600",
    bgColor: "bg-purple-50", 
    count: "890 products"
  },
  {
    id: "photography",
    name: "Photography",
    icon: Camera,
    color: "text-green-600",
    bgColor: "bg-green-50",
    count: "1.2k products"
  },
  {
    id: "wearables",
    name: "Wearables",
    icon: Watch,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    count: "650 products"
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad2,
    color: "text-red-600",
    bgColor: "bg-red-50",
    count: "1.8k products"
  },
  {
    id: "home",
    name: "Home & Living",
    icon: Home,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    count: "3.1k products"
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    count: "2.8k products"
  },
  {
    id: "books",
    name: "Books",
    icon: Book,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    count: "1.5k products"
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of categories to find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;