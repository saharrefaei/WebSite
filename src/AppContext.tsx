import React,{ createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
interface AppContextInterface {
     someState: string,
     setSomeState: any;
     isLoggedin: boolean,
     // setIsLoggedin:  Dispatch<SetStateAction<boolean>>;
     // logout: Dispatch<SetStateAction<Function>>;
     setIsLoggedin:any,
     logout :any,
     toggelBurgerMenu:any,
     MenusOpen :boolean,
     setMenuOpen:any,
     userSearch:any,
     setuserSearch:any
}
const AppContext = React.createContext < AppContextInterface > ({
     someState: "some string",
     setSomeState: undefined,
     isLoggedin: false,
     setIsLoggedin: null,
     logout:{},
     toggelBurgerMenu:{},
     MenusOpen:false,
     setMenuOpen:null,
     userSearch:null,
     setuserSearch:null


});
export default AppContext;