import React from "react";
import './Button.css'
function Button (props:any){
// add class here
const Classes = ["bottun"]
switch (props.buttonType) {
case 'disablebtn':
Classes.push('disablebtn')
break;
case 'ablebtn':
Classes.push('ablebtn')
break;
case 'Registerbtn':
Classes.push('Registerbtn')
break;
case 'ZoneS':
Classes.push('ZoneS')
break;
case 'Zone1':
Classes.push('Zone1')
break;
case 'ZoneM':
Classes.push('ZoneM')
break;
case 'ZoneL':
Classes.push('ZoneL')
break;
case 'region':
Classes.push('region')
break;
case 'ZoneN':
Classes.push('ZoneN')
break;
default:
break;
}
return(
<button className={Classes.join(' ')} onClick={props.Clicked}  >{props.children} </button>
    )
}
export default Button