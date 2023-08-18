import React, { useState } from "react"
import { Link } from "react-router-dom";
import MutualStyle from  '../../../../assets/styles/MutualStyle.module.css'
import Button from "../../button/Button"
import { useTheme } from "@mui/material";

function singUp() {
    const [newUserPassword, SetnewUserPassword] = useState('')
    const [newUserEmail, SetnewUserEmail] = useState('')
    const [verifyPassword, SetverifyPassword] = useState('')
    const [disabled, setDisabled] = useState(false)
    const theme  = useTheme();
    const addNewUserbutton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const userData = {
            newUserEmail,
            newUserPassword,
            verifyPassword
        };
        if (newUserPassword == verifyPassword) {
            localStorage.setItem('token-info', JSON.stringify(userData));
        } else {
            alert(" Password should be same :) ")
        }
    };
    const addnewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetnewUserPassword(event.target.value);
    }
    const addnewEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetnewUserEmail(event.target.value);
    }
    const addSetverifyPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetverifyPassword(event.target.value);
    }
    function OnChangeInput() {
        if (newUserPassword && newUserEmail && verifyPassword === null) {
            setDisabled(false)
        }
        setDisabled(true)
    }

    return (
        <div className={MutualStyle.MutualStyle}>
        <div className={MutualStyle.content}>
            <h2>Sign up</h2>
            <h4>Already have and account?
                <Link style={{paddingLeft:'4px'}} to={{
                    pathname: `/LoginUser`,
                }}>
                    login
                </Link>
            </h4>
            <div className={MutualStyle.MainInput}>
                <label>Email address
                    <input type="email" placeholder={newUserEmail}
                        onChange={(event) => { addnewEmail(event), OnChangeInput() }} /></label>
                <label>Create password
                    <input type="password" placeholder={newUserPassword}
                        onChange={(event) => { addnewPassword(event), OnChangeInput() }} /></label>
                <label>verify password
                    <input type="password" placeholder={verifyPassword}
                        onChange={(event) => { addSetverifyPassword(event), OnChangeInput() }} /></label>
            </div>
            <div className={MutualStyle.button}>
                <Button buttonType={disabled ? "ablebtn" : "disablebtn"} Clicked={addNewUserbutton}
                >Continue</Button>
            </div>
        </div>
        </div>
    )
}
export default React.memo(singUp)