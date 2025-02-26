import React, { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useFetch } from "../../Hooks/useFetch";
import { Searchbar } from "../../Components";

export const PayrollView = () => {
  const { data, error } = useFetch("http://localhost:3000/payrolls");
  const [payrollData, setpayrollData] = useState([]);

  const [filtering, setfiltering] = useState("");

  useEffect(() => {
    if (!error && data) setpayrollData(data);
  }, [data]);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "DESDE",
      accessorKey: "from",
    },
    {
      header: "HASTA",
      accessorKey: "to",
    },
    {
      header: "DESCRIPCION",
      accessorKey: "description",
    },
    {
      header: "Ver",
      accessorKey: "view",
      cell: (cell) => (
        <a href={cell.row.original.view} target="_blank">
          Ver
        </a>
      ),
    },
  ];

  const table = useReactTable({
    data: payrollData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setfiltering,
  });

  return (
    <>
      <Searchbar
        placeholder="Buscar Planilla..."
        search={filtering}
        setsearch={setfiltering}
      />

      <table className="table_payroll">
        <thead className="payroll_header">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="payroll_body">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
