import { Column } from './column';

export interface GridOption {
  columnsDefs: Column[];
  rowData: any[];
  width: string;
}
