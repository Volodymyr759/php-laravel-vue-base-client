import axios from "axios";
import authHeader from "./authHeader";
import { IEditCreateLeaseDto, ILease, ILeaseApiData } from "@/models/Lease";

export const getLeasesAxios = async (search: string, status_filter: string, sort_field: string, sort: string, limit: number, page: number) => {
  return (await axios.get<ILeaseApiData>("/leases", 
    {params: {search, status_filter, sort_field, sort, limit, page}, headers: authHeader()})).data;
}

export const createLeaseAxios = async (editCreateLeaseDto: IEditCreateLeaseDto) => {
  return (await axios.post<ILease>("/leases", editCreateLeaseDto, { headers: authHeader() })).data;
}

export const updateLeaseAxios = async (editCreateLeaseDto: IEditCreateLeaseDto) => {
  return (await axios.put<ILease>("/leases", editCreateLeaseDto, { headers: authHeader() })).data;
}

export const deleteLeaseAxios = async (id: number) => {
  return (await axios.delete<ILease>(`/leases/${id}`, { headers: authHeader() })).data;
}