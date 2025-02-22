import { ReactElement } from "react";

interface IColumns {
  title: string;
  field: string;
  filtering?: any;
  render?: (rowData) => ReactElement;
  lookup?: any;
}

export interface IMaterialTableProps{
  columns: IColumns[];
  data: [{}];
  title?: string;
  actions?: any;
  options?: any;
}