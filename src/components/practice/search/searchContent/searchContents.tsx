import React,{useState} from 'react'
import searchContentStyle from './searchcontents.module.css'
import Region from '../../../../assets/images/lable.png'
import substations from '../../../../assets/images/icon.svg'
import balance from '../../../../assets/images/pending.svg'
import SpecificSearchBar from '../searchBarRegion/specificSearchBar'
import SearchResultsRegion from '../searchResults/searchResultsRegion'
import ServicesInfos from '../../serviceRequest/servicesInfo/serviceInfo'
export default function searchContents() {
  const [allServicesInfo,setallServicesInfo] = useState(ServicesInfos)

  return (
        <div className={searchContentStyle.container}>
        <div className={searchContentStyle.content}>
        <p>Search for specific <img src={Region}/> region , <img src={substations} />substations or <img src={balance}/> balance</p>
   </div>
  <div className={searchContentStyle.SpecificSearchBarcontainer}>
    <SpecificSearchBar/>
  </div>
  <div className={searchContentStyle.result}>
    {
      allServicesInfo.map(ServicesInfo=>(
        <SearchResultsRegion {...ServicesInfo}/>
        ))
    }

  </div>
  
    </div>
  )
}
