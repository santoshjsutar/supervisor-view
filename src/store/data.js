import React from "react";
import { Checkbox, Typography, Select, MenuItem } from "@material-ui/core";
import { format } from "date-fns";

const assignedData = {
  background: "#FFFFFF",
  border: "1px solid #E5E5E5",
  boxSizing: "border-box",
  borderRadius: "28px",
  height: "40px",
  width: "220px",
};

const dateSize = {
  paddingTop: "4px",
  color: "#666666",
  height: "24px",
  width: "200px",
  borderRadius: "nullpx",
  fontFamily: "Roboto",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "14px",
  letterSpacing: "0em",
  textAlign: "center",
};
const dueDateOuter = {
  display: "flex",
  alignContent: "center",
  height: "24px",
  width: "200px",
  borderRadius: "15px",
  border: "1px solid #E5E5E5",
  boxSizing: "border-box",
  borderRadius: "15px",
};
const dueDateInner1 = {
  height: "23px",
  width: "176px",
  borderRadius: "15px",
  background: "rgba(244, 175, 100, 0.5)",
};
const dueDateInner2 = {
  height: "23px",
  width: "104px",
  borderRadius: "15px",
  background: "rgba(95, 128, 185, 0.5)",
};
const dueDateInner3 = {
  height: "23px",
  width: "32px",
  borderRadius: "15px",
  background: "rgba(128, 196, 131, 0.5)",
};

const dropdown = {
  fontFamily: "Roboto",
  marginTop: "5px",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "0em",
  textAlign: "left",
  height: "24px",
  width: "76px",
  left: "44px",
  top: "8px",
  borderRadius: "nullpx",
};
const medicare = {
  marginLeft: "15px",
  width: "106px",
  height: "20px",
  color: "#FFFFFF",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "20px",
  textAlign: "center",
  letterSpacing: "0.2px",
  textTransform: "uppercase",
  textAlign: "center",
  background: "#684999",
  borderRadius: "10px",
};

const commercial = {
  marginLeft: "15px",
  width: "106px",
  height: "20px",
  color: "#FFFFFF",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "20px",
  textAlign: "center",
  letterSpacing: "0.2px",
  textTransform: "uppercase",
  textAlign: "center",
  background: "#707683",
  borderRadius: "10px",
};

const exchange = {
  marginLeft: "15px",
  width: "106px",
  height: "20px",
  color: "#FFFFFF",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "20px",
  textAlign: "center",
  letterSpacing: "0.2px",
  textTransform: "uppercase",
  textAlign: "center",
  borderRadius: "10px",
  background: "#F4AF64",
};

const medicaid = {
  marginLeft: "15px",
  width: "106px",
  height: "20px",
  color: "#FFFFFF",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "20px",
  textAlign: "center",
  letterSpacing: "0.2px",
  textTransform: "uppercase",
  textAlign: "center",
  background: "#F89090",
  borderRadius: "10px",
};

const rowState = {
  marginLeft: "10px",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "24px",
  display: "flex",
  alignItems: "center",
  color: "#666666",
};

const subTaskMargin = {
  marginLeft: "60px",
  marginTop: "10px",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "24px",
  display: "flex",
  alignItems: "center",
  color: "#666666",
};

const userIcon1 = {
  paddingTop: "6px",
  paddingLeft: "11px",
  marginRight: "10px",
  color: "#FFFFFF",
  background: "Orange",
  height: "26px",
  width: "23px",
  borderRadius: "50%",
};
const userIcon2 = {
  paddingTop: "6px",
  paddingLeft: "11px",
  marginRight: "10px",
  color: "#FFFFFF",
  background: "Teal",
  height: "26px",
  width: "23px",
  borderRadius: "50%",
};

const userIcon3 = {
  paddingTop: "6px",
  paddingLeft: "11px",
  marginRight: "10px",
  color: "#FFFFFF",
  background: "#1077B0",
  height: "26px",
  width: "23px",
  borderRadius: "50%",
};

const userIcon4 = {
  paddingTop: "6px",
  paddingLeft: "11px",
  marginRight: "10px",
  color: "#FFFFFF",
  background: "Purple",
  height: "26px",
  width: "23px",
  borderRadius: "50%",
};

const userIcon5 = {
  paddingTop: "6px",
  paddingLeft: "11px",
  marginRight: "10px",
  color: "#FFFFFF",
  background: "#C4C4C4",
  height: "26px",
  width: "23px",
  borderRadius: "50%",
};

const rowFlex = {
  margin: 0,
  padding: 0,
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
};

const dataFormater = (date) => {
  return format(new Date(date), "MM/dd/yyyy @ K:mm a");
};

export const DATA = [
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={medicare}>medicare</div>,
    assigned: (
      <Select
        variant="outlined"
        style={assignedData}
        value={"Jonathan Robertson"}
      >
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography style={dateSize} variant="subtitle1" gutterBottom>
            {dataFormater("2020-01-07T21:14:28Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner2}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-12T22:05:53Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },

  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>2</b>
        </span>
      </Typography>
    ),
    lob: <div style={exchange}>exchange</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Susan Miller"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner3}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-12-25T11:14:17Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Build</span>
      </Typography>
    ),
  },

  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={medicaid}>medicaid</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Derek Roberts"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner2}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-06-02T17:28:48Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,

    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-01-25T06:16:47Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={exchange}>exchange</div>,

    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner3}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-02-09T01:23:18Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Build</span>
      </Typography>
    ),
  },

  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={medicaid}>medicaid</div>,

    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner2}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-01-14T23:09:57Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },

  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={medicaid}>medicaid</div>,

    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-04-10T10:45:26Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },

  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={exchange}>exchange</div>,

    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner3}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-26T05:06:29Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Build</span>
      </Typography>
    ),
  },

  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-03-06T09:44:23Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={medicare}>medicare</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner2}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-01-23T15:09:12Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={medicare}>medicare</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner3}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-06-17T21:34:27Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-03-25T13:12:53Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={exchange}>exchange</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner2}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-12-25T12:03:59Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Build</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-10-16T05:03:55Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={medicare}>medicare</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner3}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-01-03T15:53:46Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={medicare}>medicare</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2020-03-26T06:48:33Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner2}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-12-04T07:28:49Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={exchange}>exchange</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-19T10:23:29Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Build</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={medicaid}>medicaid</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner3}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-10-31T05:31:12Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={medicaid}>medicaid</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={exchange}>exchange</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner2}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Build</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={medicare}>medicare</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner3}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner3}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner2}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={exchange}>exchange</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Build</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={medicaid}>medicaid</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner3}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={medicaid}>medicaid</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner2}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={exchange}>exchange</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner3}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Build</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={medicare}>medicare</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={medicare}>medicare</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={exchange}>exchange</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Build</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={medicare}>medicare</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={medicaid}>medicaid</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={exchange}>exchange</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Build</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b>3</b>
        </span>
      </Typography>
    ),
    lob: <div style={medicare}>medicare</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
  {
    id: "",
    checkbox: (
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    ),
    task_name: (
      <Typography
        style={{
          textDecoration: "none",
          marginTop: "5px",
          marginLeft: "20px",
          color: "#2055B5",
        }}
        variant="subtitle2"
        display="block"
        gutterBottom
      >
        <span
          style={{
            borderBottom: "1px dashed #2055B5",
            textDecoration: "none",
          }}
        >
          <b>Task name</b>
        </span>
      </Typography>
    ),
    sub_task: (
      <Typography
        style={subTaskMargin}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>
          <b></b>
        </span>
      </Typography>
    ),
    lob: <div style={commercial}>commercial</div>,
    assigned: (
      <Select variant="outlined" style={assignedData} value={"Unassigned"}>
        <MenuItem value="Derek Roberts">
          <div style={rowFlex}>
            <div style={userIcon1}>D</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Derek Roberts
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Jonathan Robertson">
          <div style={rowFlex}>
            <div style={userIcon2}>J</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Jonathan Robertson
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Nichole Smith">
          <div style={rowFlex}>
            <div style={userIcon3}>N</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Nichole Smith
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Susan Miller">
          <div style={rowFlex}>
            <div style={userIcon4}>S</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Susan Miller
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="Unassigned">
          <div style={rowFlex}>
            <div style={userIcon5}>U</div>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              style={dropdown}
            >
              Unassigned
            </Typography>
          </div>
        </MenuItem>
      </Select>
    ),
    due_date: (
      <div style={dueDateOuter}>
        <div style={dueDateInner1}>
          <Typography
            style={dateSize}
            variant="subtitle1"
            // display="block"
            gutterBottom
          >
            {dataFormater("2019-11-09T12:30:37Z")}
          </Typography>
        </div>
      </div>
    ),
    step: (
      <Typography
        style={rowState}
        variant="caption"
        display="block"
        gutterBottom
      >
        <span>In Review</span>
      </Typography>
    ),
  },
];
