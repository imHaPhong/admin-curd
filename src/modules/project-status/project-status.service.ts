import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateProjectStatusRespone } from "./project-status.type";

const apiProjectStatus = `${config.apiBaseUrl}project-status`;

export async function getProjectStatus({
  name,
  search,
  page,
}: {
  name?: string;
  search?: string;
  page?: string;
}) {
  try {
    const res = await apiClientBrowser.get(apiProjectStatus, {
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

export async function createProjectStatus(projectType: CreateProjectStatusRespone) {
  try {
    const res = await apiClientBrowser.post(apiProjectStatus, projectType);
    return res.data as CreateProjectStatusRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function updateProjectStatus(projectType: CreateProjectStatusRespone) {
  try {
    const res = await apiClientBrowser.put(apiProjectStatus, projectType);
    return res.data as CreateProjectStatusRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteProjectStatus(id: string) {
  try {
    const res = await apiClientBrowser.delete(apiProjectStatus, {
      data: {
        id,
      },
    });
    return res.data as CreateProjectStatusRespone;
  } catch (err) {
    console.error(err);
  }
}
