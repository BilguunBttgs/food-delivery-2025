"use client";
import { Suspense } from "react";
import { PasswordResetBox } from "./_components";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <PasswordResetBox />;
    </Suspense>
  );
}
