import Image from "next/legacy/image";

export const AuthBigImage = () => {
  return (
    <div className="relative w-[60%] overflow-hidden p-5">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <Image
          src="/deliveryGuy.jpeg"
          alt="cover_img"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};
