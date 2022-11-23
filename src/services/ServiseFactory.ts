import { EditCreateLeaseDto, IEditCreateLeaseDto, LeaseStatus } from "@/models/Lease";
import { EditCreatePropertyDto } from "@/models/Property";
import { EditCreateTenantDto } from "@/models/Tenant";
import { LeaseService } from "@/services/LeaseService";
import { NotificationService } from "@/services/NotificationService";
import { PropertyService } from "@/services/PropertyService";
import { TenantService } from "@/services/TenantService";
import { ILeaseService, INotificationService, IPropertyService, ITenantService } from "./types";

export class ServiseFactory {
  // singletons
  private static instanceOfLeaseService: ILeaseService;
  private static instanceOfNotificationService: INotificationService;
  private static instanceOfPropertyService: IPropertyService;
  private static instanceOfTenantService: ITenantService;

  public static getLeaseServise(): ILeaseService {
    if (!this.instanceOfLeaseService) this.instanceOfLeaseService = new LeaseService();
    return this.instanceOfLeaseService;
  }

  public static getNotificationServise(): INotificationService {
    if (!this.instanceOfNotificationService) this.instanceOfNotificationService = new NotificationService();
    return this.instanceOfNotificationService;
  }

  public static getfPropertyServise(): IPropertyService {
    if (!this.instanceOfPropertyService) this.instanceOfPropertyService = new PropertyService();
    return this.instanceOfPropertyService;
  }

  public static getTenantsServise(): ITenantService {
    if (!this.instanceOfTenantService) this.instanceOfTenantService = new TenantService();
    return this.instanceOfTenantService;
  }

  public static createNewLeaseDto(id: number | null, propertyId: number, tenantId: number, startDate: Date, endDate: Date, status: LeaseStatus): IEditCreateLeaseDto {
    return new EditCreateLeaseDto(id, propertyId, tenantId, startDate, endDate, status);
  }

  public static createNewPropertyDto(id: number | null, address: string, status: string, baths: number, beds: number, square: number, price: number): EditCreatePropertyDto {
    return new EditCreatePropertyDto(id, address, status, baths, beds, square, price);
  }

  public static createNewTenantDto(id: number | null, first_name: string, last_name: string, email: string, phone: string): EditCreateTenantDto {
    return new EditCreateTenantDto(id, first_name, last_name, email, phone);
  }
}
