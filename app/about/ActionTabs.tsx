"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

export default function ActionTabs() {
  let [categories] = useState({
    "Đội nhóm": [
      {
        id: 1,
        title: "Tập hợp nhiều coders kinh nghiệm, kỹ năng tốt",
      },
      {
        id: 2,
        title: "Làm việc nhóm hoàn thành tốt nhất mục tiêu của khách hàng",
      },
    ],
    "Công nghệ": [
      {
        id: 1,
        title:
          "ReactJS/Next, React Native, SwiftUI, PostgreSQL/Prisma, TS/Bun/Elysia",
      },
      {
        id: 2,
        title: "Supabase, Neon, Convex, Vercel, AWS, Cloudflare",
      },
    ],
    "Dịch vụ": [
      {
        id: 1,
        title:
          "Gia công phần mềm: phát triển, nâng cấp, phát hành tính năng mới",
      },
      {
        id: 2,
        title: "Thiết kế websites chuyên nghiệp cho khách hàng cá nhân và DN",
      },
    ],
  });

  return (
    <div className="w-full max-w-5xl">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-slate-600 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                clsx(
                  "font-small w-full rounded-lg py-2.5 text-sm leading-5",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-500 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-gray-1000 shadow"
                    : "hover:bg-white/[0.12] hover:text-gray-1000",
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={clsx(
                "rounded-xl bg-gray-100 p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-500 focus:outline-none focus:ring-2",
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-400"
                  >
                    {/* <h3 className="text-sm leading-5 text-gray-700">
                      {post.title}
                    </h3> */}
                    <dd className="mt-0 text-sm text-gray-700 sm:col-span-2">
                      {post.title}
                    </dd>
                    <a
                      href="#"
                      className={clsx(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2",
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
