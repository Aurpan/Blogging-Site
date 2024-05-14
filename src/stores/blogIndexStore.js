import { create } from "zustand";

const useBlogIndexStore = create((set) => ({
  maxIndex: 10,
  incrementIndex: () => set((state) => ({ maxIndex: state.blogPosts + 1 })),
}));

export default useBlogIndexStore;
