import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import CustomizeButton from './CsButton'
import iconFB from '../assets/icon/facebook-18px.svg'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { changeLogin, userInfo } from '../store/actions/userAction.js'
class FaceBook extends React.Component {
  componentClicked = () => {
    console.log('facebook click')
  }

  responseFacebook = (response) => {
    const res = {
      name: response.name,
      email: response.email,
      id_net: response.userID,
      image: response.picture.data.url,
    }
    this.props.handleLogin(true)
    this.props.handleUser(res)
  }

  render() {
    let facebookData
    if (this.props.isLoggenIn) {
      facebookData = (
        <div
          style={{
            width: '400px',
            margin: 'auto',
            backgroundColor: '#F4F4F4',
            padding: '20px',
          }}
        >
          <img src={this.state.picture.data.url} alt="" />
        </div>
      )
    } else {
      facebookData = (
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_ID}
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          onClick={this.componentClicked}
          render={(renderProps) => (
            <CustomizeButton
              onClick={renderProps.onClick}
              icon={iconFB}
              text={<FormattedMessage id="login.facebook" />}
            />
          )}
        />
      )
    }
    return <div className="CsButton">{facebookData}</div>
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.user.isLoggenIn }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (payload) => dispatch(changeLogin(payload)),
    handleUser: (payload) => dispatch(userInfo(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FaceBook)
