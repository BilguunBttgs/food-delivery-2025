import { bannerTexts } from "@/constants";

export const FooterBanner = () => {
  return (
    <div className="bg-[#EF4444] w-full flex py-7 text-2xl font-bold text-white pl-24 text-nowrap gap-10 overflow-hidden">
      {bannerTexts.map((text, index) => {
        return <p key={index}>{text}</p>;
      })}
    </div>
  );
};
