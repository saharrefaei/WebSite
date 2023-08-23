import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../assets/Styles/styled";
import { Button } from "@mui/material";
import './ErrorPages.css'
import Typography from '@mui/material/Typography';

export default function ServerError(props: any) {
  return (
    <>
      <h1 className="page500">500</h1>
      <h1 className="page500error">Oh dear, something went wrong!</h1>
      <h2 className="page500h2">500 Internal server error</h2>
      <div>
        <Link to="/">
          <button className="button500">Go to live dashboard </button>
        </Link>
      </div>
      
    </>
  );
}
