export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  profileImage: string | null;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}