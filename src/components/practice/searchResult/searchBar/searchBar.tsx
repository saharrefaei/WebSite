import React , {useState} from 'react'
import searchBarStyle from './searchBAr.module.css'
import questionIcon from '../../../../assets/images/question.png'
import serviceInfo from '../../serviceRequest/servicesInfo/serviceInfo'
export default function searchBar() {
  const [allServicesInfo,setallServicesInfo] = useState(serviceInfo)
  return (
    <div className={searchBarStyle.container}>
      <div className={searchBarStyle.questionIcon}>
        <img src={questionIcon}/>
      </div>
      <div>
      <input type="text" value="Search fro assests by name-you'll redirected to the diagram view" /> 
      </div>
      </div>

      
  )
}
