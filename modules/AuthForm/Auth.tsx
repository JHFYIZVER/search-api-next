import modalProps from "./@types/modalProps";
import Login from "./components/LoginForm";
import Register from "./components/RegistrationForm";
import { useForm } from "react-hook-form";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

const ModalAuth = ({ isOpen, setIsOpen }: modalProps) => {
  const { clearErrors, reset } = useForm();
  const [isRegister, setIsRegister] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        clearErrors();
        reset();
        setIsOpen(false);
      }}
      transition
      className="fixed text-white inset-0 flex w-screen items-center justify-center bg-black/70 z-10 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
    >
      <DialogPanel className="max-w-[460px] w-full space-y-4 bg-white p-12 rounded-[30px] relative">
        <DialogTitle className="font-bold text-black text-xl flex items-center gap-5">
          <span
            className={
              isRegister ? "border-b cursor-pointer" : "cursor-pointer"
            }
            onClick={() => {
              clearErrors();
              reset();
              setIsRegister(true);
            }}
          >
            Регистрация
          </span>
          <span
            className={
              !isRegister ? "border-b cursor-pointer" : "cursor-pointer"
            }
            onClick={() => {
              clearErrors();
              reset();
              setIsRegister(false);
            }}
          >
            Вход
          </span>
        </DialogTitle>
        {isRegister ? <Register /> : <Login />}
        <svg
          onClick={() => {
            clearErrors();
            reset();
            setIsOpen(false);
          }}
          className="absolute top-4 right-4 cursor-pointer"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.366161 25.1149C-0.121994 25.603 -0.121994 26.3945 0.366161 26.8826C0.854317 27.3708 1.64577 27.3708 2.13393 26.8826L13.6243 15.3923L25.1149 26.8828C25.603 27.371 26.3945 27.371 26.8826 26.8828C27.3708 26.3947 27.3708 25.6032 26.8826 25.1151L15.3921 13.6245L26.8827 2.13388C27.3708 1.64573 27.3708 0.854272 26.8827 0.366117C26.3945 -0.122039 25.6031 -0.122039 25.1149 0.366117L13.6243 11.8567L2.13388 0.366318C1.64573 -0.121837 0.854272 -0.121837 0.366117 0.366318C-0.122039 0.854474 -0.122039 1.64593 0.366117 2.13409L11.8565 13.6245L0.366161 25.1149Z"
            fill="black"
          />
        </svg>
      </DialogPanel>
    </Dialog>
  );
};

export default ModalAuth;
