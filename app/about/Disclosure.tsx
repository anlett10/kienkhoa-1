"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Disclosure() {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
            <span className="text-foreground">
              What industries do you design websites for?
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <p>
                Our team designs websites for clients working in the following industries:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Business Consulting/Legal/Education</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>E-commerce and Online Retail</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Healthcare and Medical Services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real Estate and Property Management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technology and Software Companies</span>
                </li>
              </ul>
              <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                <p className="text-sm">
                  <strong>Note:</strong> We can work with any industry. Contact us to discuss your specific needs and requirements.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
            <span className="text-foreground">
              What is your development process?
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <p>
                Our development process follows these key stages:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Discovery:</strong> Understanding requirements and project scope</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Design:</strong> Creating wireframes and UI/UX mockups</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Development:</strong> Building the application with modern technologies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Testing:</strong> Quality assurance and bug fixing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Deployment:</strong> Launching and ongoing support</span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
            <span className="text-foreground">
              How long does a typical project take?
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <p>
                Project timelines vary depending on complexity and requirements:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Simple Website:</strong> 2-4 weeks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Web Application:</strong> 1-3 months</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Mobile App:</strong> 2-4 months</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Enterprise System:</strong> 3-6 months</span>
                </li>
              </ul>
              <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                <p className="text-sm">
                  <strong>Note:</strong> We provide regular updates and can adjust timelines based on your specific needs.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
            <span className="text-foreground">
              Do you provide ongoing support and maintenance?
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <p>
                Yes, we offer comprehensive support and maintenance services:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technical support and bug fixes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Security updates and patches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Feature updates and enhancements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Server monitoring and backup</span>
                </li>
              </ul>
              <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                <p className="text-sm">
                  <strong>Support Plans:</strong> We offer flexible support packages to meet your needs and budget.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
