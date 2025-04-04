"use client";

import { Card, CardContent } from "@/components/ui/card";
import { isEmailValid } from "@/lib";
import { FormInput } from "@/components/dynamic-inputs";
import { DynamicCardHeader } from "@/components/card";
import { LoginFooter } from "../../login/_components";
import { FooterButtons } from "@/components/auth";

type ForgotPasswordEmailCardProps = {
  values: { email: string };
  errors: { email?: string };
  touched: { email?: boolean };
  handleChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (_event: React.FocusEvent<HTMLInputElement>) => void;
  handleNext: () => void;
};

export const ForgotPasswordEmailCard = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleNext,
}: ForgotPasswordEmailCardProps) => {
  const formError = touched.email && errors.email;

  const emailInputProps = {
    name: "email",
    placeholder: "Email",
    value: values.email,
    onChange: handleChange,
    onBlur: handleBlur,
    inputError: formError,
    inputErrorMessage: errors.email,
  };

  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <DynamicCardHeader
        title="Reset your password "
        description="Enter your email to receive a password reset link."
      />
      <CardContent className="p-0">
        <form onSubmit={handleNext} className="flex flex-col gap-6">
          <div className="grid items-center w-full">
            <FormInput {...emailInputProps} />
          </div>
          <FooterButtons
            buttonDisable={isEmailValid({ errors, values })}
            buttonText="Send link"
          />
        </form>
      </CardContent>
      <LoginFooter />
    </Card>
  );
};
