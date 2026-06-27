export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  images: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  course: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}
