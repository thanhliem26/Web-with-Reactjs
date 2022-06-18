import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {PATH} from '../../utils/index';
import {Fragment} from 'react';
const Home = () => {
    const isLoggenIn = useSelector((state) => state.user.isLoggenIn);
    const ridirect = isLoggenIn ? PATH.HOMEPAGE : PATH.LOGIN;
  
    return (
        <Fragment>
             <Navigate to={ridirect} />
        </Fragment>   
    )
}

export default Home;