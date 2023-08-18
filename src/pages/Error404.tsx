import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../assets/Styles/styled";
import { Button } from "@mui/material";
import './ErrorPages.css'

export default function NotFound(props: any) {
  return (
    <>
      <h1 className="page404">404</h1>
      <h1 className="page404error">Oh dear, something went wrong!</h1>
      <h2 className="page404h2">404 Page not found</h2>
      <div>
        <Link to="/">
          <button className="button404">Go to live dashboard </button>
        </Link>
      </div>
    </>
  );
}
