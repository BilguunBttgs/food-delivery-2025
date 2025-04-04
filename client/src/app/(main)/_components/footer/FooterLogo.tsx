import { NomNomLogo } from "@/components/icons";

export const FooterLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-white">
      <div className="">
        <NomNomLogo width={46} height={37} />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex text-xl font-semibold ">
          <p className="text-white ">Nom</p>
          <p className="text-[#EF4444]">Nom</p>
        </div>
        <p className="text-xs">Swift delivery</p>
      </div>
    </div>
  );
};
