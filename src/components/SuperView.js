import React, { Fragment, useState, useEffect, useMemo } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Button, Typography } from "@material-ui/core";
import "./tabs/Tabs.css";
import Pagination from "./pagination/Pagination";
import TableData from "./table/Table";
import { useStyles } from "./styles/Styles";
import { DATA } from "../store/data";
import { COLUMNS } from "../store/columns";
import { useTable, usePagination } from "react-table";

const SuperView = () => {
  const columns = useMemo(() => COLUMNS, []);
  const mock_data = useMemo(() => DATA, []);

  const [data, setData] = useState(mock_data);
  const [sort, toggleSort] = useState({
    checked: true,
  });

  const table = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const handleChange = (event) => {
    if (event.target.name === "checked") {
      toggleSort({ ...sort, [event.target.name]: event.target.checked });
    }
  };

  const classes = useStyles();
  return (
    <Tabs>
      <TabList>
        <Tab>
          <Typography
            className={classes.boldTypography}
            variant="overline"
            display="block"
            gutterBottom
          >
            UNASSIGNED TASKS
          </Typography>
        </Tab>
        <Tab>
          <Typography
            className={classes.boldTypography}
            variant="overline"
            display="block"
            gutterBottom
          >
            ASSIGNED TASKS
          </Typography>
        </Tab>
        <Tab>
          <Typography
            className={classes.boldTypography}
            variant="overline"
            display="block"
            gutterBottom
          >
            ALL TASKS
          </Typography>
        </Tab>
        <Button size="small" variant="outlined" style={button}>
          <Typography
            variant="caption"
            style={{ fontSize: "11px", marginTop: "4px", fontWeight: "bold" }}
            display="inline"
            gutterBottom
          >
            Assign Task(s)
          </Typography>
        </Button>
      </TabList>
      <TabPanel>
        <Pagination
          table={table}
          sort={sort}
          toggleSort={handleChange}
          data={data}
        />
        <TableData table={table} toggleSort={handleChange} data={data} />
      </TabPanel>
      <TabPanel>
        <h2>ASSIGNED TASKS</h2>
      </TabPanel>
      <TabPanel>
        <h2>ALL TASKS</h2>
      </TabPanel>
    </Tabs>
  );
};

const button = {
  color: "#1D54B4",
  border: "1px solid #1D54B4",
  fontFamily: "Roboto",
  fontSize: "smaller",
  paddingRight: "20px",
  paddingLeft: "20px",
  textTransform: "none",
  marginRight: "5px",
  marginTop: "8px",
  float: "right",
  height: "35px",
};

export default SuperView;
