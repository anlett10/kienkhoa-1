import ContactInfo from "./ContactInfo";
import CalCom from "./CalCom";

export default function ContactUsPage() {
  return (
    <div className="my-14 mx-auto flex w-full flex-col px-0 pb-2 md:flex-row lg:my-16 xl:my-20 xl:max-w-screen-xl">
      <div className="flex h-full flex-col px-2 md:w-full lg:w-1/2 2xl:w-2/6">
        <ContactInfo />
      </div>
      <div className="flex h-full flex-col px-2 md:w-full lg:w-1/2 2xl:w-2/6">
        <CalCom />
      </div>
    </div>
  );
}
