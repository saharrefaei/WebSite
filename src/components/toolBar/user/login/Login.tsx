import * as React from 'react'
import {Link} from "react-router-dom";
import MutualStyle from  '../../../../assets/styles/MutualStyle.module.css'
import Button from "../../button/Button"
function login(props:any){
return(
<div className={MutualStyle.MutualStyle}>
      <div  className={MutualStyle.content}>
            <h2>Sign in</h2>
            <h4>Don't have an account?
                  <Link style={{paddingLeft:'4px'}} to={{
       pathname: `/RequestAccess`,
       }}>
                  Signup
                  </Link>
            </h4>
            <div className={MutualStyle.MainInput}>
                  <label>Email address
                        <input aria-label="email" type="email" placeholder={props.Password}
                              onChange={(event)=>{props.addPassword(event);props.onChangeInput(event)}}/></label>
                  <label> password
                        <input aria-label="password" type="password" placeholder={props.Email}
                              onChange={(event)=>props.addEmail(event)}/></label>
            </div>
            <div className={MutualStyle.button}>
                  <Button buttonType={ props.disabled ? "ablebtn" :"disablebtn" } Clicked={props.login}>Continue</Button>
            </div>
      </div>
</div>
)
}
export default React.memo(login)