export type Techstack = {
  _id: string;
  name: string;
  desc: string;
  status: string;
};
export type ProjectStatus = {
  _id: string;
  name: string;
};
export type ProjectType = {
  _id: string;
  name: string;
};
export type Projects = {
  _id: string;
  name: string;
  projectType: ProjectType;
  projectStatus: ProjectType;
  techStack: Techstack[];
  department: Department;
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

export type Department = {
  _id: string;
  name: string;
  desc: string;
  techStack: Techstack[];
  projects: Projects[];
  employee: Employee[];
};

export type ProjectsResponse = {
  name: string;
  projectType: string;
  projectStatus: string;
  techStack?: string[];
  department?: string;
  member?: string[];
  _id?: string;
};
