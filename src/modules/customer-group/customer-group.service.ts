import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CreateCustomerGroupResponseType } from "./customer-group.type";

const apiCustomerGroupUrl = `${config.apiBaseUrl}customer-group`;

export async function getCustomergroup({
  name,
  search,
  page,
}: {
  name?: string;
  search?: string;
  page?: string;
}) {
  try {
    const res = await apiClientBrowser.get(apiCustomerGroupUrl, {
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

export async function createCustomergroup(Customergroup: CreateCustomerGroupResponseType) {
  try {
    const res = await apiClientBrowser.post(apiCustomerGroupUrl, Customergroup);
    return res.data as CreateCustomerGroupResponseType;
  } catch (err) {
    console.error(err);
  }
}
export async function updateCustomergroup(Customergroup: CreateCustomerGroupResponseType) {
  try {
    const res = await apiClientBrowser.put(apiCustomerGroupUrl, Customergroup);
    return res.data as CreateCustomerGroupResponseType;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteCustomergroup(id: string) {
  try {
    const res = await apiClientBrowser.delete(apiCustomerGroupUrl, {
      data: {
        id,
      },
    });
    return res.data as CreateCustomerGroupResponseType;
  } catch (err) {
    console.error(err);
  }
}
