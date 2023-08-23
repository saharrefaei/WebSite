import React from "react";
import './DateTime.css'
export default function DateTime() {
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
return (
<div className="DateTime1">
  <h3 className="DateTime"> {date}</h3>
</div>
);
}