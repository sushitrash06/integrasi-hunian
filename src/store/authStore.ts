import { create } from "zustand";



interface AuthState {
  token: string | null;
  setAuth: (token: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  let token: string | null = null;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  return {
    token,

    setAuth: (token) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
      }
      set({ token });
    },

    clearAuth: () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      set({ token: null});
    },
  };
});
