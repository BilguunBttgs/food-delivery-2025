"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { determineValidationSchema, handleSignUp } from "@/lib";
import { SignUpEmailBox } from "./SignUpEmailBox";
import { SignUpPasswordBox } from "./SignUpPasswordBox";
import { useRouter } from "next/navigation";

export const Signup = () => {
  const { push } = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(0);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: determineValidationSchema(currentStep),
    onSubmit: async (values) => {
      const data = await handleSignUp(values);

      if (data?.accessToken) {
        localStorage.setItem("token", data.accessToken);
        push("/");
      }
    },
  });

  const handleNext = () => {
    setCurrentStep((previous) => previous + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((previous) => previous - 1);
  };

  const emailBoxProps = {
    values: formik.values,
    errors: formik.errors,
    touched: formik.touched,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleNext: handleNext,
  };
  const passwordBoxProps = {
    values: formik.values,
    errors: formik.errors,
    touched: formik.touched,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleCreateAccount: formik.handleSubmit,
    handleBack: handlePrevious,
  };

  const StepComponents = [
    <SignUpEmailBox key={0} {...emailBoxProps} />,
    <SignUpPasswordBox key={1} {...passwordBoxProps} />,
  ];

  return StepComponents[currentStep];
};
