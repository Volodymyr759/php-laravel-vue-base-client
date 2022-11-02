import { ActionType } from "./types";
import { BaseServise } from "@/services/BaseServise";
import { IEditCreateTenantDto, ISearchTenantByFullName } from "@/models/Tenant";
import { searchTenantsAxios } from "@/api/tenants";

export class TenantService extends BaseServise {
  constructor(){
    super( 
      [{ field: 'first_name', value: '' }], 
      [{ field: 'id', direction: 'desc' }], 
      {current_page: 1, per_page: 10} 
    );
  }

  getAll = () => this.getDataAndSaveToStore(ActionType.TenantsGet);
  delete = (id: number) => this.getDataAndSaveToStore(ActionType.TenantDelete, id);

  create = (editCreateTenantDto: IEditCreateTenantDto): Promise<void> => this.getDataAndSaveToStore(ActionType.TenantCreate, editCreateTenantDto);
  update = (editCreateTenantDto: IEditCreateTenantDto): Promise<void> => this.getDataAndSaveToStore(ActionType.TenantUpdate, editCreateTenantDto);
  searchTenants = (searchText: string): Promise<ISearchTenantByFullName[]> => searchTenantsAxios(searchText);
}

