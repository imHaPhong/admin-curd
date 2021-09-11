import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateProjectTypeRespone } from "../project-type/project-type.type";

const apiCustomerGroupUrl = `${config.apiBaseUrl}/customer-group`;

export async function getCustomergroup(name?: string) {
  try {
    const res = await apiClientBrowser.get(`${apiCustomerGroupUrl}/`, {
      params: {
        name,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function createCustomergroup(Customergroup: CreateProjectTypeRespone) {
  try {
    const res = await apiClientBrowser.post("http://localhost:8080/customer-group", Customergroup);
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function updateCustomergroup(Customergroup: CreateProjectTypeRespone) {
  // eslint-disable-next-line no-console
  console.log(apiCustomerGroupUrl);
  try {
    const res = await apiClientBrowser.put("http://localhost:8080/customer-group", Customergroup);
    return res.data as CreateProjectTypeRespone;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteCustomergroup(id: string) {
  // eslint-disable-next-line no-console
  console.log(apiCustomerGroupUrl);
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
