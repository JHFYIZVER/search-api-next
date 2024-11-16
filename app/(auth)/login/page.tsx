"use client";
import { AuthModal, useModalStore } from "@/modules/AuthForm/index";

const Page = () => {
  const { isOpen, setIsOpen } = useModalStore();
  return <AuthModal isRegistration={false} isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default Page;
