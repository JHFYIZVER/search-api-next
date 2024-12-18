import { create } from "zustand";

type modalType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const useModalStore = create<modalType>()((set) => ({
  isOpen: true,
  setIsOpen: (value) => set({ isOpen: value }),
}));

export default useModalStore;
