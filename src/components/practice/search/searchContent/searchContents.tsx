import React,{useState,useEffect} from 'react'
import searchContentStyle from './searchcontents.module.css'
import Region from '../../../../assets/images/lable.png'
import substations from '../../../../assets/images/icon.svg'
import { useGlobalContext } from '../../../../App';
import balance from '../../../../assets/images/pending.svg'
import SpecificSearchBar from '../searchBarRegion/specificSearchBar'
import SearchResultsRegion from '../searchResults/searchResultsRegion'
import regionInfo from '../../serviceRequest/servicesInfo/regionInfo'
export default function searchContents() {
  const [allServicesInfo,setallServicesInfo] = useState(regionInfo)
  const { userSearch, setuserSearch } = useGlobalContext();
  const [showCards,setshowCards] = useState({})

  
  useEffect(()=>{
    setshowCards(filtered) 
    console.log(setshowCards,"setshowCards");
    
  },[])  
const keyword = userSearch;
const filtered = regionInfo.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));

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
      
      filtered.map(ServicesInfo=>(
        
        <SearchResultsRegion {...ServicesInfo}/>
        ))
    }

  </div>
  
    </div>
  )
}
