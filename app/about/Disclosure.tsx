"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Accordion() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-full rounded-2xl bg-blue-900/20 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-small flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  Dịch vụ Thiết kế websites dành cho khách hàng thuộc lĩnh vực
                  nào?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-1000`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                Nhóm chúng tôi thiết kế các trang web cho khách hàng làm việc
                trong các lĩnh vực Tư vấn Doanh nghiệp/Luật/Giáo dục - Trang
                thông tin về Sản phẩm/Dịch vụ/Du lịch - Trang cá nhân chuyên
                nghiệp cho Chuyên gia/Diễn giả
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="font-small flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Doanh nghiệp nào cần ứng dụng web - mobile?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-1000`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                Ứng dụng cho phép người dùng cuối thao tác với dữ liệu, tương
                tác với các module chức năng khác nhau
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="font-small flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Dịch vụ gia công phần mềm làm gì?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-1000`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                Thực hiện một phần hoặc toàn bộ công việc xây dựng hệ thống phần
                mềm
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
