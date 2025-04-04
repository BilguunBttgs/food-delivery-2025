import { FooterBanner } from "./footer/FooterBanner";
import { FooterLinks } from "./footer/FooterLinks";
import { FooterLogo } from "./footer/FooterLogo";
import { FooterNotice } from "./footer/FooterNotice";
import { FooterSocialLinks } from "./footer/FooterSocialLinks";

export const Footer = () => {
  return (
    <div className="h-full bg-[#18181B] pt-16 flex-col flex gap-20 items-center overflow-hidden">
      <FooterBanner />
      <div className="container flex justify-between">
        <div>
          <FooterLogo />
        </div>
        <div className="flex justify-between gap-28">
          <FooterLinks />
          <FooterSocialLinks />
        </div>
      </div>
      <FooterNotice />
    </div>
  );
};
