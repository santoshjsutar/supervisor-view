import React, { Fragment, useState, useEffect, useMemo } from "react";
import { useStyles } from "../styles/Styles";
import { Table } from "react-table";
import Paper from "@material-ui/core/Paper";
import gear from "../../icons/SettingGear.svg";

const TableHeadStyle = {
  padding: "10px",
  borderRight: "1px solid #E5E5E5",
};
const TableBodyRowStyle = {
  display: "grid",
  height: "70px",
  gridTemplateColumns: "50px auto 3fr 2fr 2fr 3fr 2fr 4fr",
  gridGap: "10px",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderBottom: "5px solid #E5E5E5",
  justifyItems: "stretch",
};

const TableHeadRowStyle = {
  display: "grid",
  gridTemplateColumns: "50px auto 3fr 2fr 2fr 3fr 2fr 4fr",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderBottom: "8px solid #E5E5E5",
};

const TableWidth = {
  width: "100%",
};
const TableData = (props) => {
  const { table } = props;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } = table;

  return (
    <table {...getTableProps()} style={TableWidth}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} style={TableHeadRowStyle}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} style={TableHeadStyle}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={TableBodyRowStyle}>
              {row.cells.map((cell, id) => {
                return (
                  <td {...cell.getCellProps()} key={id}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
