import React, { Fragment } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import CustomizeButton from './CsButton';
import iconFB from '../assets/icon/facebook-18px.svg';

class FaceBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggenIn: false,
            userId: '',
            name: '',
            email: '',
            picture: ''
        }  
    }

    componentClicked = () => {
        console.log("facebook click")
    }

    responseFacebook = (response) => {
       this.setState({
           isLoggenIn: true,
           userId: response.id,
           name: response.name,
           email: response.email,
        picture: response.picture
       })
    }
  
    render() {
       
        let facebookData;
        if(this.state.isLoggenIn) {
            facebookData = (
                <div style={{width: '400px', margin: 'auto', backgroundColor: '#F4F4F4', padding: '20px'}}>
                    <img src={this.state.picture.data.url}/>
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
                    render={renderProps => (
                        <CustomizeButton onClick={renderProps.onClick} icon={iconFB} text="Tiếp tục với FaceBook"/>
                    )}
                  />
            )
        }
        return (
            <Fragment>
                {facebookData}
            </Fragment>
        )
    }
} 

export default FaceBook;