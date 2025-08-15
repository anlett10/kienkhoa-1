"use client";

const products = [
  {
    name: "Recruitment Website",
    category: "SaaS",
    description:
      "A comprehensive recruitment platform designed for jobseekers and employers. Features include video recording capabilities, user subscription management, and real-time matching system. Built with modern technologies for optimal performance and user experience.",
    price: "",
    features: ["Video Recording", "User Management", "Subscription System", "Real-time Matching"],
    image: "/product1-main.png"
  },
  {
    name: "TypeScript Fullstack Starter",
    category: "Product Starter",
    description:
      "A modern, production-ready starter template built with TanStack Router, Triplit, Better Auth, and shadcn/ui. Complete full-stack solution with real-time sync, AI integration, and comprehensive developer tooling.",
    price: "",
    features: ["Authentication", "Real-time Sync", "AI Integration", "Modern UI"],
    image: "/product2-f1.png"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Products & Projects
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Products and projects implemented at Kien Khoa.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.name} className="group">
                <div className="bg-card/50 dark:bg-card border border-border/50 dark:border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="mb-6 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg bg-muted group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {product.category}
                      </span>
                    </div>
                    {/* Price badge */}
                    {product.price && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-xs font-medium border border-border/50">
                          {product.price}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex pt-4">
                      <div className="w-full flex justify-end">
                        <a
                          href={`/products/${index + 1}`}
                          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 pt-8">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Need a custom solution?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We can design and develop solutions tailored to your specific business needs.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 