import axios from "axios";
import authHeader from "./authHeader";
import { IEditCreatePropertyDto, IProperty, IPropertyApiData, ISearchPropertyByAddressDto } from "@/models/Property";

export const getPropertiesAxios = async (search: string, status_filter: string, sort_field: string, sort: string, limit: number, page: number) => {
  return (await axios.get<IPropertyApiData>("/properties", {params: {search, status_filter, sort_field, sort, limit, page}, headers: authHeader()})).data;
};

export const createPropertyAxios = async (editCreatePropertyDto: IEditCreatePropertyDto) => {
  return (await axios.post<IProperty>("/properties", editCreatePropertyDto, { headers: authHeader() })).data;
};

export const updatePropertyAxios = async (editCreatePropertyDto: IEditCreatePropertyDto) => {
  return (await axios.put<IProperty>("/properties", editCreatePropertyDto, { headers: authHeader() })).data;
};

export const deletePropertyAxios = async (id: number) => {
  return (await axios.delete<IProperty>(`/properties/${id}`, { headers: authHeader() })).data;
};

export const searchPropertiesAxios = async (searchText: string) => {
  return (await axios.get<ISearchPropertyByAddressDto[]>(`/properties/search/${searchText}`, { headers: authHeader() })).data;
}