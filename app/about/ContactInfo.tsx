"use client";

import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-foreground">
          Connect with Kien Khoa
        </h3>
        <p className="text-muted-foreground">
          Get in touch with our team for consultation and project discussions
        </p>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start space-x-4 group hover:bg-muted/30 p-4 rounded-lg transition-colors duration-200">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <MapPinIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">Office Address</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ho Chi Minh City, Vietnam<br />
              Available for remote work and client meetings
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4 group hover:bg-muted/30 p-4 rounded-lg transition-colors duration-200">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <EnvelopeIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">Email Contact</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <a 
                href="mailto:contact@kienkhoa.com" 
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                contact@kienkhoa.com
              </a>
              <br />
              We respond within 24 hours
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4 group hover:bg-muted/30 p-4 rounded-lg transition-colors duration-200">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <PhoneIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">Phone Support</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Available for urgent consultations<br />
              Schedule a call through our booking system
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
