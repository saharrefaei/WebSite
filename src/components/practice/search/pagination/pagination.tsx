import React,{useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import regionInfo from '../../serviceRequest/servicesInfo/regionInfo'
import {useGlobalContext} from '../../../../App'
import PaginationStyle from './pagination.module.css'
export default function pagination() {
const { userSearch, setuserSearch } = useGlobalContext();
const [showCards,setshowCards] = useState([])
const [currentPage,setcurrentPage]=useState(1)
const [pagination,setpagination]=useState({})
const [pagesNumber,setpagesNumber]=useState([0])
const [endIndex,setendIndex]=useState({})
const [startIndex,setstartIndex]=useState({})
const [allShownCards,setallShownCards]=useState({})

let pageSize =10 ;
let pagesNumbers ;
const keyword = userSearch;
const filtered = regionInfo.filter(entry => Object.values(entry).some(val => typeof val === "string" &&
val.includes(keyword)));

useEffect(()=>{
setshowCards(filtered)
const pageCount =Math.ceil(filtered.length / pageSize)
pagesNumbers =Array.from(Array(pageCount).keys())
let endIndexValue = pageSize * currentPage
setendIndex(endIndexValue)
let startIndexValue = endIndexValue - pageSize
setstartIndex(startIndexValue)
let allShownCardsValue = showCards.slice(startIndexValue,endIndexValue)
setallShownCards(allShownCardsValue)
setpagesNumber(pagesNumbers)
setpagination(allShownCardsValue)
},[])

const changePaginate=(newpage:any)=>{
const pageCount =Math.ceil(filtered.length / pageSize)
pagesNumbers =Array.from(Array(pageCount).keys())
setcurrentPage(newpage)
let endIndexValue = pageSize * currentPage
setendIndex(endIndexValue)
let startIndexValue = endIndexValue - pageSize
setstartIndex(startIndexValue)
let allShownCardsValue = showCards.slice(startIndexValue,endIndexValue)
setallShownCards(allShownCardsValue)
setpagesNumber(pagesNumbers)
setpagination(allShownCardsValue)
console.log('fahmidi be mnamm bgu');

}

return (
<div className={PaginationStyle.Countainer}>
  <Stack spacing={2}  >
     <div className={PaginationStyle.Stack}> 
  <Pagination hidePrevButton shape="rounded"
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{  next: ArrowForwardIcon }}
            {...item}
          />
        )}
      /> 
    <p>next</p>
</div>

  </Stack>
</div>
)
}