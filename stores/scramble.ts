import { create } from "zustand";

type ScrambleState = {
  scramble: string;
  setScramble: (scramble: string) => void;
};

export const useScrambleStore = create<ScrambleState>((set) => ({
  scramble: "",
  setScramble: (scramble) => set({ scramble }),
}));
