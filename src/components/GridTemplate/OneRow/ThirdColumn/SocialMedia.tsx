import Twitter from '../../../../assets/images/twitter.png'
import Instagram from '../../../../assets/images/instagram.png'
import whatsapp from '../../../../assets/images/whatsapp.png'
import './SocialMedia.css'
function Socialmedia (){
return(
<div className='Images'>
<div >
    <img src={Twitter} alt="Twitter" />
</div>
<div >
    <img src={Instagram} alt="Instagram" />
</div>
<div >
    <img src={whatsapp} alt="whatsapp" />
</div>
</div>
)
}
export default (Socialmedia)