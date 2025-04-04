"use client";

import { Button } from "@/components/ui/button";
import { footerLinksContent } from "@/constants";
import { useRouter } from "next/navigation";

export const FooterLinks = () => {
  const { push } = useRouter();

  const handleNavigation = (path: string) => () => {
    push(path);
  };

  const contents = footerLinksContent;

  return contents.map((content, index) => {
    return (
      <div key={index} className="flex flex-col items-start text-white">
        <p className="text-muted-foreground">{content.title}</p>
        {content.buttons.map((button, index) => {
          return (
            <Button
              key={index}
              variant="link"
              onClick={handleNavigation(button.href)}
              className="p-0 text-white"
            >
              {button.label}
            </Button>
          );
        })}
      </div>
    );
  });
};
