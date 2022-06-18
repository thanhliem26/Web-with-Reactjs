import { GoogleLogin } from 'react-google-login'
import CustomizeButton from './CsButton'
import iconGoogle from '../assets/icon/google-18px.svg'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import { changeLogin, userInfo } from '../store/actions/userAction.js'

const Google = () => {
  const dispatch = useDispatch()
  const onLoginSuccess = (response) => {
    const res = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      id_net: response.profileObj.googleId,
      image: response.profileObj.imageUrl,
    }
    dispatch(changeLogin(true))
    dispatch(userInfo(res))
  }

  const onLoginFailure = (response) => {
    console.log('Login failed', response)
  }
  return (
    <div className="CsButton">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_ID}
        render={(renderProps) => (
          <CustomizeButton
            onClick={renderProps.onClick}
            icon={iconGoogle}
            text={<FormattedMessage id="login.google" />}
          />
        )}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Google
