import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateProjectTypeRespone } from "../project-type/project-type.type";
import { ProjectsResponse } from "./department.type";

const apiAuthUrl = `${config.apiBaseUrl}/api/auth`;

export async function getTechstack(search?: string) {
  try {
    const res = await apiClientBrowser.get("http://localhost:8080/tech-stack", {
      params: {
        search,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
export async function getProjectStatus(search?: string) {
  try {
    const res = await apiClientBrowser.get("http://localhost:8080/project-status", {
      params: {
        search,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
export async function getProjectType(search?: string) {
  try {
    const res = await apiClientBrowser.get("http://localhost:8080/project-type", {
      params: {
        search,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getProject(search?: string) {
  try {
    const res = await apiClientBrowser.get("http://localhost:8080/project", {
      params: {
        search,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getEmployee(search?: string) {
  try {
    const res = await apiClientBrowser.get("http://localhost:8080/employee", {
      params: {
        search,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getDepartment(name?: string) {
  try {
    const res = await apiClientBrowser.get("http://localhost:8080/department", {
      params: {
        name,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function createProject(Customergroup: ProjectsResponse) {
  try {
    const res = await apiClientBrowser.post("http://localhost:8080/project", Customergroup);
    return res.data as ProjectsResponse;
  } catch (err) {
    console.error(err);
  }
}
export async function updateCustomergroup(Customergroup: CreateProjectTypeRespone) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.put("http://localhost:8080/customer-group", Customergroup);
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteCustomergroup(id: string) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.delete("http://localhost:8080/customer-group", {
      data: {
        id,
      },
    });
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
