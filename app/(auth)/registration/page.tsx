"use client";
import { AuthModal, useModalStore } from "@/modules/AuthForm/index";

const page = () => {
  const { isOpen, setIsOpen } = useModalStore();
  return (
    <AuthModal isRegistration={true} isOpen={isOpen} setIsOpen={setIsOpen} />
  );
};

export default page;
