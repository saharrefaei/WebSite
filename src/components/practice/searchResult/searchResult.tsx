import * as React from 'react';
import LeftContent from './leftContent/leftContent'
import SearchBar from './searchBar/searchBar'
import searchMainStyle from './searchMain.module.css'

export default function searchResult() {
  return (
    <div className={searchMainStyle.main}>
    
          <div><LeftContent/></div>
        
       
          <div><SearchBar/></div>
      
      
    </div>
  );
}