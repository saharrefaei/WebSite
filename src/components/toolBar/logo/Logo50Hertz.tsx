import React from "react"
// import LogoeliaGroup from '../../../assets/images/eliaGroup.png'
import Logo50HertzStyle from './Logo50Hertz.module.css'
import logoBalanceBuilder from'../../../assets/images/Layer_1.svg'
function Logo (){
return (
<div className={Logo50HertzStyle.LogoeliaGroup}>
    <img src={logoBalanceBuilder} />
</div>
)
}
export default React.memo(Logo)