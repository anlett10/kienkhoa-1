const team = [
  {
    name: "Trần Hùng Ân",
    title: "Giám đốc - Kiến Khoa Software",
    profile:
      "19 năm trong lĩnh vực Phát triền sản xuất Phần mềm máy tính 19 năm trong lĩnh vực Phát triền sản xuất Phần mềm máy tính",
  },
  {
    name: "Huỳnh Minh Chính",
    title: "Giám đốc Công nghệ",
    profile: "12+ năm Kiến trúc sư trưởng thiết kế hạ tầng web",
  },
  {
    name: "Lê Minh Dũng",
    title: "Giám đốc Tài chính",
    profile: "17 năm chuyên gia cấp cao quản lý Tài chính",
  },
  {
    name: "Tống Thị Mai",
    title: "Giám đốc Nhân sự",
    profile:
      "15 năm quản lý cấp cao làm việc tại các CTy Sản xuất, Bán lẻ, Tư vấn Giáo dục",
  },
  {
    name: "Nguyễn Phương Đạt",
    title: "Giám đốc Thiết kế",
    profile: "10+ năm Trưởng bộ phận Thiết kế",
  },
];

export default function Team() {
  return (
    <div className="rounded-xl border-gray-300 lg:rounded-2xl lg:border lg:p-6">
      <div className="space-y-3 px-24 pt-3">
        <h1 className="text-xl font-medium">Ban điều hành & cố vấn</h1>
        <div className="space-y-5">
          <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
            <li>Danh sách các thành viên</li>
            <li>Trích lược profile thành viên</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-0 py-24 px-4 sm:px-6 sm:py-16 lg:max-w-full lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4 px-8 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          <div>
            <img
              src="alexander-andrews-brAkTCdnhW8-unsplash.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <p className="mt-2 text-sm text-gray-1000">Trần Hùng Ân</p>
          </div>
          <div>
            <img
              src="eniko-kis-KsLPTsYaqIQ-unsplash.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <p className="mt-2 text-sm text-gray-1000">Huỳnh Minh Chính</p>
          </div>
          <div>
            <img
              src="patrick-OIFgeLnjwrM-unsplash.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <p className="mt-2 text-sm text-gray-1000">Lê Minh Dũng</p>
          </div>
          <div>
            <img
              src="yoann-siloine-_T4w3JDm6ug-unsplash.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
            <p className="mt-2 text-sm text-gray-1000">Tống Thị Mai</p>
          </div>
          <div>
            <img
              src="guillaume-coupy-6HuoHgK7FN8-unsplash.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
            <p className="mt-2 text-sm text-gray-1000">Nguyễn Phương Đạt</p>
          </div>
        </div>
        <div>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 px-8 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
            {team.map((person) => (
              <div key={person.name} className="border-t border-gray-200 pt-4">
                <dt className="text-sm text-gray-1000">{person.name}</dt>
                <ul className="list-disc space-y-2 pl-4">
                  <li className="mt-2 text-sm">{person.title}</li>
                  <li className="mt-2 text-sm">{person.profile}</li>
                </ul>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
