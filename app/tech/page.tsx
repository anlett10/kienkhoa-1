"use client";

import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

export default function Tech() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-20">
          {/* Header Section */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Technology Stack
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Using modern and proven technologies to build high-quality applications.
            </p>
          </div>

          {/* Technology Stack Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web1 Card */}
            <div className="group">
              <div className="bg-card/50 dark:bg-card border border-border/50 dark:border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <GlobeAltIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Website</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Website Design
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Building modern user interfaces with advanced design technologies.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">Figma/Framer</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">ReactJS/Next</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">SanityIO</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">TailwindCSS</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">ShadCN UI</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">Vercel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web2 Card */}
            <div className="group">
              <div className="bg-card/50 dark:bg-card border border-border/50 dark:border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <DevicePhoneMobileIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Web Apps</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Web Applications
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Developing Web applications with high performance and excellent user experience.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">NextJS/TanStack Suite</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">TailwindCSSS/ShadCN UI</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">Better Auth</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">Triplit DB/Drizzle</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">oRPC/REST</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">Bun/Elysia/TS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web3 Card */}
            <div className="group">
              <div className="bg-card/50 dark:bg-card border border-border/50 dark:border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Squares2X2Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Mobile Apps</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Mobile Applications
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Crafting mobile apps powered by proven technology.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">React Native</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">Expo</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">React Native Reanimated</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">Sentry</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">Better Auth/Expo</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">Tamagui/Nativewind</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Process Section */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12 border border-primary/20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            <div className="relative">
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-3xl font-bold text-foreground">
                  Application Development from Scratch
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Using powerful web/mobile development technologies that have been proven to accelerate the development process, 
                  system operations while delivering stable performance and the best user experience for customers.
                </p>
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center space-y-4 group">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-lg font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">Analysis</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    Understanding project requirements and objectives
                  </p>
                </div>
                <div className="text-center space-y-4 group">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-lg font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">Design</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    Creating detailed wireframes and mockups
                  </p>
                </div>
                <div className="text-center space-y-4 group">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-lg font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">Development</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    Coding and building the application
                  </p>
                </div>
                <div className="text-center space-y-4 group">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-lg font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">Deployment</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    Deploy and maintain the system
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legacy Upgrade Section */}
          <div className="bg-card/50 dark:bg-card border border-border/50 dark:border-border rounded-xl p-8 lg:p-12 hover:shadow-lg transition-all duration-300">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Legacy Application Upgrade
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
                Systems currently in operation that need feature expansion upgrades, 
                or migration to newer, more suitable technologies. We bring the most effective solutions 
                based on our development experience and team capabilities.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us for consultation and start building your application.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
