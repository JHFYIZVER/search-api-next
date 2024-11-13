import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import LogOutBtn from "./UI/LogOutBtn";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="header w-full bg-white">
      <div className="header-wrapper max-w-8xl mx-auto flex items-center justify-between px-5 py-4">
        <div className="header-logo flex gap-4 items-center">
          <Image src={logo} alt="logo" width={50} height={30} />
          Animepoisk
        </div>

        {session?.user ? (
          <div className="flex gap-4">
            <Link
              href="/user"
              className="bg-slate-800 text-white font-bold py-2 px-3 rounded-md"
            >
              Профиль
            </Link>
            <LogOutBtn />
          </div>
        ) : (
          <Link
            href="/registration"
            className="bg-slate-800 text-white font-bold py-2 px-3 rounded-md"
          >
            Зарегистрироваться
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
