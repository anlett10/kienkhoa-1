"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";

export default function TabsComponent() {
  let [categories] = useState({
    "Overview": [
      {
        id: 1,
        title:
          "Technology changes how we communicate, learn, and work",
      },
      {
        id: 2,
        title:
          "Web applications help businesses manage, operate, and communicate better",
      },
    ],
    "Goals": [
      {
        id: 1,
        title: "Bring web development technology into real world applications",
      },
      {
        id: 2,
        title:
          "Provide better SaaS applications to B2C, and B2B customers",
      },
    ],
    "Market": [
      {
        id: 1,
        title: "Help customers with product development for their businesses",
      },
      {
        id: 2,
        title:
          "Build SaaS that targets to devs, B2C and B2B customers",
      },
    ],
  });

  return (
    <div className="w-full">
      <Tabs defaultValue="Overview" className="w-full">
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
                  Key information about our approach and objectives
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
