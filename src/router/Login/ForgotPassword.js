import { useState, useRef, useEffect, Fragment } from "react";
import {FormattedMessage} from 'react-intl';
// import clsx from 'clsx';
import validator from 'validator';
import { sendMail } from "../../services/handleLogin";
import {useSelector} from 'react-redux';

const ForgotPassword = () => {
    const language = useSelector((state) => state.app.language);
    const [type, setType] = useState("password");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errEmail, setErrEmail] = useState(false);
    const [errPassword, setErrPassword] = useState(false);
    const [validate, setValidate] = useState(null)
    const [code,setCode] = useState('');

    const timerId = useRef();
    const mailRef = useRef();
    const passRef = useRef();

    let ramdom = useRef();
    
    const [counter, setCounter] = useState(0)
    const handleChange = (value, type) => {
        if(type==="email") {
            setEmail(value)
        } else if(type==="password") {
            setPassword(value)
        } else {
            setCode(value)
        }
    }

    useEffect(() => {
        const handleValidate = () => {
            if(validator.isEmail(mailRef.current.value) && passRef.current.value.length >= 8) {
                setValidate(true)
            } else if(!validator.isEmail(mailRef.current.value)) {
                setValidate(null)
                setErrEmail(true)
            } else if(passRef.current.value.length < 8){
                setValidate(null)
                setErrPassword(true)
            } else {
                setValidate(false)
            }
        }

        const handleFocusEmail = () => {
            setErrEmail(false)
        }

        const handleFocusPass = () => {
            setErrPassword(false)
        }
        mailRef.current.addEventListener("blur", handleValidate);
        passRef.current.addEventListener("blur", handleValidate);
        mailRef.current.addEventListener("focus", handleFocusEmail);
        passRef.current.addEventListener("focus", handleFocusPass);
        return () => {    
            mailRef.current !== null && mailRef.current.removeEventListener("blur", handleValidate);
            passRef.current !== null && passRef.current.removeEventListener("blur", handleValidate);
            mailRef.current !== null && mailRef.current.removeEventListener("focus", handleFocusEmail);
            passRef.current !== null && passRef.current.removeEventListener("focus", handleFocusPass);
        }

    }, [])

    
    const handleSendMail = () => {
        if(counter === 0) {
          setCounter(60)
          try {
            ramdom.current = Math.round(Math.random() * 10000000);  
            sendMail(email, language, ramdom.current);
         
          } catch(e) {
              console.log(e)
          }
          
       } else {
           console.log("Please enter empty fields!")
       }
    }

    useEffect(() => {
        if(counter === 0) return;
        timerId.current = setInterval(() => {
            setCounter(prev => prev - 1)
        }, 1000)

        return () => {
            clearInterval(timerId.current);
        }
    }, [counter])

    const handleConfirm = () => {
        if(parseInt(code) === ramdom.current && validate === true) {
            console.log("ok")
        } else {
            console.log("sai rồi")
        }
    }
    console.log(ramdom.current, validate)
    return (
        <div className="Register__email row">
            <div className="form__group">
               <label>Email</label>
               <div className="form__group-input">
                    <input ref={mailRef} type="text" placeholder="Enter your email" value={email} onChange={(e) => handleChange(e.target.value, "email")}/> 
               </div>
               {errEmail && <span className="errMessage"><FormattedMessage id="login.err__email"/></span>}
           </div>
           <div className="form__group">
               <label><FormattedMessage id="login.confirm__password"/></label>
               <div className="form__group-input">
                    <input ref={passRef} type={type} placeholder="Enter your password" value={password} onChange={(e) => handleChange(e.target.value, "password")}/> 
                    <i onClick={() => setType((prev) => prev === "password" ? "text" : "password")} className="fa-solid fa-eye"></i>                   
               </div>
               {errPassword && <span className="errMessage"><FormattedMessage id="register.note"/></span>}
           </div>
           <div className={`form__group forgot__pass ${validate ? "validate" : ""}`} >
               <div className="form__group-input">
                    <input disabled={counter ? false : true} type="text" placeholder="Enter your code" value={code} onChange={(e) => handleChange(e.target.value, "code")}/> 
                    <button className={`btn__notAllow ${counter !== 0 ? "counter" : ""}`}  onClick={handleSendMail}> {counter !== 0 ? <Fragment><FormattedMessage id="login.send__code-again"/> {counter}</Fragment> : <FormattedMessage id="login.send__code"/>}</button>
               </div>
           </div>
           <div className="form__group">
               <button className="btn__submit" onClick={() => handleConfirm()}><FormattedMessage id="login.confirm" /></button>
           </div>
        </div>
    )
}

export default ForgotPassword;