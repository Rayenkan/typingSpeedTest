import { create } from "zustand";

interface TestStore {
  filter: string[];
  setFilter: (update: (prevFilter: string[]) => string[]) => void; // Accept a function to update filter
  testBy: string;
  setTestBy: (testBy: string) => void;
  duration: number;
  setDuration: (duration: number) => void;
  length: number;
  setLength: (length: number) => void;
}

const useTestStore = create<TestStore>((set) => ({
  filter: [],
  setFilter: (update) => set((state) => ({ filter: update(state.filter) })), // Apply the update function
  testBy: "time",
  setTestBy: (testBy) => set({ testBy }),
  duration: 30,
  setDuration: (duration) => set({ duration }),
  length: 25,
  setLength: (length) => set({ length }),
}));

export default useTestStore;
