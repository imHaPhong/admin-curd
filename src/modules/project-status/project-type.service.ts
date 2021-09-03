import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateProjectTypeRespone } from "./project-type.type";

const apiAuthUrl = `${config.apiBaseUrl}/api/auth`;

export async function createProjectStatus(projectType: CreateProjectTypeRespone) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.post("http://localhost:8080/project-status", projectType);
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function updateProjectStatus(projectType: CreateProjectTypeRespone) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.put("http://localhost:8080/project-status", projectType);
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteProjectStatus(id: string) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.delete("http://localhost:8080/project-status", {
      data: {
        id,
      },
    });
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
