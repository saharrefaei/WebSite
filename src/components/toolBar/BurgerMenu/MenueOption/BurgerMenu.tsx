import BurgerMenuImage from '../../../../assets/images/BurgerMenu.png';
import BurgerMenuStyle from './BurgerMenu.module.css';
import { useGlobalContext } from '../../../../App';
import NavigationItem from '../../NavigationItems/NavigationItem';
import AppContext from '../../../../AppContext';
import Logout from '../../user/logout/Logout';
import useWindowSize from 'components/toolBar/WindowSizing/WindowSizing';
import { useContext, useEffect } from 'react';

function BurgerMenu() {
  const size = useWindowSize();    
  const { toggelBurgerMenu } = useContext(AppContext);
  const { MenusOpen, setMenuOpen } = useGlobalContext();
// console.log(MenusOpen,"MenusOpen");
  return (
    <div className={BurgerMenuStyle.BurgerMenuStyle}>
      <div className={BurgerMenuStyle.BurgerMenuImage} onClick={toggelBurgerMenu}>
        <img src={BurgerMenuImage} alt="" />
      </div>
      <div className={BurgerMenuStyle.StatusSpecifier} style={{ display: MenusOpen ? 'inline' : 'none' }}>
        <div>
       <NavigationItem />
        </div>
        <div>
       <Logout />
        
        </div>
      </div>
    </div>
  );
}
export default BurgerMenu;