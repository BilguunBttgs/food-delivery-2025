import { Header } from "@/app/(main)/_components";
import { Footer } from "@/app/(main)/_components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#404040]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
