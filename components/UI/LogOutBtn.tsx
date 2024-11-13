"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@headlessui/react";
const LogOutBtn = () => {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/login`,
        })
      }
      className="bg-red-500 text-white font-bold py-2 px-3 rounded-md"
    >
      Выйти
    </Button>
  );
};

export default LogOutBtn;
