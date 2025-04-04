import { AuthBigImage } from "@/components/auth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-[40%] h-full flex items-center justify-end pr-12">
        {children}
      </div>
      <AuthBigImage />
    </div>
  );
}
