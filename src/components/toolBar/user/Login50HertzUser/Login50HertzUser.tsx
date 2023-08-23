import React from "react"
import Login50HertzUserStyle from "./Login50HertzUser.module.css"
import MutualStyle from '../../../../assets/styles/MutualStyle.module.css'
import Button from "../../button/Button"
import MicrosoftLogo from '../../../../assets/images/Vector.png'
function Login50HertzUser(props:any){
return(
    <div className={MutualStyle.MutualStyle}>
<div className={Login50HertzUserStyle.SSOLogin}>
    <h2>Login with SSO</h2>
    <Button  buttonType="ablebtn" Clicked={props.login}><img src={MicrosoftLogo}
            alt="" />continue with SSO</Button>
</div></div>
)
}
export default React.memo(Login50HertzUser)