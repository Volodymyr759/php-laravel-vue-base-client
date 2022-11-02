export interface IDashboarApplicationItem {
  id: string;
  created_at: string;
  address: string;
  status: string;
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
