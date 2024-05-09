import { create } from "zustand";

type State = {
  theme: "light" | "dark";
  viewport: {
    width: number;
    height: number;
  };
  setTheme: (theme: "light" | "dark") => void;
  setViewport: (width: number, height: number) => void;
};

export const useUserStore = create<State>((set) => ({
  theme: "light",
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  setTheme: (theme) => set({ theme }),
  setViewport: (width, height) => set({ viewport: { width, height } }),
}));
