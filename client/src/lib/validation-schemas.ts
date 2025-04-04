import * as Yup from "yup";

export const emailValidationSchema = Yup.object({
  email: Yup.string()
    .required("This field is required")
    .test("email", "Enter a valid email", (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }),
});

export const passwordValidationSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Weak password. Use at least 6 numbers and symbols."),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), undefined],
    "Those password did’t match, Try again"
  ),
});

export const loginValidationSchema = emailValidationSchema.shape({
  password: Yup.string().required("Password is required"),
});

export const determineValidationSchema = (currentStep: number) => {
  if (currentStep === 0) {
    return emailValidationSchema;
  }
  return passwordValidationSchema;
};
