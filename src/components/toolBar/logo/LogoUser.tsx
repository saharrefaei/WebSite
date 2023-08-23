import React from "react"
import LogoUserHead from '../../../assets/images/LogoUserHead.png'
import LogoUserBody from '../../../assets/images/LogoUserBody.png'
import gridIcon from '../../../assets/images/grid.png'
import LogoUserStyle from './LogoUser.module.css'
const LogoUser = () => {
return (
<div className={LogoUserStyle.Grid}>
    <img src={gridIcon} className={LogoUserStyle.gridIcon} alt="" />
    {/* <img src={LogoUserHead} className={LogoUserStyle.LogoUserHead} alt="" /> */}
    {/* <img src={LogoUserBody} className={LogoUserStyle.LogoUserBody} alt="" /> */}
    <a href="LoginUser">Grid</a>
</div>
)
}
export default LogoUser