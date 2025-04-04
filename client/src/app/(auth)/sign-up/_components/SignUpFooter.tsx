"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../../../components/ui/button";
import { CardFooter } from "../../../../components/ui/card";

export const SignUpFooter = () => {
  const { push } = useRouter();

  const jumpToLogin = () => {
    push("/login");
  };

  return (
    <CardFooter className="flex flex-col justify-center gap-6 p-0">
      <div className="flex items-center gap-3">
        <p className="text-muted-foreground">Already have an account?</p>
        <Button
          variant="link"
          className="text-[#2563EB] text-base"
          size="icon"
          onClick={jumpToLogin}
        >
          Login
        </Button>
      </div>
    </CardFooter>
  );
};
