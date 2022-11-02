import axios from "axios";
import authHeader from "./authHeader";
import { INotification, INotificationApiData } from "@/models/Notification";

export const getNotificationsAxios = async () => {
    return ( await axios.get<INotificationApiData>(`/notifications`, { headers: authHeader() }) ).data;
}

export const deleteNotificationsAxios = async (id: number) => {
    return (await axios.delete<INotification>(`/notifications/${id}`, { headers: authHeader() })).data;;
}
