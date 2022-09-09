// Dashboard

export interface IDashboarApplicationItem {
    id: string;
    created_at: string;
    address: string;
    status: string;
  }

export interface IDashboardPropertyItem {
  id: string;
  imgSrc: string;
  name: string;
  address: string;
  status: string;
  bathrooms: number;
  beds: number;
  area: number;
  price: number;
}

export interface IDashboardReportItem {
  id: string;
  created_at: string;
  status: string;
}

export interface IStatisticsItem {
    title: string;
    amount: number;
  }

export interface IUserNotification {
  id: number;
  userId: number;
  title: string;
  body: string;
}
