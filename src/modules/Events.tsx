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

export var eventNull: Events = {
  idEvent: 1,
  idOwner: 1,
  idCompany: 1,
  idEventCategory: 1,
  date: new Date(),
  duration: 0,
  description: "",
  company: "",
  iconName: "",
  participants: [],
  status: false,
  selected: false,
};
