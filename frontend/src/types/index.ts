// Definición de tipos e interfaces para toda la aplicación

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'candidate' | 'recruiter';
  profileImage?: string;
  cv?: string;
  company?: string;
  bio?: string;
  createdAt: string;
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  location: string;
  jobType: 'full-time' | 'part-time' | 'contract';
  recruiterId: string;
  recruiterName: string;
  createdAt: string;
  closedAt?: string;
  applicants: number;
  tags: string[];
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  candidateId: string;
  candidateName: string;
  candidateEmail: string;
  cvUrl: string;
  coverLetter: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedAt: string;
  companyName: string;
}

export interface AuthState {
  user: User | null;
  token?: string;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'candidate' | 'recruiter';
  company?: string;
}