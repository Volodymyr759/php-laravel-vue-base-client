import axios from "axios";

export async function getNotificationsAxios(limit: number) {
  return (await axios.get("/posts", { params: { _limit: limit } })).data;
}
