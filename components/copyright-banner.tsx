"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ExButton } from "./button";

const cookieBannerName = "copyright-banner-dismissed";

export const CopyrightBanner = () => {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  useEffect(() => {
    const isCookieBannerDismissed = Cookies.get(cookieBannerName);
    if (!isCookieBannerDismissed) {
      setIsCookieBannerVisible(true);
    }
  });

  const dismissCookie = () => {
    setIsCookieBannerVisible(false);
    Cookies.set(cookieBannerName, "true", { expires: 365 });
  };

  if (!isCookieBannerVisible) return null;

  return (
    <div className="fixed right-[4rem] bottom-[4rem] flex w-[50rem] max-w-[95%] items-start rounded-md border border-transparent-white p-8 text-[1.5rem] backdrop-blur-[12px]">
      <div className="space-y-3">
        <p>
          <strong>Chú ý:</strong> Để xem trang tiếng Anh, xin vui lòng truy cập
          link bên dưới
        </p>
        <p>
          <ExButton href="https://wbookapp.com" size="medium">
            https://wbookapp.com
          </ExButton>
        </p>
      </div>
      <button className="ml-8" onClick={dismissCookie}>
        ✕ <span className="sr-only">Dimiss copyright banner</span>
      </button>
    </div>
  );
};
