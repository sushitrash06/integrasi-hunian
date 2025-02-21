export interface ProfileData {
    id: number;
    documentId: string;
    email: string;
    number_phone: string;
    address: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  export interface ApiResponse {
    data: ProfileData;
    meta: object;
  }
  
  export interface Profile {
    id: number;
    name: string;
    phone: string;
    address: string;
    email: string;
  }
  