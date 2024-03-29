"use client";
import React from "react";

interface IProps {
  children: React.JSX.Element;
}

export interface ITableContext {
  data: Array<ITableData>;
  changeTableData: (data: Array<ITableData>) => void;
}

export const TableContext = React.createContext<ITableContext>({
  data: [],
  changeTableData: () => {},
});

export default function TableProvider({ children }: IProps) {
  const [tableData, setTableData] = React.useState<Array<ITableData>>([]);

  const changeTableData = (data: Array<ITableData>) => {
    setTableData(data);
  };

  return (
    <TableContext.Provider value={{ data: tableData, changeTableData }}>
      {children}
    </TableContext.Provider>
  );
}
