import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateTechstackRespone } from "./tech-stack.type";

const apiAuthUrl = `${config.apiBaseUrl}/api/auth`;

export async function getTechstack(name?: string) {
  try {
    const res = await apiClientBrowser.get("http://localhost:8080/tech-stack", {
      params: {
        name,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function createTechstack(projectType: CreateTechstackRespone) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.post("http://localhost:8080/tech-stack", projectType);
    return res.data as CreateTechstackRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function updateTechstack(projectType: CreateTechstackRespone) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.put("http://localhost:8080/tech-stack", projectType);
    return res.data as CreateTechstackRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteTechstack(id: string) {
  // eslint-disable-next-line no-console
  console.log(apiAuthUrl);
  try {
    const res = await apiClientBrowser.delete("http://localhost:8080/tech-stack", {
      data: {
        id,
      },
    });
    return res.data as CreateTechstackRespone;
  } catch (err) {
    console.error(err);
  }
}
