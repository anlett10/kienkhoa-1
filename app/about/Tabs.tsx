"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

export default function Tabs() {
  let [categories] = useState({
    "Tổng quan": [
      {
        id: 1,
        title:
          "- Công nghệ web giúp Doanh nghiệp quản lý, vận hành, truyền thông tốt hơn",
      },
      {
        id: 2,
        title:
          "- Mục tiêu đưa công nghệ phát triển web vào ứng dụng thực tế tại VN",
      },
    ],
    "Dịch vụ": [
      {
        id: 1,
        title: "- Phát triển ứng dụng cho tổ chức, DN trên nền tảng web",
      },
      {
        id: 2,
        title: "- Thiết kế websites chuyên nghiệp cho khách hàng cá nhân và DN",
      },
    ],
    "Thị trường - KH": [
      {
        id: 1,
        title: "- Hỗ trợ khách hàng phát triển kinh doanh tại Việt Nam",
      },
      {
        id: 2,
        title:
          "- Khách hàng có yêu cầu đặt hàng gia công hoàn thiện ứng dụng web mobile",
      },
    ],
  });

  return (
    <div className="w-full max-w-5xl px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                clsx(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-500 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-gray-1000 shadow"
                    : "hover:bg-white/[0.12] hover:text-gray-1000"
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
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-500 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-400"
                  >
                    <h3 className="text-sm font-medium leading-5 text-gray-700">
                      {post.title}
                    </h3>
                    <a
                      href="#"
                      className={clsx(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
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
