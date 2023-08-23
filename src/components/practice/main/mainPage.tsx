import React, { useState } from "react"
import mainPageStyle from './mainPage.module.css'
import Search from '../search/searchassests'
import QuickSelect from '../quickSelect/content'
import ServiceRequest from '../serviceRequest/serviceSection'
import SearchResult from '../searchResult/searchResult'
function mainPage() {
      
        return (
                <div className={mainPageStyle.main}>  
             <SearchResult/>
              <QuickSelect/>
              <ServiceRequest />
               <Search/>

                </div>
        )
}
export default React.memo(mainPage)