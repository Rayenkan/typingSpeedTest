import { create } from "zustand";

interface UserStore {
  username: string;
  setUsername: (username: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  username: "",
  setUsername: (username: string) => set({ username }),
  email: "",
  setEmail: (email: string) => set({ email }),
  password: "",
  setPassword: (password: string) => set({ password }),
}));

export default useUserStore;
