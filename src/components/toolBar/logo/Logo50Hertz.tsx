import React from "react"
import LogoeliaGroup from '../../../assets/images/eliaGroup.png'
import Logo50HertzStyle from './Logo50Hertz.module.css'
function Logo (){
return (
<div className={Logo50HertzStyle.LogoeliaGroup}>
    <img src={LogoeliaGroup} />
</div>
)
}
export default React.memo(Logo)