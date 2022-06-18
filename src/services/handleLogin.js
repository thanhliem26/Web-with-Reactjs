import axios from '../axios';

const sendMail = (emailTo, language, code) => {
    return axios.post('/api/send', {emailTo, language, code})
}

export {sendMail}