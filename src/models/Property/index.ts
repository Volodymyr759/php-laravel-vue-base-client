import { IImage } from "@/models/Image";
import { ILease } from "@/models/Lease";

export interface IProperty {
  id: number;
  address: string;
  status: string;
  baths: number;
  beds: number;
  square: number;
  price: number;
  images: IImage[];
  leases: ILease[];
}

export enum PropertyStatus {
  AVAILABLE = 'Available',
  NOT_AVAILABLE = 'Not Available'
}

export interface IPropertyApiData {
  data: IProperty[];
  total: number;
}

export interface IEditCreatePropertyDto {
  id: number | null;
  address: string;
  status: string;
  baths: number;
  beds: number;
  square: number;
  price: number;
}

export class EditCreatePropertyDto implements IEditCreatePropertyDto {
  id: number | null;
  address: string;
  status: string;
  baths: number;
  beds: number;
  square: number;
  price: number;

  constructor(id: number | null, address: string, status: string, baths: number, beds: number, square: number, price: number) {
    this.id = id,
    this.address = address,
    this.status = status,
    this.baths = baths,
    this.beds = beds,
    this.square = square,
    this.price = price;
  }
}

export interface ISearchPropertyByAddressDto {
  id: number;
  address: string;
}
