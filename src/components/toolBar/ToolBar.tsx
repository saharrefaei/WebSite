import Logo50Hertz from './logo/Logo50Hertz'
import ToolBarStyle from './ToolBar.module.css'
import LogoUser from "./logo/LogoUser"
import NavigationItem from './NavigationItems/NavigationItem'
import MutualStyle from '../../assets/styles/MutualStyle.module.css'
import LogOut from './user/logout/Logout'
import useWindowSize from './WindowSizing/WindowSizing'
import BurgerMenu from '../toolBar/BurgerMenu/MenueOption/BurgerMenu'
const ToolBar = () => {
  const size = useWindowSize();    
return (
  <div className={MutualStyle.MutualStyle}>
  <div className={ToolBarStyle.toolBar}>
  <div className={ToolBarStyle.Logo50Hertz}>
  <Logo50Hertz/>
  </div>
  {size.width > 500 &&<NavigationItem />}
  {size.width > 500 &&<LogoUser />}
  {size.width > 500 &&<LogOut />}
  <div className={ToolBarStyle.BurgerMenu}>
  {size.width < 500 &&<BurgerMenu />}
  </div>
  </div>
  </div>
)
}
export default ToolBar