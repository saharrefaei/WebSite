import React,{useState} from "react"
import {Link} from "react-router-dom";
import Button from "../../button/Button";
import SignUpStyle from './signin.module.css'
import Powerimg from '../../../../assets/images/power.png'
import Backarrow from '../../../../assets/images/736925.png'
import RegisterSignUpStyle from '../../../../assets/styles/Register-SigninNewUser.module.css'
import MutualStyle from '../../../../assets/styles/MutualStyle.module.css'
import {useGlobalContext} from '../../../../App';
function Signin(){
const { MenusOpen, setMenuOpen } = useGlobalContext();
const [disabled, setDisabled] = useState(false)
const [UserPassword,SetPassword]=useState('')
const AddUserData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
e.preventDefault();
const userData = {
UserPassword,
};
localStorage.setItem('token-info', JSON.stringify(userData));
};
function OnChangeInput() {
if (UserPassword === null ) {
setDisabled(false)
}
setDisabled(true)
}
const AddPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
SetPassword(event.target.value);
}
return(
    <div className={MutualStyle.MutualStyle} style={{ display: !MenusOpen ? 'inline' : 'none' , overflow :  !MenusOpen ? '' : 'hidden' }}>
<div className={RegisterSignUpStyle.fullscreen}>
    <div className={RegisterSignUpStyle.leftcontainer}>
    </div>
    <div  className={RegisterSignUpStyle.rightcontainer}>
        <h2>Sign in to your account</h2>
      <div className={RegisterSignUpStyle.RegisterNewAccountInput}>
        <label> password
            <input aria-label="password" type="password" placeholder={UserPassword}
                onChange={(event)=>{AddPassword(event),OnChangeInput()}}/></label>
        <p style={{marginTop:'initial'}} className={SignUpStyle.Forgetpassword}>
            <Link  to={{
         pathname: `/LoginUser`,
         }}>
            Forget password ?
            </Link>
        </p>
        </div>
        <div className={RegisterSignUpStyle.RegisterContinueButton}>
            <Button buttonType={ disabled ? "ablebtn" :"disablebtn" } Clicked={AddUserData}>Continue</Button>
        </div>
        <Link className={SignUpStyle.Backarrow} to={{
        pathname: `/RegisterNewAccount`,
        }}>
        <img src={Backarrow} alt="#" />
        <p>back</p>
        </Link>
        <div className={RegisterSignUpStyle.belowtext}>
            <h4 style={{display: "flex",justifyContent:" center",alignItems: "center",paddingTop:" 36%"}}><slot style={{color:"var(--black)",fontFamily:"TTNormsProBold"}}>Developed by</slot> 
                <img style={{width:"2rem"}} src={Powerimg} alt="" /> signin enegery</h4>
            <p style={{textAlign:"center"}}><a href="#" style={{color:"var(--gray)",textDecoration:"underline"}}>signin
                    Energy</a> allows to
                use one unique ID to access services of
                EPIC,raxes,GreenBid and many more </p>
        </div>
    </div>
</div>
</div>
)
}
export default React.memo(Signin)