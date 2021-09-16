import axios from "axios";
import store from '@/store/index';
//  Axios 통신

const axiosService = axios.create({
    //  axios.create(): 인스턴스 생성. API요청 시 필요한 공통 설정 세팅 가능
    baseURL: process.env.VUE_APP_API_URL,
    //  .env 파일에 키=값 형태로 환경변수 정의
    //  따로 import 하지 않아도 자동으로 사용 가능
    headers: {
        Authorization: store.state.token,
        //  Token을 이용한 API 인증
        //  Token: 로그인 이후 API에 대해 필요한 인증값
        //  사용자 인증이 완료되었을 때만 발급
        //  LoginForm.vue 컴포넌트에서 loginAPI 호출로 받아온 token 값을
        //  api/index.js에 전해야 한다 -> Store 이용
    }
});

function registerUser(userData) {
    const url = 'http://localhost:3000/signup';
    return axiosService.post('signup', userData);
}

export { registerUser };