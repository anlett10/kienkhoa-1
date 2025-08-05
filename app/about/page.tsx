import Accordion from "./Disclosure";
import Tabs from "./Tabs";
import ActionTabs from "./ActionTabs";
import ContactInfo from "./ContactInfo";
import CalCom from "./CalCom";

import { ExternalLink } from "@/ui/ExternalLink";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-foreground bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text">
                About Kien Khoa
              </h1>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary/60 mx-auto rounded-full shadow-lg"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A team of experienced specialists in software development and technology.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-20">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Overview
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Tabs />
              <ActionTabs />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
            </div>
            <Accordion />
          </div>

          {/* Pricing Section */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Pricing Information
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Basic cost estimates for some service packages
              </p>
            </div>

            <div className="bg-card/50 dark:bg-card border border-border/50 dark:border-border rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 px-6 py-4 border-b border-border/50">
                <h3 className="text-lg font-semibold text-foreground">Service Pricing Table</h3>
                <p className="text-sm text-muted-foreground">Reference costs for service packages</p>
              </div>
              
              <dl>
                <div className="bg-background/50 dark:bg-background px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-muted/30 transition-colors duration-200">
                  <dt className="font-semibold text-sm text-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Website Design
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground sm:col-span-2 sm:mt-0">
                    <span className="font-semibold text-primary">$1,000 USD</span>
                    <span className="text-xs text-muted-foreground ml-2">(Basic website)</span>
                  </dd>
                </div>
                
                <div className="bg-card/50 dark:bg-card px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-muted/30 transition-colors duration-200">
                  <dt className="font-semibold text-sm text-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Small Web Application
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground sm:col-span-2 sm:mt-0">
                    <span className="font-semibold text-primary">$3,000 USD</span>
                    <span className="text-xs text-muted-foreground ml-2">(Simple application)</span>
                  </dd>
                </div>
                
                <div className="bg-background/50 dark:bg-background px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-muted/30 transition-colors duration-200">
                  <dt className="font-semibold text-sm text-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Medium Web Application
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground sm:col-span-2 sm:mt-0">
                    <span className="font-semibold text-primary">$12,000 USD</span>
                    <span className="text-xs text-muted-foreground ml-2">(Complex application)</span>
                  </dd>
                </div>
                
                <div className="bg-card/50 dark:bg-card px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-muted/30 transition-colors duration-200">
                  <dt className="font-semibold text-sm text-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Small Mobile Application
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground sm:col-span-2 sm:mt-0">
                    <span className="font-semibold text-primary">$6,000 USD</span>
                    <span className="text-xs text-muted-foreground ml-2">(Basic app)</span>
                  </dd>
                </div>
                
                <div className="bg-background/50 dark:bg-background px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-muted/30 transition-colors duration-200">
                  <dt className="font-semibold text-sm text-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Medium Mobile Application
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground sm:col-span-2 sm:mt-0">
                    <span className="font-semibold text-primary">$15,000 USD</span>
                    <span className="text-xs text-muted-foreground ml-2">(Advanced app)</span>
                  </dd>
                </div>
                
                <div className="bg-card/50 dark:bg-card px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-muted/30 transition-colors duration-200">
                  <dt className="font-semibold text-sm text-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Enterprise Management System Software
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground sm:col-span-2 sm:mt-0">
                    <div className="space-y-3">
                      <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">Web-Mobile System Software Package</span>
                          <span className="text-xs text-muted-foreground">Contact for pricing</span>
                        </div>
                        <div className="flex justify-end">
                          <a
                            href="https://cal.com/kienkhoa/30min"
                            className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-primary bg-primary/10 rounded-md hover:bg-primary/20 transition-colors duration-200"
                          >
                            Contact Sales
                          </a>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">Advanced System Software Package</span>
                          <span className="text-xs text-muted-foreground">Contact for pricing</span>
                        </div>
                        <div className="flex justify-end">
                          <a
                            href="https://cal.com/kienkhoa/30min"
                            className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-primary bg-primary/10 rounded-md hover:bg-primary/20 transition-colors duration-200"
                          >
                            Contact Sales
                          </a>
                        </div>
                      </div>
                    </div>
                  </dd>
                </div>
              </dl>
              
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 px-6 py-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground text-center">
                  💡 <span className="font-medium text-foreground">Note:</span> Prices above are for reference only. 
                  Contact us directly for consultation and detailed pricing tailored to your specific project requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Contact & Schedule
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <ContactInfo />
              </div>
              <div>
                <CalCom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
