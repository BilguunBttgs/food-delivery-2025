"use client";

import { handlePasswordReset, passwordValidationSchema } from "@/lib";
import { useFormik } from "formik";
import { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { FormInput } from "../../../../components/dynamic-inputs";
import { Checkbox } from "../../../../components/ui/checkbox";
import { DynamicCardHeader } from "@/components/card";
import { FooterButtons } from "@/components/auth";

export const PasswordResetBox = () => {
  const { push } = useRouter();

  const searchParams = useSearchParams();

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const token = searchParams.get("token");

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: passwordValidationSchema,
    onSubmit: async (values) => {
      const response = await handlePasswordReset({
        token: token,
        password: values.password,
      });
      if (response?.error) {
        return;
      }
      push(`/`);
    },
  });
  const formErrorPassword = formik.touched.password && formik.errors.password;

  const showPass = isShowPassword ? "" : "password";
  const formErrorPasswordConfirmation =
    formik.touched.passwordConfirmation && formik.errors.passwordConfirmation;

  const hasPasswordError = !!formik.errors.password;
  const hasConfirmError = !!formik.errors.passwordConfirmation;
  const isPasswordEmpty = !formik.values.password;
  const isConfirmEmpty = !formik.values.passwordConfirmation;

  const isButtonDisabled = [
    hasPasswordError,
    hasConfirmError,
    isPasswordEmpty,
    isConfirmEmpty,
  ].some((value) => value);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const passwordInputProps = {
    name: "password",
    placeholder: "Password",
    type: showPass,
    value: formik.values.password,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    inputError: formErrorPassword,
    inputErrorMessage: formik.errors.password,
  };
  const passwordConfirmationProps = {
    name: "passwordConfirmation",
    placeholder: "Confirm",
    type: showPass,
    value: formik.values.passwordConfirmation,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    inputError: formErrorPasswordConfirmation,
    inputErrorMessage: formik.errors.passwordConfirmation,
  };

  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <DynamicCardHeader
        title="Create new password"
        description="Set a new password with a combination of letters and numbers for better security."
      />

      <CardContent className="p-0">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <div className="grid items-center w-full gap-6">
            <div className="flex flex-col space-y-1.5 gap-4">
              <FormInput {...passwordInputProps} />
              <FormInput {...passwordConfirmationProps} />

              <div className="flex items-center space-x-2">
                <Checkbox id="showPass" onCheckedChange={handleShowPassword} />
                <label
                  htmlFor="showPass"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                >
                  Show password
                </label>
              </div>
            </div>
          </div>
          <FooterButtons
            buttonDisable={isButtonDisabled}
            buttonText="Let`s Go"
          />
        </form>
      </CardContent>
    </Card>
  );
};
