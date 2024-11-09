"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AuthModal } from "@/modules/AuthForm";
import useModalStore from "@/modules/AuthForm/store/modalStore";
const Header = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { isOpen, setIsOpen } = useModalStore();
  return (
    <>
      <header className="header w-full bg-white">
        <div className="header-wrapper max-w-8xl mx-auto flex items-center justify-between px-5 py-4">
          <div className="header-logo flex gap-4 items-center">
            <Image src="/public/logo.png" alt="logo" width={30} height={30} />
            animepoisk
          </div>
          {!isAuth ? (
            <button className="bg-slate-800 text-white font-bold py-2 px-3 rounded-md" onClick={() => setIsOpen(true)}>Зарегистрироваться</button>
          ) : (
            <Link href="/user" className="header-user bg-black w-5 h-5"></Link>
          )}
        </div>
      </header>
      <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
