import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateProjectTypeRespone, ProjectTypeRespone } from "./project-type.type";

const apiProjectTypeUrl = `${config.apiBaseUrl}project-type`;

export async function getProjectType({
  name,
  search,
  page,
}: {
  name?: string;
  search?: string;
  page?: string;
}) {
  try {
    const res = await apiClientBrowser.get(apiProjectTypeUrl, {
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

export async function createProjectType(projectType: CreateProjectTypeRespone) {
  try {
    const res = await apiClientBrowser.post(apiProjectTypeUrl, projectType);
    return res.data as ProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function updateProjectType(projectType: CreateProjectTypeRespone) {
  try {
    const res = await apiClientBrowser.put(apiProjectTypeUrl, projectType);
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteProjectType(id: string) {
  try {
    const res = await apiClientBrowser.delete(apiProjectTypeUrl, {
      data: {
        id,
      },
    });
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
