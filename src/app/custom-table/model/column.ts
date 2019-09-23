export interface Column {
  field: string;
  headerName: string;
  cellEditor?: string;
  width?: string;
  sortable?: boolean;
  editable?: boolean;
}
