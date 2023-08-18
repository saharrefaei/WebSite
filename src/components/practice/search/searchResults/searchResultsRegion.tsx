import React from 'react'
import flashicon from '../../../../assets/images/flashblack.svg'
import RegionIcon from '../../../../assets/images/lable.png'
import searcResultStyle from './searchResultsRegion.module.css'
import Button from '../../../toolBar/button/Button'
export default function searchResultsRegion({title , zone , status , detected , img ,detectedTime, OtherBalanceAffected, Region}: any) {
  
    return (
    <div className={searcResultStyle.mainCountainer}>
            <div className={searcResultStyle.Countainer}>

                <div
                    className={searcResultStyle.firstInformation}
                    style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div className={searcResultStyle.nameInformation}><img src={img}/>
                        <h3>{title}</h3>
                    </div> 
                    <div className={searcResultStyle.regionNavigation}>
                    <Button buttonType="region">
                 go to the region 
                 <img src ={flashicon}/>
                    </Button>
                </div>
                </div>
                <div className={searcResultStyle.lastfirstInformation} >
                    <Button buttonType="ZoneS">
                       Zone {zone}
                    </Button>
                    <div className={searcResultStyle.regionInformation} ><img src={RegionIcon}/>
                        <p style={{fontFamily: 'TTNormsProMedium,Helvetica, Arial, sans-serif'
}}>{Region}</p>
                    </div>
                </div>

            </div>
        </div>
  )
}
