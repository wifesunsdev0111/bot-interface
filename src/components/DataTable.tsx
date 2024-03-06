import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";


interface DataTableProps {
  rows: any[] ; // Update the type of the "rows" prop if needed
}

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "No",
    width: 50,
  },
  {
    field: "sku",
    headerName: "SKU",
    width: 150,
  },
  {
    field: "title",
    headerName: "Title",
    width: 250,
  },
  
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 1200,
  }
];

const DashBoard: React.FC<DataTableProps> = ({ rows }) => {

  
  const rowData = rows;

  return (
    <div style={{ width: "100%" }}>
    
      <DataGrid
        rows={rowData}
        columns={columns}
        sx={{ backgroundColor: "#ffffff" }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default DashBoard;
