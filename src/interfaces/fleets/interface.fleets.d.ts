// Generated by https://quicktype.io

export interface Fleet {
  _id: string;
  name: string;
  company: string;
  area: Area;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type Area = "acarreo" | "barrenacion" | "carga";
