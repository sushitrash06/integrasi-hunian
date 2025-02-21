"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { ApiResponse, ProfileData } from "./type";
import { useAuthStore } from "@/src/store/authStore";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface ProfileContextType {
  profile: ProfileData | null;
  loading: boolean;
  error: string | null;
  fetchProfile: () => void;
  isAuthenticated: boolean;
  logout: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { token, clearAuth } = useAuthStore(); // Ambil token dari Zustand Store

  useEffect(() => {
    fetchProfile(); // Panggil fetchProfile() langsung saat komponen mount
  }, []); // Hapus token dari dependency agar tetap fetch data meskipun belum login

  console.log(profile, "ini profile");

  const fetchProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<ApiResponse>(`${API_BASE_URL}/api/auth/profile-contact?userId=1`);
      console.log(response.data.data);
      setProfile(response.data.data);
    } catch (err) {
      setError(`Failed to load profile ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearAuth();
    setProfile(null);
  };

  return (
    <ProfileContext.Provider value={{ profile, loading, error, fetchProfile, isAuthenticated: !!token, logout }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
