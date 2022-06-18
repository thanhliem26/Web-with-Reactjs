import CustomizeButton from "./CsButton";
import iconEmail from '../assets/icon/personal-18px.svg';
import {FormattedMessage} from 'react-intl';

const Email = ({onClick}) => {

    return (
        <div className="CsButton">
            <CustomizeButton onClick={onClick} icon={iconEmail} text={<FormattedMessage id="login.mail"/>}/>
        </div>
    )
}

export default Email;