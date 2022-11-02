import { INotification } from "@/models/Notification/INotification"

export interface INotificationApiData {
    current_page: number;
    data: INotification[];
    per_page: number;
    total: number;
}