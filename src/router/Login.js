import { useEffect } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import {PATH} from '../utils/index';
import './Login.scss';

const Login = () => {
   const isLoggenIn = useSelector((state) => state.user.isLoggenIn);
    let navigate = useNavigate();

   useEffect(() => {
        if(isLoggenIn) {
            return navigate(PATH.HOME)
        }
    }, [isLoggenIn])
    return (
        <div className="grid">
            <div className="Login__container">
                <div className="row">
                    <div className="Login__container-form col l-5">
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;