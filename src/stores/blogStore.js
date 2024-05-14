import { create } from "zustand";
import blogPosts from "../service/dataService";

const useBlogStore = create((set) => ({
  blogPosts: [...blogPosts],
  addBlogPost: (post) =>
    set((state) => ({ blogPosts: [...state.blogPosts, post] })),
  removeBlogPost: (postId) =>
    set((state) => ({
      blogPosts: state.blogPosts.filter((post) => post.id !== postId),
    })),
}));

export default useBlogStore;
