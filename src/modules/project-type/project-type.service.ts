import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateProjectTypeRespone } from "./project-type.type";

const apiAuthUrl = `${config.apiBaseUrl}/api/auth`;

export async function getProjectType(name?: string) {
  try {
    const res = await apiClientBrowser.get("http://localhost:8080/project-type", {
      params: {
        name,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function createProjectType(projectType: CreateProjectTypeRespone) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.post("http://localhost:8080/project-type", projectType);
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function updateProjectType(projectType: CreateProjectTypeRespone) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.put("http://localhost:8080/project-type", projectType);
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteProjectType(id: string) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.delete("http://localhost:8080/project-type", {
      data: {
        id,
      },
    });
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
