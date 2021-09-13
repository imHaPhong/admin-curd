import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateProjectTypeRespone, ProjectTypeRespone } from "../project-type/project-type.type";
import { Department, updateDepartmentType } from "./department.type";

const apiBaseUrl = `${config.apiBaseUrl}`;

export async function getTechstack(search?: string) {
  try {
    const res = await apiClientBrowser.get(`${apiBaseUrl}tech-stack`, {
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
    const res = await apiClientBrowser.get(`${apiBaseUrl}project`, {
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
    const res = await apiClientBrowser.get(`${apiBaseUrl}employee`, {
      params: {
        search,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getDepartment({
  name,
  search,
  page,
}: {
  name?: string;
  search?: string;
  page?: string;
}) {
  try {
    const res = await apiClientBrowser.get(`${apiBaseUrl}department`, {
      params: {
        name,
        search,
        page,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function createDepartment(Customergroup: CreateProjectTypeRespone) {
  try {
    const res = await apiClientBrowser.post(`${apiBaseUrl}department`, Customergroup);
    return res.data as ProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function updateDepartment(Customergroup: updateDepartmentType) {
  try {
    const res = await apiClientBrowser.put(`${apiBaseUrl}department`, Customergroup);
    return res.data as Department;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteCustomergroup(id: string) {
  try {
    const res = await apiClientBrowser.delete(`${apiBaseUrl}customer-group`, {
      data: {
        id,
      },
    });
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
