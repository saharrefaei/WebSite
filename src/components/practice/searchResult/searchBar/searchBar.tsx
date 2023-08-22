import React , {useState} from 'react'
import searchBarStyle from './searchBAr.module.css'
import questionIcon from '../../../../assets/images/question.png'
import serviceInfo from '../../serviceRequest/servicesInfo/serviceInfo'
export default function searchBar() {
  const [allServicesInfo,setallServicesInfo] = useState(serviceInfo)
  const [showInformation,setshowInformation] = useState(false)

  function MouseOver(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.style.width='fit-content';
    
    setshowInformation(true)

  }
  
  function MouseOut(event: React.ChangeEvent<HTMLInputElement>){
    event.target.style.background=""; 
    setshowInformation(false)

  }  console.log(showInformation,'showInformation');

  return (
    <div className={searchBarStyle.container}>
      <div className={searchBarStyle.questionIcon}>
        <img src={questionIcon} onMouseOver={MouseOver} onMouseOut={MouseOut}/>
        <div className={searchBarStyle.information} style={{display :showInformation ? 'block' : 'none' }} >information bar for showing every thing you want</div>
      </div>
      <div>
      <input type="text" placeholder="Search fro assests by name-you'll redirected to the diagram view" /> 
          </div>
      </div>

      
  )
}
