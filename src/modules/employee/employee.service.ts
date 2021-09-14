import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateProjectTypeRespone } from "../project-type/project-type.type";
import { EmployeeRequest } from "./employee.type";

const apiEmployeeUrl = `${config.apiBaseUrl}employee`;

export async function updateEmployee(Employee: EmployeeRequest) {
  try {
    const res = await apiClientBrowser.put(`${apiEmployeeUrl}`, Employee);
    return res.data as EmployeeRequest;
  } catch (err) {
    console.error(err);
  }
}

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

export async function getEmployee({
  name,
  search,
  page,
}: {
  name?: string;
  search?: string;
  page?: string;
}) {
  try {
    const res = await apiClientBrowser.get(apiEmployeeUrl, {
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

export async function createEmployee(Employee: EmployeeRequest) {
  try {
    const res = await apiClientBrowser.post("http://localhost:8080/employee", Employee);
    return res.data as EmployeeRequest;
  } catch (err) {
    console.error(err);
  }
}
export async function updateCustomergroup(Customergroup: CreateProjectTypeRespone) {
  try {
    const res = await apiClientBrowser.put("http://localhost:8080/customer-group", Customergroup);
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteCustomergroup(id: string) {
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
