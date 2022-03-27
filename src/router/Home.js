import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {PATH} from '../utils/index';

const Home = () => {
    const isLoggenIn = useSelector((state) => state.user.isLoggenIn);
    const ridirect = isLoggenIn ? PATH.HOME : PATH.LOGIN;
    return (
        <div>
            <Navigate to={ridirect} />
        </div>
    )
}

export default Home;