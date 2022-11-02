import { ILease } from "@/models/Lease";

export interface ITenant {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  leases: ILease[];
}

export interface ITenantApiData {
  data: ITenant[];
  total: number;
}

export interface IEditCreateTenantDto {
  id: number | null;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export class EditCreateTenantDto implements IEditCreateTenantDto {
  id: number | null;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;

  constructor(id: number | null, first_name: string, last_name: string, email: string, phone: string) {
    this.id = id,
    this.first_name = first_name,
    this.last_name = last_name,
    this.email = email,
    this.phone = phone;
  }
}

export interface ISearchTenantByFullName {
  id: number;
  fullName: string;
}
