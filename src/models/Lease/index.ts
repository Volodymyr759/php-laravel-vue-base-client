import { IDocument } from "@/models/Document";
import { IProperty } from "@/models/Property";
import { ITenant } from "@/models/Tenant";

export interface ILease {
  id: number;
  property_id: number;
  tenant_id: number;
  start_date: Date;
  end_date: Date;
  status: LeaseStatus;
  property: IProperty;
  tenant: ITenant;
  documents: IDocument[];
}

export enum LeaseStatus {
  REQUESTED = 'Requested',
  APPROVED = 'Approved',
  IN_PROGRESS = 'in Progress',
  REJECTED = 'Rejected',
  COMPLETED = 'Completed'
}

export interface ILeaseApiData {
  data: ILease[];
  total: number;
}

export interface IEditCreateLeaseDto {
  id: number | null;
  property_id: number;
  tenant_id: number;
  start_date: Date;
  end_date: Date;
  status: LeaseStatus;
}

export class EditCreateLeaseDto implements IEditCreateLeaseDto {
  id: number | null;
  property_id: number;
  tenant_id: number;
  start_date: Date;
  end_date: Date;
  status: LeaseStatus;

  constructor(id: number | null, propertyId: number, tenantId: number, startDate: Date, endDate: Date, status: LeaseStatus) {
    this.id = id,
    this.property_id = propertyId,
    this.tenant_id = tenantId,
    this.start_date = startDate,
    this.end_date = endDate,
    this.status = status;
  }
}
