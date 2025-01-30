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
  