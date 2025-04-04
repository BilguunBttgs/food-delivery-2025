"use client";

import { Button } from "../ui/button";

type FooterButtonsProps = {
  buttonDisable?: boolean;
  buttonText: string;
  handleClick?: () => void;
};

export const FooterButtons = ({
  buttonDisable,
  buttonText,
  handleClick,
}: FooterButtonsProps) => {
  return (
    <div className="flex justify-between w-full gap-3">
      <Button
        type="submit"
        className="w-full"
        disabled={buttonDisable}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};
