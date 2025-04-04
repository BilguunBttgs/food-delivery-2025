import Image from "next/legacy/image";

type HeaderUserProfileIconProps = {
  profileImage?: string;
};

export const HeaderUserProfileIcon = ({
  profileImage = "https://i.pinimg.com/736x/b2/b1/97/b2b197e5f03fc839ce36ffef82cfcf80.jpg",
}: HeaderUserProfileIconProps) => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden rounded-full h-9 w-9">
        <Image
          src={profileImage}
          alt="cover_img"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};
