import { Events } from "../modules/Events";
import { Reports } from "../modules/Reports";

export type AppStackParamList = {
  ReportSection: {
    data: Reports[];
    event: any;
  };
  ReportDetails: { report: Reports }; // replace `any` with your Reports type if defined
  ReportAddItem: {
    idEvent: number;
    idUser: number;
  };
  EventActionHandler: {
    event: Events;
  };
};
  