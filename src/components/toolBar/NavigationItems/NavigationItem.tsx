import React from "react";
import NavigationItemStyle from './NavigationItem.module.css'
import ReportsIcon from '../../../assets/images/reports.png'
import settingICon from '../../../assets/images/setting.png'

export default function NavigationItem() {

    return (
        <div >
            <div className={NavigationItemStyle.Items}>
                <ul>
                    <li>
                        <div>
                            <img src={ReportsIcon}/>
                            <a href="LoginUser"
                                style={{
                                marginLeft: '10%'
                            }}>
                                Reports</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={settingICon}/>
                            <a href="LoginUser"
                                style={{
                                marginLeft: '10%'
                            }}>
                                Setting</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}