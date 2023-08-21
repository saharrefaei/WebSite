import React , {useState,useEffect} from 'react'
import ReactDOM from 'react-dom';
import serviceSectionStyle from './serviceSection.module.css'
import Services from './services/services'
import Button from 'components/toolBar/button/Button'
import allServices from './servicesInfo/serviceInfo.js'
import pendingImg from '../../../assets/images/pending.svg'
import filterImg from '../../../assets/images/Icon.svg'
import historyIcon from '../../../assets/images/history.png'
export default function serviceSection(props:any) {
const [allServicesInfo,setallServicesInfo] = useState(allServices)
const [userSelect,setuserSelect] = useState('S')
const ButtonClickedZoneS = (event: React.ChangeEvent<HTMLInputElement>) => {
  setuserSelect('S')
  };
  const ButtonClickedZone1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserSelect('1')
    };
    const ButtonClickedZoneN = (event: React.ChangeEvent<HTMLInputElement>) => {
      setuserSelect('M')
      };
      const ButtonClickedZoneL = (event: React.ChangeEvent<HTMLInputElement>) => {
        setuserSelect('L')
        };
console.log(userSelect,'userSelect');


        const filtered = allServices.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(userSelect)));
        console.log(filtered,'filtred');
        
        return (
        <div className={serviceSectionStyle.style}>
          <div>
            <p style={{ marginTop:'-4%' }}>Select a zone</p>
          </div>
          <div className='zons'>

            <Button buttonType="ZoneS" Clicked={ButtonClickedZoneS} className={serviceSectionStyle.ZoneS}> Zone S
            </Button>
            <Button buttonType="Zone1" Clicked={ButtonClickedZone1} className={serviceSectionStyle.Zone1}> Zone 1
            </Button>
            <Button buttonType="ZoneM" Clicked={ButtonClickedZoneN} className={serviceSectionStyle.ZoneN}> Zone M</Button>
            <Button buttonType="ZoneL" Clicked={ButtonClickedZoneL} className={serviceSectionStyle.ZoneL}> Zone L
            </Button>

          </div>

          <main>
            <div className={serviceSectionStyle.serviceContent}>
              <div className={serviceSectionStyle.service}>
                <h2 className={serviceSectionStyle.serviceTitle}>Your Service Request </h2>
                <div className={serviceSectionStyle.serviceTools}>

                  <div className={serviceSectionStyle.VerticalLine}></div>

                  <div className={serviceSectionStyle.filter}>
                    <p
                      style={{ display:'flex' , alignItems : 'center' }}>
                      filter : <img style={{ marginLeft:'2px' }} src={filterImg} /></p>
                  </div>

                  <div className={serviceSectionStyle.padding}>
                    <p
                      style={{ display:'flex' , alignItems : 'center',flexDirection:'row-reverse' }}>
                      pending <img style={{ marginLeft:'7px', }} src={pendingImg} /> </p>
                  </div>

                </div>
              </div>
              <div className={serviceSectionStyle.history}>
                <p
                  style={{ display:'flex' , alignItems : 'center' ,color:'gray' }}>
                  see history <img style={{ marginLeft:'2px' }} src={historyIcon} /></p>
              </div>

            </div>

            <div className={serviceSectionStyle.mainstl}>

              {
              filtered.map(allService =>(
              <Services {...allService} />

              ))
              }
            </div>

          </main>


        </div>
        )
        }