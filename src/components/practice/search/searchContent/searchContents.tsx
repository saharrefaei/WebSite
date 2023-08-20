import React,{useState,useEffect} from 'react'
import searchContentStyle from './searchcontents.module.css'
import Region from '../../../../assets/images/lable.png'
import substations from '../../../../assets/images/icon.svg'
import { useGlobalContext } from '../../../../App';
import balance from '../../../../assets/images/pending.svg'
import SpecificSearchBar from '../searchBarRegion/specificSearchBar'
import SearchResultsRegion from '../searchResults/searchResultsRegion'
import regionInfo from '../../serviceRequest/servicesInfo/regionInfo'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

export default function searchContents() {
  const [allServicesInfo,setallServicesInfo] = useState(regionInfo)
  const { userSearch, setuserSearch } = useGlobalContext();
  const [showCards,setshowCards] = useState({})
const [currentPage,setcurrentPage]=useState(1)
const [pagination,setpagination]=useState([])
let pageSize = 4 ;
let pagesNumber ;
  const keyword = userSearch;
const filtered = regionInfo.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));

  useEffect(()=>{
    setshowCards(filtered) 
    const pageCount =Math.ceil(filtered.length/pageSize)
pagesNumber =Array.from(Array(pageCount).keys())
  },[])  


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
  <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </div>
  )
}

