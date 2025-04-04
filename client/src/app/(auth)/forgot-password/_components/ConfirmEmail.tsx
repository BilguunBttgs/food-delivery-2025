"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DynamicCardHeader } from "@/components/card";
import { BackButton } from "@/components/button";
import { FooterButtons } from "@/components/auth";
import { handleSendPasswordResetMail } from "@/lib";

type ConfirmEmailProps = {
  email: string;
  handlePrevious: () => void;
};

export const ConfirmEmail = ({ email, handlePrevious }: ConfirmEmailProps) => {
  const handleSend = async () => {
    await handleSendPasswordResetMail({ email: email });
  };
  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <BackButton handleClick={handlePrevious} />

      <div>
        <DynamicCardHeader title="Please verify Your Email" />
        <p className="text-muted-foreground">
          We just sent an email to <span className="text-primary">{email}</span>
          . Click the link in the email to verify your account.
        </p>
      </div>

      <CardContent className="p-0 h-fit">
        <FooterButtons
          buttonText="Send link"
          buttonDisable={false}
          handleClick={handleSend}
        />
      </CardContent>
    </Card>
  );
};
