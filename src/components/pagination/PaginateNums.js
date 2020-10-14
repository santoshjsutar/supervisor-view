import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../styles/Styles";
import styles from "./PaginateNums.module.css";

const PaginateNums = (props) => {
  const classes = useStyles();
  const { tableData, totalItems } = props;
  const {
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state: { pageIndex, pageSize },
    gotoPage,
    pageCount,
  } = tableData;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.paginationFlex}>
      <button
        className={styles.paginatePipeArrow}
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        {"|<"}
      </button>
      <button
        className={styles.paginateButton}
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        {"<"}
      </button>
      {pageNumbers.map((number) => (
        <button
          className={styles.paginateNumbers}
          value={number}
          onClick={(event) => {
            gotoPage(event.target.value - 1);
          }}
          key={number}
        >
          {number}
        </button>
      ))}
      <button
        className={styles.paginateButton}
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        {">"}
      </button>
      <button
        className={styles.paginatePipeArrow}
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        {">|"}
      </button>

      <Typography
        variant="caption"
        display="inline"
        style={{
          marginLeft: "20px",
          marginRight: "12px",
        }}
      >
        Go to page
      </Typography>
      <FormControl variant="outlined">
        <input
          type="number"
          min="1"
          max={pageOptions.length}
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E5E5",
            boxSizing: "border-box",
            borderRadius: "5px",
            width: "40px",
            height: "30px",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "14px",
          }}
        />
      </FormControl>
      <Typography
        variant="caption"
        display="inline"
        style={{
          marginLeft: "20px",
          marginRight: "12px",
        }}
      >
        of {pageOptions.length}
      </Typography>
      <Typography variant="subtitle2" display="inline">
        <span
          style={{
            cursor: "pointer",
            borderBottom: "1px dashed #2055B5",
            color: "#2055B5",
          }}
        >
          Go {">"}
        </span>
      </Typography>
    </div>
  );
};

export default PaginateNums;
