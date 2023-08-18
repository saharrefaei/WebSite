import React from "react"
import LogoUserHead from '../../../assets/images/LogoUserHead.png'
import LogoUserBody from '../../../assets/images/LogoUserBody.png'
import LogoUserStyle from './LogoUser.module.css'
const LogoUser = () => {
return (
<div className={LogoUserStyle.LogoUser}>
    <img src={LogoUserHead} className={LogoUserStyle.LogoUserHead} alt="" />
    <img src={LogoUserBody} className={LogoUserStyle.LogoUserBody} alt="" />
    <a href="LoginUser">LOGIN</a>
</div>
)
}
export default LogoUser