import React, { Fragment, useState, useEffect, useMemo } from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { useStyles } from "../styles/Styles";
import {
  Switch,
  InputLabel,
  Typography,
  Box,
  Grid,
  GridList,
  Select,
  MenuItem,
  GridListTile,
  InSelectputLabel,
  GridListTileBar,
  FormControl,
  Paper,
} from "@material-ui/core";
import HighlightOffSharpIcon from "@material-ui/icons/HighlightOffSharp";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import PaginateNums from "./PaginateNums";

const Pagination = (props) => {
  const { columns, data, table, sort, toggleSort } = props;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state: { pageIndex, pageSize },
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = table;

  const classes = useStyles();

  const totalPages = data.length;
  const firstItemOfPage = pageIndex * pageSize + 1;
  const lastItemOfPage =
    pageIndex * pageSize + pageSize < totalPages
      ? pageIndex * pageSize + pageSize
      : totalPages;

  return (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        square
        elevation={0}
        style={{ width: "100%" }}
      >
        <Grid container>
          <Grid item xs={1}>
            <IOSSwitch
              checked={sort.checked}
              onChange={toggleSort}
              name="checked"
            />
            <Typography
              className={classes.boldTypography}
              variant="caption"
              display="inline"
              gutterBottom
            >
              Multi Sort
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid
            className={classnames(`${classes.mutedTypos} ${classes.mr8px}`)}
            item
            xs={1.6}
          >
            <Typography variant="caption" display="inline">
              Results: {firstItemOfPage} to {lastItemOfPage} of {totalPages}
            </Typography>
          </Grid>
          <Grid className={classes.mutedTypos} item xs={1}>
            <Typography
              // className={classes.mutedTypos}
              variant="caption"
              display="inline"
            >
              Items per page
            </Typography>
          </Grid>
          <Grid className={classnames(`${classes.dropdown}`)} item xs={1}>
            <Select
              variant="outlined"
              className={classes.select}
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 20, 30].map((pageSize) => (
                <MenuItem key={pageSize} value={pageSize}>
                  {pageSize}
                </MenuItem>
              ))}
            </Select>
            {/* <FormControl ></FormControl> */}
          </Grid>
          <Grid className={classes.dropdown} item xs={5.9}>
            <PaginateNums tableData={table} totalItems={data.length} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

{
  /* <div>
<Box component="span">
<HighlightOffSharpIcon color="disabled" />
</Box>
</div>
<div>
<h1>Pagination</h1>
</div> */
}

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 35,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(10px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#1D54B4",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#1D54B4",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 26,
    height: 26,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default Pagination;
