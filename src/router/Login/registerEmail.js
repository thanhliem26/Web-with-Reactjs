import { useState } from "react";
import {FormattedMessage} from 'react-intl';

const RegisterEmail = () => {
    const [type, setType] = useState("password");
    return (
        <div className="Register__email row">
           <div className="form__group">
               <label><FormattedMessage id="register.name"/></label>
               <div className="form__group-input">
                    <input type="text" placeholder="Enter your fullName"/>
               </div>
           </div>
           <div className="form__group">
               <label>Email</label>
               <div className="form__group-input">
                    <input type="text" placeholder="Enter your email"/> 
               </div>
           </div>
           <div className="form__group">
               <label><FormattedMessage id="login.Password" /></label>
               <div className="form__group-input">
                    <input type={type} placeholder="Enter your password"/> 
                    <i onClick={() => setType((prev) => prev === "password" ? "text" : "password")} className="fa-solid fa-eye"></i>                   
               </div>
           </div>
           <div className="form__group">
               <span><FormattedMessage id="register.note"/></span>
           </div>
           <div className="form__group">
               <div className="form__group-input">
                    <input type="text" placeholder="Enter your code"/> 
                    <button className="btn__notAllow"><FormattedMessage id="login.send__code"/></button>
               </div>
           </div>
           <div className="form__group">
               <button className="btn__submit"><FormattedMessage id="register.regi"/></button>
           </div>
        </div>
    )
}

export default RegisterEmail;