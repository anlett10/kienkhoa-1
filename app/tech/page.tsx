"use client";

import {
  CloudArrowUpIcon,
  GlobeAltIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

export default function Tech() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-lg font-medium">Công nghệ phát triển web</h1>
        <div className="space-y-4">
          <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
            <li>Ngôn ngữ lập trình sử dụng</li>
            <li>Dữ liệu và môi trường triển khai</li>
          </ul>
        </div>
      </div>

      <div className="relative rounded-2xl isolate overflow-hidden bg-white px-6 py-20 sm:py-24 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-5">
              <div className="lg:max-w-full">
                <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Phát triển ứng dụng từ đầu
                </h1>
                <p className="mt-6 text-md leading-8 text-gray-700">
                  Sử dụng các công nghệ phát triển web/mobile mạnh mẽ, đã được chứng
                  thực giúp đẩy nhanh quá trình xây dựng phát triển, vận hành hệ thống
                  đồng thời mang đến hiệu năng ổn định, trải nghiệm người dùng tốt nhất cho khách hàng.
                </p>
              </div>
            </div>
          </div>
          <div className="-my-6 -ml-8 p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[40rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[64rem]"
              src="/img/aboutUs.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-5">
              <div className="max-w-xl text-sm leading-7 lg:max-w-full">
                <ul role="list" className="space-y-8">
                  <li className="flex gap-x-3">
                    <GlobeAltIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="text-mauve11">
                      <strong className="font-semibold">
                        Web1 - Thiết kế trang:
                      </strong>{" "}
                      Figma/Framer, ReactJS/Next, SanityIO, TailwindCSS, Tamagui, Vercel
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="text-mauve11">
                      <strong className="font-semibold">
                        Web2 - Ứng dụng Web/Mobile:
                      </strong>{" "}
                      React Native/Expo, Swift/SwiftUI, ReactJS/Next, PostgreSQL/Prisma, 
                      Convex, Bun/Elysia/TS
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <Squares2X2Icon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="text-mauve11">
                      <strong className="font-semibold">
                        Web3 - Ứng dụng Blockchain:
                      </strong>{" "}
                      Solana, Aptos, Sui Rust-based blockchains, viết smart
                      contract dùng ngôn ngữ lập trình Move
                    </span>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Nâng cấp ứng dụng Legacy
                </h2>
                <p className="mt-6 text-md leading-8 text-gray-700">
                  Các hệ thống đang vận hành, cần nâng cấp mở rộng tính năng,
                  hoặc chuyển sang dùng các công nghệ mới phù hợp hơn. Chúng tôi
                  mang đến các giải pháp hiệu quả nhất dựa trên kinh nghiệm xây
                  dựng, năng lực của đội ngũ phát triển.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
