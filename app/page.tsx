import { Button, IconWrapper } from "../components/button";
import { Container } from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
import { HeroImage } from "../components/hero-image";
import { ChevronIcon } from "../components/icons/chevron";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export default function Homepage() {
  return (
    <div className="overflow-hidden bg-page-gradient">
      {/* Hero Section */}
      <Container className="py-[6.4rem]">
        <Hero>
          <div className="space-y-8">
            <div className="space-y-8">
              <HeroTitle className="!text-3xl md:!text-6xl font-bold">
                Kien Khoa develops
                <br className="hidden md:block" /> SaaS products and Startup projects
              </HeroTitle>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
            </div>
            <HeroSubtitle className="mb-16 text-base md:text-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              We build SaaS products and provide consulting for businesses using proven, scalable technology.
            </HeroSubtitle>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="group hover:scale-105 transition-transform duration-200"
                href="/about"
                variant="primary"
                size="large"
              >
                Learn More{" "}
                <IconWrapper>
                  <ChevronIcon />
                </IconWrapper>
              </Button>
              <Button
                className="group hover:scale-105 transition-transform duration-200"
                href="/web1"
                variant="secondary"
                size="large"
              >
                View Demo{" "}
                <IconWrapper>→</IconWrapper>
              </Button>
            </div>
          </div>
          <HeroImage />
        </Hero>
      </Container>

      {/* Features Section */}
      <Container className="py-20">
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Custom software built to fit the business needs.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Streamlining your business operations with tailored tools and expert solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative flex flex-col gap-6 p-8 rounded-xl hover:bg-muted/30 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-border/50"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold leading-8 text-foreground">
                  {feature.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Statistics Section */}
      <Container className="py-20">
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Impressive numbers reflecting the experience and reputation of the Kien Khoa team
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Call to Action */}
      <Container className="py-20">
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="group hover:scale-105 transition-transform duration-200"
                href="/products"
                variant="primary"
                size="large"
              >
                View Projects{" "}
                <IconWrapper>
                  <ChevronIcon />
                </IconWrapper>
              </Button>
              <Button
                className="group hover:scale-105 transition-transform duration-200"
                href="/about"
                variant="secondary"
                size="large"
              >
                Contact Us{" "}
                <IconWrapper>→</IconWrapper>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const features = [
  {
    name: "Web Development",
    description:
      "Modern web applications built with cutting-edge technologies for optimal performance and user experience.",
    icon: GlobeAltIcon,
  },
  {
    name: "Mobile Development",
    description:
      "Native mobile applications for iOS and Android with modern UI/UX and high performance.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "SaaS Solutions",
    description:
      "Scalable software-as-a-service products designed for business efficiency and growth.",
    icon: CodeBracketIcon,
  },
  {
    name: "Business Solutions",
    description:
      "Comprehensive business management systems tailored to your specific operational needs.",
    icon: Squares2X2Icon,
  },
];

const statistics = [
  { value: "20+", label: "Completed Projects" },
  { value: "10+", label: "Satisfied Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "99%", label: "Success Rate" },
];
