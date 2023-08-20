import React , {useState} from 'react'
import regionInfo from '../../serviceRequest/servicesInfo/regionInfo'
import { useGlobalContext } from '../../../../App';

import specificSearchBarStyle from './specificSearchBar.module.css'
export default function specificSearchBar() {
    const [allServicesInfo,setallServicesInfo] = useState(regionInfo)
    const { userSearch, setuserSearch } = useGlobalContext();


const selectHandler =  (event: React.ChangeEvent<HTMLInputElement>) => {
    let userInput=event.target.value
    setuserSearch(event.target.value);
    }
    return (
        <div>
            <div className={specificSearchBarStyle.containerInput}>
                <div>
                    <input type="text" placeholder="Search for region or substations" onChange={selectHandler}/>
                </div>
            </div>
            <div className={specificSearchBarStyle.searchResult}>
                <p>Search Result : <span>{userSearch} </span></p>
            </div>
      
        </div>
    )
}
