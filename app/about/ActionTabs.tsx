"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";

export default function ActionTabsComponent() {
  let [categories] = useState({
    "Team": [
      {
        id: 1,
        title:
          "Experienced development team with expertise in modern technologies",
      },
      {
        id: 2,
        title:
          "Professional project management and quality assurance processes",
      },
    ],
    "Process": [
      {
        id: 1,
        title: "Agile development methodology with regular client communication",
      },
      {
        id: 2,
        title:
          "Comprehensive testing and deployment procedures for reliable delivery",
      },
    ],
    "Support": [
      {
        id: 1,
        title: "Ongoing technical support and maintenance services",
      },
      {
        id: 2,
        title:
          "Training and documentation for smooth system operation",
      },
    ],
  });

  return (
    <div className="w-full">
      <Tabs defaultValue="Team" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {Object.keys(categories).map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(categories).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <Card>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
                <CardDescription>
                  Our approach to delivering quality solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
