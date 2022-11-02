import { ActionType } from "./types";
import { BaseServise } from "@/services/BaseServise";

export class NotificationService extends BaseServise {
  constructor(){
    super(
      [], 
      [{field: 'id', direction: 'desc'}], 
      {current_page: 1, per_page: 10}
    );
  }

  getAll = () => this.getDataAndSaveToStore(ActionType.NotificationsGet);
  delete = (id: number) => this.getDataAndSaveToStore(ActionType.NotificationDelete, id);
}

