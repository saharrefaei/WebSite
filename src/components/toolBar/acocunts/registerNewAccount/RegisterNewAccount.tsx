import React, { useState } from "react"
import { Link } from "react-router-dom";
import Button from "../../button/Button";
import Ismeimg from '../../../../assets/images/Itsme.jpg'
import Googleimg from '../../../../assets/images/Google.png'
import CSAMimg from '../../../../assets/images/CSAM.png'
import Powerimg from '../../../../assets/images/power.png'
import RegisterStyle from './RegisterNewAccount.module.css'
import MutualStyle from '../../../../assets/styles/MutualStyle.module.css'
import RegisterSignUpStyle from '../../../../assets/styles/Register-SigninNewUser.module.css'
import {useGlobalContext} from '../../../../App';
function RegisterNewAccount() {
        const { MenusOpen, setMenuOpen } = useGlobalContext();
        const [disabled, setDisabled] = useState(false)
        const [NewUserEmail, SetnewUserEmail] = useState('')
        const AddUserData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                const userData = {
                        NewUserEmail,
                };
                localStorage.setItem('token-info', JSON.stringify(userData));
        };
        const AddUSerEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
                SetnewUserEmail(event.target.value);
        }
        function OnChangeInput() {
                if (NewUserEmail === null) {
                        setDisabled(false)
                }
                setDisabled(true)
        }
        return (
                <div className={MutualStyle.MutualStyle} style={{ display: !MenusOpen ? 'inline' : 'none' , overflow :  !MenusOpen ? '' : 'hidden' }}>
                <div className={RegisterSignUpStyle.fullscreen}>
                        <div className={RegisterSignUpStyle.leftcontainer}>
                        </div>
                        <div className={RegisterSignUpStyle.rightcontainer} >
                                <h2>Sign up for a new account</h2>
                                <h4 style={{ color: "var(--medium-gray)" }}>Already have and account?
                                        <Link style={{paddingLeft:'4px'}} to={{
                                                pathname: `/LoginUser`,
                                        }}>
                                                login
                                        </Link>
                                </h4>
                                <div className={RegisterSignUpStyle.RegisterNewAccountInput}>
                                        <label>Email address
                                                <input aria-label="email" type="email" placeholder={NewUserEmail}
                                                        onChange={(event) => { AddUSerEmail(event), OnChangeInput() }} /></label>
                                </div>
                                <div className={RegisterSignUpStyle.RegisterContinueButton} >
                                        <Button buttonType={disabled ? "ablebtn" : "disablebtn"} Clicked={AddUserData}>
                                                <Link to={{
                                                        pathname: `/singUpnonUser`,
                                                }} className={RegisterSignUpStyle.buttonLink}>Continue</Link></Button>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", paddingTop: "10%" }}>
                                        <div style={{ flex: 1, backgroundColor: "var(--black)", height: "1px" }} />
                                        <p style={{ margin: "0 10px" }}>or</p>
                                        <div style={{ flex: 1, backgroundColor: "var(--black)", height: "1px" }} />
                                </div>
                                <div className={RegisterStyle.RegisterButtons}  >
                                        <Button buttonType="Registerbtn"><img style={{ width: "2rem", height: "2rem" }} src={Ismeimg}
                                                alt="#" />
                                                <Link to={{
                                                        pathname: `google.com`,
                                                }}>
                                                        <p> Sign up with Itsme</p>
                                                </Link>
                                        </Button>
                                        <Button buttonType="Registerbtn"><img style={{ width: "5rem" }} src={CSAMimg} alt="#" />
                                                <Link to={{
                                                        pathname: `google.com`,
                                                }}>
                                                        <p> Sign up with CSAM</p>
                                                </Link>
                                        </Button>
                                        <Button buttonType="Registerbtn"><img src={Googleimg} alt="#" />
                                                <Link to={{
                                                        pathname: `google.com`,
                                                }}>
                                                        <p> Sign up with Google</p>
                                                </Link>
                                        </Button>
                                </div>
                                <div className={RegisterSignUpStyle.belowtext}>
                                        <h4 style={{ display: "flex", justifyContent: " center", alignItems: "center" }}><slot style={{ color: "var(--black)", fontFamily: "TTNormsProBold" }}>Developed by</slot>  <img
                                                style={{ width: "2rem" }} src={Powerimg} alt="" /> signin enegery</h4>
                                        <p style={{ textAlign: "center" }}><a href="#"
                                                style={{ color: "var(--gray)", textDecoration: "underline" }}>signin Energy</a> allows to
                                                use one unique ID to access services of
                                                EPIC,raxes,GreenBid and many more </p>
                                </div>
                        </div>
                </div>
                </div>
        )
}
export default React.memo(RegisterNewAccount)