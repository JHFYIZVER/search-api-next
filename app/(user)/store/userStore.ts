import { create } from "zustand";
import userType from "../@types/userType";

const useUserStore = create<userType>()((set) => ({
  isAuth: false,
  setIsAuth: (value: boolean) => set({ isAuth: value }),
  id: "",
  email: "",
  name: "",
}));

export default useUserStore;
