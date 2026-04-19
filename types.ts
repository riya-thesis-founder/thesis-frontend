
export enum UserRole {
  RESEARCHER = 'RESEARCHER',
  PARTICIPANT = 'PARTICIPANT',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isVerified: boolean;
}

export interface ResearchProject {
  id: string;
  researcherId: string;
  domain: string;
  topic: string;
  sampleSize: number;
  objective: string;
  googleFormUrl: string;
  duration: string;
  status: 'PENDING' | 'ACTIVE' | 'COMPLETED';
  createdAt: string;
}

export interface PricingInputs {
  sampleSize: number;
  durationInDays: number;
  dataType: string;
  questionCount: number;
}
