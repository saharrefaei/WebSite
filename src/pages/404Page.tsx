import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "styles/styled";
import { Button } from "@mui/material";
import ErrorPageStyles from './ErrorPageStyles.module.css'
export default function NotFound(props: any) {
  return (
    <>
    <div className={ErrorPageStyles.Page}>
      <h1 className={ErrorPageStyles.centered}>404</h1>
      <h1>Something went wrong!</h1>
      <h2>404 - Page not found</h2>
      <div>
        <Link to="/">
          <button className={ErrorPageStyles.button}>Back to home </button>
        </Link>
      </div></div>
    </>
  );
}
