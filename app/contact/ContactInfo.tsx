"use client";

import { ExternalLink } from "#/ui/ExternalLink";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
const mapImage = "/all/map-image.png";
const data = [
  {
    icon: MapPinIcon,
    name: "Địa chỉ",
    description: "135/1/126 Nguyễn Hữu Cảnh, Bình Thạnh TP.HCM",
  },
  {
    icon: EnvelopeIcon,
    name: "Email",
    description: "an@kienkhoa.com",
  },
  {
    icon: PhoneIcon,
    name: "Mobile/Zalo",
    description: "0867793496",
  },
];

const ContactInfo = () => {
  return (
    <div className="mb-6 border-gray-300 lg:rounded-md lg:border lg:p-7">
      <h4 className="text-heading -mt-1 pb-7 text-lg font-bold md:pb-10 lg:pb-6">
        Kết nối với Kiến Khoa:
      </h4>
      {data.map((info) => (
        <div
          key={info.name}
          className="relative flex flex-col gap-4 pb-7 sm:flex-row md:flex-col lg:flex-row"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
            <info.icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="sm:min-w-0 sm:flex-1">
            <p className="text-sm font-semibold leading-7">{info.name}</p>
            <p className="text-sm leading-7 text-primary-text">
              {info.description}
            </p>
          </div>
        </div>
      ))}
      <ExternalLink href="https://www.google.com/maps">
        <img src={mapImage} alt={"text-map"} className="rounded-md" />
      </ExternalLink>
    </div>
  );
};

export default ContactInfo;
