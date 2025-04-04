import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type BackButton = {
  handleClick: () => void;
};
export const BackButton = ({ handleClick }: BackButton) => {
  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      <ChevronLeft />
    </Button>
  );
};
