import React,{useState} from "react"
import {Link} from "react-router-dom";
import MutualStyle from  '../../../../assets/styles/MutualStyle.module.css'
import Button from "../../button/Button"
function RequestAccess(){
const [newUserFirstName , SetnewUserFirstName] = useState('')
const [newUserLastName , SetnewUserLastName] = useState('')
const [newUserCompanyname,SetnewUserCompanyname]=useState('')
const [newUserPassword,SetnewUserPassword]=useState('')
const [newUserEmail,SetnewUserEmail]=useState('')
const [disabled, setDisabled] = useState(false)
function OnChangeInput() {
if (newUserFirstName && newUserLastName && newUserCompanyname && newUserPassword && newUserEmail === null ) {
setDisabled(false)
}
setDisabled(true)
}
const addNewUserData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
e.preventDefault();
const userData = {
newUserFirstName,
newUserLastName,
newUserEmail,
newUserPassword,
newUserCompanyname
};
localStorage.setItem('token-info', JSON.stringify(userData));
};
const addnewUserLastName =(event: React.ChangeEvent<HTMLInputElement>)  => {
SetnewUserLastName(event.target.value)
}
const addnewUserPassword = (event: React.ChangeEvent<HTMLInputElement>)  => {
SetnewUserPassword(event.target.value);
}
const addnewUserEmail = (event: React.ChangeEvent<HTMLInputElement>)  => {
SetnewUserEmail(event.target.value );
}
const addnewUserFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
SetnewUserFirstName(event.target.value );
}
const addnewUserCompanyname =(event: React.ChangeEvent<HTMLInputElement>) =>{
SetnewUserCompanyname(event.target.value)
}
return(
    <div className={MutualStyle.MutualStyle}>
<div className={MutualStyle.content}>
    <h2>Sign up for a new account</h2>
    <h4 >Already have and account?
        <Link style={{paddingLeft:'4px'}} to={{
     pathname: `/LoginUser`,
     }}>
        login
        </Link>
    </h4>
    <div className={MutualStyle.MainInput}>
        <label>First Name
            <input type="text" placeholder={newUserFirstName}
                onChange={(event)=>{addnewUserFirstName(event);OnChangeInput()}}/></label>
        <label>Last Name
            <input type="text" placeholder={newUserLastName}
                onChange={(event)=>{addnewUserLastName(event);OnChangeInput()}}/></label>
        <label>Email address
            <input type="email" placeholder={newUserEmail} onChange={(event)=>{addnewUserEmail(event);OnChangeInput()}}
            /></label>
        <label> password
            <input type="password" placeholder={newUserPassword} onChange={(event)=>{addnewUserPassword(event);OnChangeInput()}}
            /></label>
        <label>Type in your company name
            <input type="type" placeholder={newUserCompanyname}
                onChange={(event)=>{addnewUserCompanyname(event);OnChangeInput()}} /></label>
    </div>
    <div className={MutualStyle.button}>
        <Button buttonType={ disabled ? "ablebtn" :"disablebtn" } Clicked={addNewUserData} >
            <Link to={{
     pathname: `/singUp`,
     }} className={MutualStyle.buttonLink}>Continue</Link></Button>
    </div>
</div>
</div>
)
}
export default React.memo(RequestAccess)