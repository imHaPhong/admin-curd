import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateTechstackRespone } from "./tech-stack.type";

const apiTechstackUrl = `${config.apiBaseUrl}tech-stack`;

export async function getTechstack({
  name,
  search,
  page,
}: {
  name?: string;
  search?: string;
  page?: string;
}) {
  try {
    const res = await apiClientBrowser.get(apiTechstackUrl, {
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

export async function createTechstack(projectType: CreateTechstackRespone) {
  try {
    const res = await apiClientBrowser.post(apiTechstackUrl, projectType);
    return res.data as CreateTechstackRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function updateTechstack(projectType: CreateTechstackRespone) {
  try {
    const res = await apiClientBrowser.put(apiTechstackUrl, projectType);
    return res.data as CreateTechstackRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteTechstack(id: string) {
  try {
    const res = await apiClientBrowser.delete(apiTechstackUrl, {
      data: {
        id,
      },
    });
    return res.data as CreateTechstackRespone;
  } catch (err) {
    console.error(err);
  }
}
