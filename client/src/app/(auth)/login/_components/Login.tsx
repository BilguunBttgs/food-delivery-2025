"use client";

import { useFormik } from "formik";

import { loginValidationSchema } from "@/lib";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FormInput } from "@/components/dynamic-inputs";
import { Button } from "@/components/ui/button";
import { DynamicCardHeader } from "@/components/card";
import { LoginFooter } from "./LoginFooter";
import { FooterButtons } from "@/components/auth";
import { loginInitialValues } from "@/constants";
import { useContext } from "react";
import { UserContext } from "@/app/(main)/context";

export const Login = () => {
  const { push } = useRouter();
  const { login } = useContext(UserContext);
  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password);
    },
  });

  const formErrorPassword = formik.touched.password && formik.errors.password;

  const formErrorEmail = formik.touched.email && formik.errors.email;

  const emailInputProps = {
    name: "email",
    placeholder: "Email",
    value: formik.values.email,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    inputError: formErrorEmail,
    inputErrorMessage: formik.errors.email,
  };
  const passwordInputProps = {
    name: "password",
    placeholder: "Password",
    type: "password",
    value: formik.values.password,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    inputError: formErrorPassword,
    inputErrorMessage: formik.errors.password,
  };

  const hasInputError = !!formik.errors.email;
  const isInputEmpty = !formik.values.email;
  const isPasswordEmpty = !formik.values.password;

  const isButtonDisabled = [hasInputError, isInputEmpty, isPasswordEmpty].some(
    (value) => value
  );
  const navigateToForgotPassword = () => {
    push("/forgot-password");
  };

  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <DynamicCardHeader
        title="Log in"
        description="Log in to enjoy your favorite dishes."
      />

      <CardContent className="p-0">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <div className="grid items-start w-full gap-4">
            <FormInput {...emailInputProps} />
            <FormInput {...passwordInputProps} />
            <Button
              variant="link"
              className="p-0 underline w-fit"
              onClick={navigateToForgotPassword}
            >
              Forgot password ?
            </Button>
          </div>
          <FooterButtons
            buttonDisable={isButtonDisabled}
            buttonText="Let`s Go"
          />
        </form>
      </CardContent>
      <LoginFooter />
    </Card>
  );
};
