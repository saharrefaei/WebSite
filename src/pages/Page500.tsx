import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "styles/styled";
import { Button } from "@mui/material";
import ErrorPageStyles from './ErrorPageStyles.module.css'
export default function ServerError(props: any) {
  return (
    <>
        <div className={ErrorPageStyles.Page}>
      <h1 className={ErrorPageStyles.page500}>500</h1>
      <h1 className={ErrorPageStyles.page500error}>Something went wrong!</h1>
      <h2 className={ErrorPageStyles.page500h2} >500 - Internal server error</h2>
      <div>
        <Link to="/">
          <button className="button500">Back to home </button>
        </Link>
      </div>
      </div>
    </>
  );
}
