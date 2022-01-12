import axios from "axios";

/**
 * .env 파일에서 VUE_APP 접두사가 붙은 변수는 자동으로 전역으로 등록해준다. 
 */
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})

function registerUser(userData) {
    return instance.post('member/v1',userData);
}

function loginUser(userData){
    return instance.post('login/v1',userData);
}

export {registerUser , loginUser};