import { Button } from "@/components/ui/button";
import { footerNoticeContent } from "@/constants";

export const FooterNotice = () => {
  const contents = footerNoticeContent;
  return (
    <div className="flex w-[85%] border-t-2 border-[#71717A] py-8">
      {contents.map((content, index) => {
        return (
          <Button key={index} variant="link" className="text-muted-foreground">
            {content}
          </Button>
        );
      })}
    </div>
  );
};
