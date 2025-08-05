"use client";

import { CalendarDaysIcon, VideoCameraIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function CalCom() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-foreground">
          Meeting Schedule Information
        </h3>
        <p className="text-muted-foreground">
          Book a consultation session to discuss your project requirements
        </p>
      </div>

      {/* Meeting Options */}
      <div className="space-y-6">
        {/* Video Call */}
        <div className="flex items-start space-x-4 group hover:bg-muted/30 p-4 rounded-lg transition-colors duration-200">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <VideoCameraIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">Video Consultation</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              30-minute video call to discuss your project<br />
              Available on Zoom, Google Meet, or Teams
            </p>
          </div>
        </div>

        {/* Calendar Booking */}
        <div className="flex items-start space-x-4 group hover:bg-muted/30 p-4 rounded-lg transition-colors duration-200">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <CalendarDaysIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">Schedule Meeting</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Book a time slot that works for you<br />
              We'll send you a calendar invitation
            </p>
          </div>
        </div>

        {/* Booking Button */}
        <div className="flex items-start space-x-4 group hover:bg-muted/30 p-4 rounded-lg transition-colors duration-200">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <ClockIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">Get Started</h4>
            <a
              href="https://cal.com/kienkhoa/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Schedule Free Consultation
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              No commitment required • 30-minute session
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
