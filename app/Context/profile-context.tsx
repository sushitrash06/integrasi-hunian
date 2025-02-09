"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { ApiResponse, ProfileData } from "./type";

// Define context shape
interface ProfileContextType {
  profile: ProfileData | null;
  loading: boolean;
  error: string | null;
  fetchProfile: () => void;
}
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode; 
}

// Context provider component
export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.get<ApiResponse>(`${API_BASE_URL}/api/profile-contact`);
      setProfile(response.data.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load profile");
      setLoading(false);
      console.log(err)
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, loading, error, fetchProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the profile context
export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
