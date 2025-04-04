"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FormInput } from "../../../../components/dynamic-inputs";
import { isEmailValid } from "@/lib";
import { SignUpFooter } from "./SignUpFooter";
import { DynamicCardHeader } from "@/components/card";
import { FooterButtons } from "@/components/auth";

type EmailBoxProps = {
  values: { email: string };
  errors: { email?: string };
  touched: { email?: boolean };
  handleChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (_event: React.FocusEvent<HTMLInputElement>) => void;
  handleNext: () => void;
};

export const SignUpEmailBox = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleNext,
}: EmailBoxProps) => {
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
        title="Create your account"
        description="Sign up to explore your favorite dishes."
      />
      <CardContent className="p-0">
        <form onSubmit={handleNext}>
          <div className="flex flex-col gap-6">
            <div className="grid items-center w-full gap-6">
              <FormInput {...emailInputProps} />
            </div>
            <FooterButtons
              buttonDisable={isEmailValid({ errors, values })}
              buttonText="Let`s Go"
            />
          </div>
        </form>
      </CardContent>
      <SignUpFooter />
    </Card>
  );
};
