"use client";
import { useState } from "react";
import { HeaderAddressSelectButton } from "./header/HeaderAddressSelectButton";
import { HeaderCartButton } from "./header/HeaderCartButton";
import { HeaderLogo } from "./header/HeaderLogo";
import { HeaderUserProfileIcon } from "./header/HeaderUserProfileIcon";
import { OrderSheet } from "./orderSheet";
import { OrderSheetSuccessDialog } from "./orderSheet/OrderSheetSuccessDialog";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openSidebar = () => {
    setOpen(true);
  };
  const closeSidebar = () => {
    setOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
    setOpen(false);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <header className="w-full h-17 bg-[#18181B] py-3">
      <div className="container flex items-center justify-between mx-auto">
        <HeaderLogo />

        <div className="flex items-center gap-3 text-white">
          <HeaderAddressSelectButton />
          <HeaderCartButton count={1} openSidebar={openSidebar} />
          <HeaderUserProfileIcon />
        </div>
      </div>

      <OrderSheet
        open={open}
        closeSidebar={closeSidebar}
        openModal={openModal}
      />

      <OrderSheetSuccessDialog open={modalOpen} closeModal={closeModal} />
    </header>
  );
};
