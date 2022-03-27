import { useState, Fragment } from "react";
import { GoogleLogin } from 'react-google-login';
import CustomizeButton from './CsButton';
import iconGoogle from '../assets/icon/google-18px.svg';

const Google = () => {
    const [isLoggenIn, setIsLoggenIn] = useState(false);
    //handle Login
    const onLoginSuccess = (response) => {
        console.log("Login succes",response); 
        setIsLoggenIn(true)
    }

    const onLoginFailure = (response) => {
        console.log("Login failed",response);
    }
    return (
        
        <Fragment>
             <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_ID}
                render={renderProps => (
                    <CustomizeButton onClick={renderProps.onClick} icon={iconGoogle} text="Tiếp tục với Google"/>
                
                )}
                buttonText="Login"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
            />
        </Fragment>
    )
}

export default Google;