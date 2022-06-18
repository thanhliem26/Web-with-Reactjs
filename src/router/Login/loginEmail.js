import { useState } from "react";
import {FormattedMessage} from 'react-intl';

const LoginEmail = ({onClick}) => {
    const [type, setType] = useState("password");

    return (
        <div className="Register__email row">
           <div className="form__group">
               <label>Email</label>
               <div className="form__group-input">
                    <input type="text" placeholder="Enter your Email"/> 
               </div>
           </div>
           <div className="form__group">
               <label><FormattedMessage id="login.Password"/></label>
               <div className="form__group-input">
                    <input type={type} className="form"placeholder="Password"/> 
                    <i onClick={() => setType((prev) => prev === "password" ? "text" : "password")} className="fa-solid fa-eye"></i>                   
               </div>
           </div>
           <div className="form__group">
               <button className="btn__submit"><FormattedMessage id="login.login"/></button>
           </div>
           <div className="forgot__password">
                <span onClick={onClick}><FormattedMessage id="login.forgot"/></span>
           </div>
          
        </div>
    )
}

export default LoginEmail;