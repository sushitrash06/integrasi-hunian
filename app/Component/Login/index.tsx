"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/src/store/authStore";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [error, setError] = useState<string | null>(null);
  const { setAuth } = useAuthStore();
  const router = useRouter(); // Digunakan dengan benar di bawah

  const onSubmit = async (data: LoginFormData) => {
    setError(null); // Reset error sebelum login
    try {
      const res = await axios.post("/api/auth/login", data);
      setAuth(res.data.token); // Simpan token dan user
      router.push("/dashboard"); // Redirect ke dashboard
    } catch (error: unknown) {
      console.log(error, "ini error");
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Login failed");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };
  

  return (
    <div className="max-w-sm mx-auto mt-10 p-5 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center">Login</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
