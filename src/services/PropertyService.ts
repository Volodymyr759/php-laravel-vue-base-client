import { ActionType, IPropertyService } from "./types";
import { BaseServise } from "@/services/BaseServise";
import { IEditCreatePropertyDto, ISearchPropertyByAddressDto } from "@/models/Property";
import { searchPropertiesAxios } from "@/api/properties";

export class PropertyService extends BaseServise implements IPropertyService{
  constructor(){
    super( [
      { field: 'address', value: '' }, { field: 'status', value: '' }], // filtering
      [{ field: 'address', direction: 'asc' }], // sorting
      { current_page: 1, per_page: 9 } // pagination
    );
  }

  getAll = () => this.getDataAndSaveToStore(ActionType.PropertiesGet);
  delete = (id: number) => this.getDataAndSaveToStore(ActionType.PropertyDelete, id);

  create = (editCreatePropertyDto: IEditCreatePropertyDto): Promise<void> => this.getDataAndSaveToStore(ActionType.PropertyCreate, editCreatePropertyDto);
  update = (editCreatePropertyDto: IEditCreatePropertyDto): Promise<void> => this.getDataAndSaveToStore(ActionType.PropertyUpdate, editCreatePropertyDto);

  searchProperties = (searchText: string): Promise<ISearchPropertyByAddressDto[]> => searchPropertiesAxios(searchText);
}

