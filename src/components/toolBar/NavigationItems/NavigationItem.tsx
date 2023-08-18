import React from "react";
import NavigationItemStyle from './NavigationItem.module.css'
export default function NavigationItem() {
  
return (
<div className={NavigationItemStyle.Items}>
  <div>
  <ul>
    <li>Navigation Item 1</li>
    <li>Navigation Item 2</li>
  </ul>
  </div>
</div>
);
}