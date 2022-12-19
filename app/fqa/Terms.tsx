"use client";

import { termsAndServices } from "./terms-settings";
import { Link, Element } from "react-scroll";

function makeTitleToDOMId(title: string) {
  return title.toLowerCase().split(" ").join("_");
}

export default function TermsPage() {
  return (
    <div className="3xl:px-32 3xl:pb-24 mt-12 border-b border-gray-300 px-4 pb-9 md:px-10 md:pb-14 lg:mt-14 lg:py-1 lg:px-7 lg:pb-16 xl:mt-16 xl:py-0 xl:px-16 2xl:px-24 2xl:pb-20">
      <div className="flex flex-col md:flex-row">
        <nav className="mb-8 md:mb-0 md:w-72 xl:w-3/12">
          <ol className="sticky z-10 md:top-16 lg:top-28">
            {termsAndServices?.map((item, index) => (
              <li key={item.id}>
                <Link
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to={makeTitleToDOMId(item.title)}
                  activeClass="text-heading font-semibold"
                  className="block cursor-pointer py-3 text-sm uppercase text-gray-700  lg:py-3.5 lg:text-base"
                >
                  {(index <= 9 ? "" : "") + index + ". " + `${item.title}`}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        {/* End of section scroll spy menu */}

        <div className="md:ps-8 md:w-9/12 ">
          {termsAndServices?.map((item) => (
            // @ts-ignore
            <Element
              key={item.title}
              id={makeTitleToDOMId(item.title)}
              className="mb-10"
            >
              <h2 className="text-heading mb-4 text-lg font-bold md:text-xl lg:text-2xl">
                {`${item.title}`}
              </h2>
              <div
                className="text-heading text-md leading-7 lg:text-base lg:leading-loose"
                dangerouslySetInnerHTML={{
                  __html: `${item.description}`,
                }}
              />
            </Element>
          ))}
        </div>
        {/* End of content */}
      </div>
    </div>
  );
}
