import Accordion from "./Disclosure";
import Tabs from "./Tabs";
import ActionTabs from "./ActionTabs";

export default function About() {
  return (
    // <div className="overflow-hidden border-gray-300 bg-slate-500 shadow sm:rounded-lg">
    <div className="rounded-xl border-gray-300 lg:rounded-2xl lg:border lg:p-7">
      <div className="px-4 pb-12 pt-6 sm:px-6">
        <h3 className="pb-6 text-2xl font-medium leading-6 md:pb-6 md:text-lg lg:pb-6">
          Về nhóm Kiến Khoa
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Tabs />
          <ActionTabs />
        </div>
      </div>
      <div className="px-4 pb-12 sm:px-6">
        <h3 className="pb-6 text-2xl font-medium leading-6 md:pb-6 md:text-lg lg:pb-6">
          Câu hỏi thông thường
        </h3>
        <Accordion />
      </div>
      <div className="px-4 pb-6 sm:px-6">
        <h3 className="text-lg font-medium leading-6">Thông tin giá dịch vụ</h3>
        <p className="mt-1 max-w-2xl text-sm">
          Dự tính chi phí cơ bản của một số gói dịch vụ
        </p>
      </div>
      <div className="border-gray-200 px-6">
        <dl>
          <div className="rounded-t-2xl bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-700">
              Thiết kế websites
            </dt>
            <dd className="mt-1 text-sm text-gray-1000 sm:col-span-2 sm:mt-0">
              Từ 10M - 100M VND
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-700">
              Ứng dụng web cỡ nhỏ
            </dt>
            <dd className="mt-1 text-sm text-gray-1000 sm:col-span-2 sm:mt-0">
              50M - 200M VND
            </dd>
          </div>
          <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-700">
              Ứng dụng web cỡ vừa
            </dt>
            <dd className="mt-1 text-sm text-gray-1000 sm:col-span-2 sm:mt-0">
              250M - 2000M VND
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-700">
              Ứng dụng mobile cỡ nhỏ
            </dt>
            <dd className="mt-1 text-sm text-gray-1000 sm:col-span-2 sm:mt-0">
              100M - 300M VND
            </dd>
          </div>
          <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-700">
              Ứng dụng mobile cỡ vừa
            </dt>
            <dd className="mt-1 text-sm text-gray-1000 sm:col-span-2 sm:mt-0">
              300M - 3000M VND
            </dd>
          </div>
          <div className="rounded-b-2xl bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-700">
              Phần mềm hệ thống quản lý Doanh nghiệp{" "}
            </dt>
            <dd className="mt-1 text-sm text-gray-1000 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-200 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <span className="ml-2 w-0 flex-1 truncate">
                      Gói phần mềm hệ thống web - mobile
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="/contact"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Liên hệ Sales
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <span className="ml-2 w-0 flex-1 truncate">
                      Gói phần mềm hệ thống nâng cao
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="/contact"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Liên hệ Sales
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
