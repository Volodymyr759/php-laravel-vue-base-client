import { ActionType, ILeaseService } from "./types";
import { BaseServise } from "@/services/BaseServise";
import { IEditCreateLeaseDto } from "@/models/Lease";

export class LeaseService extends BaseServise implements ILeaseService {
  constructor(){
    super( 
      [{ field: 'address', value: '' }, { field: 'status', value: '' }], 
      [{ field: 'address', direction: 'asc' }], 
      { current_page: 1, per_page: 10 } 
    );
  }

  getAll = () => this.getDataAndSaveToStore(ActionType.LeasesGet);
  delete = (id: number): Promise<void> => this.getDataAndSaveToStore(ActionType.LeaseDelete, id);

  create = (editCreateLeaseDto: IEditCreateLeaseDto): Promise<void> => this.getDataAndSaveToStore(ActionType.LeaseCreate, editCreateLeaseDto);
  update = (editCreateLeaseDto: IEditCreateLeaseDto): Promise<void> => this.getDataAndSaveToStore(ActionType.LeaseUpdate, editCreateLeaseDto);
}

