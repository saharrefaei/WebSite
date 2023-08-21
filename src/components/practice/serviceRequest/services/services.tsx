import React, {Component} from 'react'
import servicesStyle from './services.module.css'
import serviceSection from '../serviceSection'
import important from '../../../../assets/images/import.svg'
import rotate from '../../../../assets/images/rotate.svg'
import X from '../../../../assets/images/icon.svg'
import lable from '../../../../assets/images/lable.png'
import balances from '../../../../assets/images/importentgray.svg'
import fashIcon from '../../../../assets/images/flash.png'
import Button from 'components/toolBar/button/Button';

export default function services({title , zone , status , detected , img ,detectedTime, OtherBalanceAffected, Region}: any) {

    return (
        <div className={servicesStyle.mainCountainer}>
            <div className={servicesStyle.Countainer}>

                <div
                    className={servicesStyle.firstInformation}
                    style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div className={servicesStyle.nameInformation}><img src={img}/>
                        <h3>{title}</h3>
                    </div>
                    <div className={servicesStyle.statusInformation} style={{ display: status ? '' : 'none'  }}><img className={servicesStyle.statusInformationimg} src={rotate}/>{status}</div>
                </div>

                <div className={servicesStyle.ChangeInformation}><img src={important}/>{detected} detected - {detectedTime}</div>

                <div className={servicesStyle.BtnInformation}>
                    <Button buttonType="ablebtn">
                     Go to substation to review changes    <img src={fashIcon}/>
                    </Button>
                </div>

                <div className={servicesStyle.lastfirstInformation} style={{ marginTop: OtherBalanceAffected ? '0px' : '8px'    }}>
                    <Button buttonType={`Zone${zone}`}>
                       Zone {zone}
                    </Button>
                    <div className={servicesStyle.regionInformation}><img src={lable}/>
                        <p>{Region}</p>
                    </div>
                    <div className={servicesStyle.balanceInformation} style={{ display: OtherBalanceAffected ? '' : 'none'  }}>
                        <img src={balances}/>
                        <p>
                            other balances affected</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
