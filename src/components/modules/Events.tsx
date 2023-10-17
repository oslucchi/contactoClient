import { Persons } from "./Persons";

export type Events = {
  idEvent: number;
  idOwner: number;
  idCompany: number;
  idEventCategory: number;
  date: Date;
  duration: number;
  description: string;

  company: string;
  iconName: string;
  participants: Persons[];

  status: boolean;

  selected: boolean;
};
