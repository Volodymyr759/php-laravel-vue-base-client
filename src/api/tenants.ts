import axios from "axios";
import authHeader from "./authHeader";
import { IEditCreateTenantDto, ITenant, ITenantApiData, ISearchTenantByFullName } from "@/models/Tenant";

export const getTenantsAxios = async (search: string, sort_field: string, sort: string, limit: number, page: number) => {
  return (await axios.get<ITenantApiData>("/tenants", {params: {search, sort_field, sort, limit, page}, headers: authHeader()})).data};

export const createTenantAxios = async (editCreateTenantDto: IEditCreateTenantDto) => {
  return (await axios.post<ITenant>("/tenants", editCreateTenantDto, { headers: authHeader() })).data;
}

export const updateTenantAxios = async (editCreateTenantDto: IEditCreateTenantDto) => {
  return (await axios.put<ITenant>("/tenants", editCreateTenantDto, { headers: authHeader() })).data;
}

export const deleteTenantAxios = async (id: number) => {
  return (await axios.delete<ITenant>(`/tenants/${id}`, { headers: authHeader() })).data;
}

export const searchTenantsAxios = async (searchText: string) => {
  return (await axios.get<ISearchTenantByFullName[]>(`/tenants/search/${searchText}`, { headers: authHeader() })).data;
}

