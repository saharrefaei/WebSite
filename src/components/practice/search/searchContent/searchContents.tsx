import React,{useState,useEffect} from 'react'
import searchContentStyle from './searchcontents.module.css'
import Region from '../../../../assets/images/lable.png'
import substations from '../../../../assets/images/icon.svg'
import { useGlobalContext } from '../../../../App';
import balance from '../../../../assets/images/pending.svg'
import SpecificSearchBar from '../searchBarRegion/specificSearchBar'
import SearchResultsRegion from '../searchResults/searchResultsRegion'
import regionInfo from '../../serviceRequest/servicesInfo/regionInfo'
import Pagination from '../pagination/pagination';


export default function searchContents() {
  const [allServicesInfo,setallServicesInfo] = useState(regionInfo)
  const { userSearch, setuserSearch } = useGlobalContext();
//   const [showCards,setshowCards] = useState([])
// const [currentPage,setcurrentPage]=useState(1)
// const [pagination,setpagination]=useState({})
// const [pagesNumber,setpagesNumber]=useState([0])
// const [endIndex,setendIndex]=useState({})
// const [startIndex,setstartIndex]=useState({})
// const [allShownCards,setallShownCards]=useState({})


// let pageSize =10 ;
// let pagesNumbers ;
  const keyword = userSearch;

const filtered = regionInfo.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));

  // useEffect(()=>{
  //   setshowCards(filtered) 
  //   const pageCount =Math.ceil(filtered.length / pageSize)
  //   pagesNumbers =Array.from(Array(pageCount).keys())
  //   let endIndexValue = pageSize * currentPage 
  //   setendIndex(endIndexValue)
  //   let startIndexValue =  endIndexValue - pageSize
  //   setstartIndex(startIndexValue)
  //   let allShownCardsValue = showCards.slice(startIndexValue,endIndexValue)
  //   setallShownCards(allShownCardsValue)
  //   setpagesNumber(pagesNumbers)
  //   setpagination(allShownCardsValue)
  // },[])  

  // const changePaginate=(newpage:any)=>{
  //   const pageCount =Math.ceil(filtered.length / pageSize)
  //   pagesNumbers =Array.from(Array(pageCount).keys())
  //   setcurrentPage(newpage)
  //   let endIndexValue = pageSize * currentPage 
  //   setendIndex(endIndexValue)
  //   let startIndexValue =  endIndexValue - pageSize
  //   setstartIndex(startIndexValue)
  //   let allShownCardsValue = showCards.slice(startIndexValue,endIndexValue)
  //   setallShownCards(allShownCardsValue)
  //   setpagesNumber(pagesNumbers)
  //   setpagination(allShownCardsValue)
  //   console.log('fahmidi be mnamm bgu');
    
  // }


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

    <Pagination/>
    </div>
  )
}

