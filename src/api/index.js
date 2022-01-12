import axios from "axios";

function registerUser(userData) {
    const url = "/member/v1";
    return axios.post(url,userData);
}

export {registerUser};