"use client";

import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export const LoginFooter = () => {
  const { push } = useRouter();

  const jumpToLogin = () => {
    push("/sign-up");
  };

  return (
    <CardFooter className="flex flex-col justify-center gap-6 p-0">
      <div className="flex items-center gap-3">
        <p className="text-muted-foreground">Don’t have an account?</p>
        <Button
          variant="link"
          className="text-[#2563EB] text-base"
          size="icon"
          onClick={jumpToLogin}
        >
          Sign up
        </Button>
      </div>
    </CardFooter>
  );
};
