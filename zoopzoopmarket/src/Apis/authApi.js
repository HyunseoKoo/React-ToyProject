import { Axios } from "./@core";

const PATH = '/api/user'

const AuthApi = {
    signup(email, pw, nickName, phone, region) {
        return Axios.post(PATH, {email, pw, nickName, phone, region});
    },
    
    login(email, pw) {
        return Axios.post(PATH + '/login', {email, pw});
    },

    logout() {
        return Axios.get(PATH + '/logout');
    },

    // /api/user/check/nickname?re={nickname}
    nickNameDoubleCheck(nickname) {
        return Axios.get(PATH + '/check/nickname', {
            params: {re: nickname}
        })
    },

    // /api/user/check/email?email={email}

    getRefreshToken() {
        return Axios.get(PATH + '/refreshToken');
    }

}

export default AuthApi;