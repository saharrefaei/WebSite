import React,{useState} from "react"
import LoginUserStyle from './LoginUser.module.css'
import MutualStyle from  '../../../../assets/styles/MutualStyle.module.css'
import Login from "../login/Login"
function LoginUser(){
const [Password , SetPassword] = useState('')
const [Email , SetUserEmail] = useState('')
const [isLoggedin, setIsLoggedin] = useState(false);
const [disabled, setDisabled] = useState(false)
const addPassword =  (event: React.ChangeEvent<HTMLInputElement>) => {
SetPassword(event.target.value );
}
const addEmail =  (event: React.ChangeEvent<HTMLInputElement>) => {
  SetUserEmail(event.target.value );
}
const login = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { e.preventDefault();
const userData = {
Email,
Password,
};
localStorage.setItem('token-info', JSON.stringify(userData));
setIsLoggedin(true);
SetUserEmail('');
SetPassword('');
};
function onChangeInput() {
if (Password && Email === null ) {
setDisabled(false)
}
setDisabled(true)
}
return(
  <div className={MutualStyle.MutualStyle}>
<div className={LoginUserStyle.LoginUser}>
  <Login login={login} Email={Email} Password={Password} addPassword={addPassword} addEmail={addEmail}
    onChangeInput={onChangeInput} disabled={disabled} />
</div>
</div>
)
}
export default React.memo(LoginUser)