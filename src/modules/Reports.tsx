export type Reports = {
  idReport: number;
  idReporter: number;
  idEvent: number;
  idCompany: number;
  idAgent: number;
  date: Date;
  report: string;
  summary: string;
  archived: boolean;
  reporter: string;
  status: boolean;
  showTagOnly: boolean;
  selected: boolean;
};
