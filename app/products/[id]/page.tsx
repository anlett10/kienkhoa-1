import Link from "next/link";

// Mock data for Product 1 (Bosware Recruit)
const productData1 = {
  id: "bosware-recruit",
  title: "Bosware Recruit",
  client: "Bosware LLC - Australia",
  sector: "Startup",
  year: "2019 - 2022",
  project_link: "https://www.kienkhoa.com/products/1/#",
  featured_image: "/product1-main.png",
  cover_image: "/eniko-kis-KsLPTsYaqIQ-unsplash.jpg",
  is_featured: true,
  body: [
    "We design two User pages corresponding to Jobseeker and Employer, and one Admin page for data management purpose.",
    "For Jobseekers, it's optimized for efficiently making all the necessary information, options to show their suggestions to Employers, to update LifeTrack, and to manage User Subscription.",
    "For Employers, it's simple to do requirement search, to view candidate information, to update StaffTrack, and to manage User Subscription.",
    "Admin page is responsible for tracking all the important information about Users, Subscriptions, Jobs...",
    "Our system is integrated with Stripe Payment/Checkout for User Subscription.",
    "We create a GraphQL API to make it feasible for building a mobile application in the future when the bussiness needs."
  ],
  features: [
    {
      id: "business-feature-1",
      title: "Video Record",
      image: "/product1-feature.jpg",
      text: [
        "Video Record is one of the two core features in our system along with the matching capabilities.",
        "It's easy and comfortable for Jobseekers to make Video Records, edit Videos until happy to submit to storage server.",
        "We build an WebRTC application to handle video recording, processing... All the videos are stored on Digital Ocean Cloud."
      ]
    }
  ],
  technologies: [
    "Typescript",
    "Vue",
    "Moleculer",
    "GraphQL",
    "Knex",
    "PostgreSQL",
    "Redis",
    "Stripe Checkout",
    "AWS Polly",
    "WebRTC",
    "Kubernetes on Digital Ocean",
    "Figma Design"
  ]
};

// Mock data for Product 2 (TS Starter)
const productData2 = {
  id: "ts-starter",
  title: "TS Starter - Full-Stack TypeScript Template",
  client: "Indie devs, Startups",
  sector: "Developer Tools",
  year: "2024 - 2025",
  project_link: "https://www.tsstarter.dev/",
  featured_image: "/product2-f1.png",
  cover_image: "/guillaume-coupy-6HuoHgK7FN8-unsplash.jpg",
  is_featured: true,
  body: [
    "A modern, production-ready starter template built with TanStack Router, Drizzle, Better Auth, and shadcn/ui.",
    "This comprehensive template provides everything developers need to build modern web applications with TypeScript, including authentication, real-time sync, AI integration, and a beautiful UI.",
    "The template includes user authentication with OAuth providers and email verification, real-time data synchronization with Drizzle, AI chat integration with OpenAI/Anthropic, and a modern UI built with shadcn/ui components.",
    "Built with React 19, TanStack Router, and TanStack Start for the backend, it provides a complete full-stack solution with real-time database sync, comprehensive testing setup, and production-ready deployment configurations.",
    "The template is designed for rapid development with hot reload, error boundaries, loading states, and comprehensive developer tooling including ESLint, Prettier, and testing with Vitest and Playwright."
  ],
  features: [
    {
      id: "feature-1",
      title: "Authentication & Security",
      image: "/product2-auth.png",
      text: [
        "Complete authentication system with Better Auth supporting OAuth providers and email verification.",
        "Secure user management with proper session handling and email notifications using Resend.",
        "Production-ready security practices with proper error handling and accessibility features."
      ]
    },
    {
      id: "feature-2",
      title: "Real-time Sync & AI Integration",
      image: "/product2-f2.png",
      text: [
        "Real-time data synchronization with Drizzle for instant updates across all connected clients.",
        "AI chat integration with OpenAI/Anthropic including conversation history and context management.",
        "Full CRUD task management with real-time updates and collaborative features."
      ]
    }
  ],
  technologies: [
    "React 19",
    "TanStack Router", 
    "shadcn/ui",
    "TanStack Start",
    "ORPC",
    "Drizzle",
    "Better Auth",
    "AI SDK",
    "Resend",
    "Vitest",
    "Testing Library",
    "Playwright",
    "Tailwind CSS v4"
  ]
};

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id: productId } = await params;
  
  // Select product data based on ID
  let product;
  if (productId === "1") {
    product = productData1;
  } else if (productId === "2") {
    product = productData2;
  } else {
    product = {
      id: `product-${productId}`,
      title: `Product ${productId}`,
      client: "Client Name",
      sector: "Sector",
      year: "2024",
      project_link: null,
      featured_image: "/alexander-andrews-brAkTCdnhW8-unsplash.jpg",
      cover_image: "/eniko-kis-KsLPTsYaqIQ-unsplash.jpg",
      is_featured: false,
      body: [`This is the detail page for Product ${productId}. Content will be added soon.`],
      features: [],
      technologies: []
    };
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {product.sector}
                  </span>
                  <span>{product.year}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  {product.title}
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Client</h3>
                  <p className="text-muted-foreground">{product.client}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Project Link</h3>
                  {product.project_link ? (
                    <a 
                      href={product.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <p className="text-muted-foreground">N/A</p>
                  )}
                </div>
                
                {product.is_featured && (
                  <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                    <span>⭐</span>
                    Featured Project
                  </div>
                )}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={product.featured_image}
                alt={product.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Project Overview */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
            <div className="space-y-4">
              {product.body.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Features Section */}
          {product.features.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Key Features</h2>
              <div className="space-y-12">
                {product.features.map((feature) => (
                  <div key={feature.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                      <div className="space-y-3">
                        {feature.text.map((text, index) => (
                          <p key={index} className="text-muted-foreground leading-relaxed">
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.technologies ? (
                product.technologies.map((tech, index) => (
                  <div key={index} className="bg-card border border-border/50 rounded-lg p-4 text-center">
                    <span className="text-sm font-medium text-foreground">{tech}</span>
                  </div>
                ))
              ) : (
                product.body[0]?.includes("Technologies:") && 
                  product.body[0].split("Technologies: ")[1]?.split(", ").map((tech, index) => (
                    <div key={index} className="bg-card border border-border/50 rounded-lg p-4 text-center">
                      <span className="text-sm font-medium text-foreground">{tech}</span>
                    </div>
                  ))
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 pt-8">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Interested in a similar project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  View All Projects
                </Link>
                <Link
                  href="/about"
                  className="bg-muted text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted/80 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 