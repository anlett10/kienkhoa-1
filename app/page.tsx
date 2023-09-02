import { Button, IconWrapper } from "../components/button";
import { Container } from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
import { HeroImage } from "../components/hero-image";
import { ChevronIcon } from "../components/icons/chevron";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export default function Homepage() {
  return (
    <div className="overflow-hidden">
      <Container className=" py-[6.4rem]">
        <Hero>
          <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Kiến Khoa tạo giải pháp
            <br className="hidden md:block" /> phù hợp với Doanh nghiệp
          </HeroTitle>
          <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Dùng các giải pháp phần mềm của chúng tôi
            <br className="hidden md:block" /> giúp khách hàng Doanh nghiệp kinh
            doanh hiệu quả hơn.
          </HeroSubtitle>
          <Button
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
            href="/about"
            variant="primary"
            size="large"
          >
            Tìm hiểu{" "}
            <IconWrapper>
              <ChevronIcon />
            </IconWrapper>
          </Button>
          <HeroImage />
        </Hero>

        <header className="py-16 sm:text-center">
          <h1 className="mb-4 mt-12 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Phần mềm thích ứng với mô hình Kinh doanh
          </h1>
          <p className="text-lg">
            Sử dụng các công cụ, giải pháp được thiết kế tối ưu cho việc quản lý
            vận hành của Doanh nghiệp
          </p>
          <div className="mt-8 flex gap-x-4 sm:justify-center">
            <Button
              className="translate-y-[-1rem] animate-fade-in opacity-0"
              href="/web1"
              variant="secondary"
              size="medium"
            >
              Demo website quản lý bán hàng <IconWrapper>→</IconWrapper>
            </Button>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-semibold leading-8">
                  {feature.name}
                </p>
                <p className="mt-2 text-sm leading-7 text-mauve8">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

const features = [
  {
    name: "Thiết kế websites",
    description:
      "Websites được các Doanh nghiệp, tổ chức dùng để giới thiệu đến khách hàng, đối tác như là cổng thông tin chính thức, nâng cao độ tin cậy",
    icon: GlobeAltIcon,
  },
  {
    name: "Ứng dụng web - mobile",
    description:
      "Thiết kế và xây các ứng dụng web mobile tương thích với mô hình Kinh doanh của Doanh nghiệp",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Gia công phần mềm",
    description: "Dịch vụ gia công tư vấn phát triển phần mềm",
    icon: CodeBracketIcon,
  },
  {
    name: "Thử nghiệm Blockchain",
    description:
      "Blockchain vẫn còn mới đang quá trình thử nghiệm để tìm ra mô hình ứng dụng phù hợp",
    icon: Squares2X2Icon,
  },
];
