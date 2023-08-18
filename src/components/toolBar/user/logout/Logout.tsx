import React, { useContext } from "react";
import LogOutIcon from '../../../../assets/images/logout.png'
import AppContext from "../../../../AppContext";
import { useGlobalContext } from '../../../../App'
import MutualStyle from'../../../../assets/styles/MutualStyle.module.css'
import LogoutStyle from './Logout.module.css'
import useWindowSize from "components/toolBar/WindowSizing/WindowSizing";

function logOut(){
const {logout} = useContext(AppContext)
const { MenusOpen , setMenuOpen } = useGlobalContext();
const size = useWindowSize();    

return(
    <div className={MutualStyle.MutualStyle}>
    <div className={LogoutStyle.logOut} onClick={()=>{logout()}}>
        <div className={LogoutStyle.logOutContent} >
    <img src={LogOutIcon} alt="" />
    <p style={{ display: size.width  < 500 && MenusOpen ? 'inline' : 'none' }}>Logout</p>
    </div>
</div>
</div>
)
}
export default React.memo(logOut)