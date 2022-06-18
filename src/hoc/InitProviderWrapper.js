import React, { Component } from "react";
import { connect } from 'react-redux';
import { IntlProvider } from "react-intl";

import  LanguageUtils  from "../utils/languageUtils";

const messages = LanguageUtils.getFlattenedMessages();

class IntlProviderWrapper extends Component {
   
    render() {
        
        const { children, language } = this.props;
        return (
            <IntlProvider
                locale={language}
                messages={messages[language]}
                defaultLocale="vi">
                {children}
            </IntlProvider>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

export default connect(mapStateToProps, null)(IntlProviderWrapper);
