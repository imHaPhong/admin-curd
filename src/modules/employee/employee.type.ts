import { ProjectType } from "../project-type";

export type Techstack = {
  _id: string;
  name: string;
  desc: string;
  status: string;
};
export type Projects = {
  _id: string;
  name: string;
  projectType: ProjectType[];
  projectStatus: ProjectType[];
  techStack: Techstack[];
  department: Department[];
  member: Employee[];
};
export type Employee = {
  _id: string;
  name: string;
  DoB: string;
  phonemumber: string;
  techStack: Techstack[];
  projects: Projects[];
};

export type EmployeeRequest = {
  _id?: string;
  name: string;
  DoB: Date;
  phonemumber: string;
  workExperience: {
    techstackId: string;
    experience: string;
  }[];
  projects: Projects[];
  techstack?: Techstack[];
};
export type EmployeeDetail = {
  _id?: string;
  name: string;
  DoB: Date;
  phonenumber: string;
  workExperience: {
    techstackId: string;
    experience: string;
  }[];
  projects: Projects[];
  techStack?: Techstack[];
};

export type Department = {
  _id: string;
  name: string;
  desc: string;
  techStack: Techstack[];
  projects: Projects[];
  employee: Employee[];
};

export type updateEmployeeType = {
  _id: string;
  name: string;
  desc: string;
  techStack: string[];
  projects: string[];
  pId?: string;
};
