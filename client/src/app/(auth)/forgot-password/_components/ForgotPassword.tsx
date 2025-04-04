"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { determineValidationSchema, handleSendPasswordResetMail } from "@/lib";
import { ForgotPasswordEmailCard } from "./ForgotPasswordEmailCard";
import { ConfirmEmail } from "./ConfirmEmail";

export const ForgotPassword = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: determineValidationSchema(currentStep),
    onSubmit: async (values) => {
      await handleSendPasswordResetMail(values);
    },
  });

  const handleNext = () => {
    formik.handleSubmit();
    setCurrentStep((previous) => previous + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((previous) => previous - 1);
  };

  const forgotPasswordEmailCardProps = {
    values: formik.values,
    errors: formik.errors,
    touched: formik.touched,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleNext: handleNext,
  };

  const confirmEmailProps = {
    handlePrevious: handlePrevious,
    email: formik.values.email,
  };

  const StepComponents = [
    <ForgotPasswordEmailCard key={0} {...forgotPasswordEmailCardProps} />,
    <ConfirmEmail key={1} {...confirmEmailProps} />,
  ];

  return StepComponents[currentStep];
};
