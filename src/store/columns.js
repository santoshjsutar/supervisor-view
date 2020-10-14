import React from "react";
import gear from "../icons/SettingGear.svg";
import vectorUp from "../icons/Vector-3.svg";
import vectorDown from "../icons/Vector-4.svg";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const style = {
  listContainer: {
    listStyle: "none",
    paddingLeft: 0,
  },
  itemStyle: {
    cursor: "pointer",
    padding: 5,
  },
};

export const COLUMNS = [
  {
    Header: (
      <img
        src={gear}
        alt=""
        srcSet=""
        width="30px"
        height="30px"
        style={{ margin: 0, padding: 0, cursor: "pointer" }}
      />
    ),
    accessor: "id",
  },
  {
    Header: <Checkbox color="primary" />,
    accessor: "checkbox",
  },
  {
    Header: (
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            marginTop: "5px",
            marginLeft: "10px",
          }}
          variant="button"
          display="block"
          gutterBottom
        >
          TASK NAME
        </Typography>
        <img
          src={vectorUp}
          alt="filter"
          srcSet=""
          width="20px"
          height="20px"
          style={{
            marginRight: "8px",
            padding: 0,
            cursor: "pointer",
            cursor: "pointer",
          }}
        />
      </div>
    ),
    accessor: "task_name",
  },
  {
    Header: (
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            marginTop: "5px",
            marginLeft: "10px",
          }}
          variant="button"
          display="block"
          gutterBottom
        >
          LOB
        </Typography>
        <img
          src={vectorUp}
          alt="filter"
          srcSet=""
          width="20px"
          height="20px"
          style={{ marginRight: "8px", padding: 0, cursor: "pointer" }}
        />
      </div>
    ),
    accessor: "lob",
  },
  {
    Header: (
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            marginTop: "5px",
            marginLeft: "10px",
          }}
          variant="button"
          display="block"
          gutterBottom
        >
          SUBTASKS
        </Typography>
        <img
          src={vectorUp}
          alt="filter"
          srcSet=""
          width="20px"
          height="20px"
          style={{ marginRight: "8px", padding: 0, cursor: "pointer" }}
        />
      </div>
    ),
    accessor: "sub_task",
  },
  {
    Header: (
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            marginTop: "5px",
            marginLeft: "10px",
          }}
          variant="button"
          display="block"
          gutterBottom
        >
          ASSIGNED TO
        </Typography>
        <img
          src={vectorUp}
          alt="filter"
          srcSet=""
          width="20px"
          height="20px"
          style={{ marginRight: "8px", padding: 0, cursor: "pointer" }}
        />
      </div>
    ),
    accessor: "assigned",
  },
  {
    Header: (
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            marginTop: "5px",
            marginLeft: "10px",
          }}
          variant="button"
          display="block"
          gutterBottom
        >
          STEP
        </Typography>
        <img
          src={vectorUp}
          alt="filter"
          srcSet=""
          width="20px"
          height="20px"
          style={{ marginRight: "8px", padding: 0, cursor: "pointer" }}
        />
      </div>
    ),
    accessor: "step",
  },
  {
    Header: (
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            marginTop: "5px",
            marginLeft: "10px",
            color: "#2055B5",
          }}
          variant="button"
          display="block"
          gutterBottom
        >
          DUE DATE
        </Typography>
        <img
          src={vectorDown}
          alt="filter"
          srcSet=""
          width="20px"
          height="20px"
          style={{ marginRight: "8px", padding: 0, cursor: "pointer" }}
        />
      </div>
    ),
    accessor: "due_date",
  },
];
