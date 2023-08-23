import { useState, useContext,useEffect } from 'react'
import './App.css'
import AppContext from "./AppContext";
import AppMaterial from './AppMaterial'
import ToolBar from './components/toolBar/ToolBar'
import useWindowSize from 'components/toolBar/WindowSizing/WindowSizing';
import GridTemplateNavbar from './components/GridTemplate/NavbarTemplate/Navbar'
function App() {
  const size = useWindowSize();    
  const [someState, setSomeState] = useState("some state");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [MenusOpen , setMenuOpen]=useState(false)
  const [userSearch,setuserSearch]=useState([])

  function logout (){
    localStorage.removeItem('token-info');
    setIsLoggedin(!isLoggedin);
  };
  const toggelBurgerMenu=()=>{
  setMenuOpen(!MenusOpen);
  }
  useEffect(() => {
    setMenuOpen(false);    
  }, [size]);
  return (
     <AppContext.Provider value={{ setSomeState, someState,isLoggedin,setIsLoggedin,logout,toggelBurgerMenu,MenusOpen,setMenuOpen,userSearch,setuserSearch }}>
     <ToolBar  />
     {/* <GridTemplateNavbar/> */}
     <AppMaterial />
     </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default App