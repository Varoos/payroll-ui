import { apiClient } from "./apiClient";

export const getEmployees = async () => {
  const res = await apiClient.get("/employees");
  return res.data;
};
