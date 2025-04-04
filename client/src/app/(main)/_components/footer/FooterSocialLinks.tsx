import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";

export const FooterSocialLinks = () => {
  return (
    <div className="flex flex-col items-start text-white">
      <p className="text-muted-foreground">FOLLOW US</p>
      <div className="flex">
        <Button className="relative w-7 h-7">
          <Image
            src="/facebookIcon.png"
            alt="cover_img"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Button>
        <Button className="relative w-7 h-7">
          <Image
            src="/instaIcon.png"
            alt="cover_img"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Button>
      </div>
    </div>
  );
};
