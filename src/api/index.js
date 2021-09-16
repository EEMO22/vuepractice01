import axios from "axios";
//  Axios 통신

const axiosService = axios.create({
    //  axios.create(): 인스턴스 생성. API요청 시 필요한 공통 설정 세팅 가능
    baseURL: process.env.VUE_APP_API_URL,
    //  .env 파일에 키=값 형태로 환경변수 정의
    //  따로 import 하지 않아도 자동으로 사용 가능
});

function registerUser(userData) {
    const url = 'http://localhost:3000/signup';
    return axiosService.post('signup', userData);
}

export { registerUser };