//  Axios 통신
import axios from "axios";
import store from '@/store/index';
import { setInterceptors } from './common/interceptors';

//  axiosService 인스턴스에 setInterceptors 함수 연결
function createAxiosService() {
    const axiosService = axios.create({
        //  axios.create(): 인스턴스 생성. API요청 시 필요한 공통 설정 세팅 가능
        baseURL: process.env.VUE_APP_API_URL,
        //  .env 파일에 키=값 형태로 환경변수 정의
        //  따로 import 하지 않아도 자동으로 사용 가능
        // headers: {
        //     Authorization: store.state.token,
            //  Token을 이용한 API 인증
            //  Token: 로그인 이후 API에 대해 필요한 인증값
            //  사용자 인증이 완료되었을 때만 발급
            //  LoginForm.vue 컴포넌트에서 loginAPI 호출로 받아온 token 값을
            //  api/index.js에 전해야 한다 -> Store 이용
        // }
        //  -> Axios Interceptor로 Token 설정
    });

    return setInterceptors(axiosService);
}

const axiosService = createAxiosService();

//  1. store에 저장되어 있는 token 값(default: 빈 문자열)을
//      axiosService 인스턴스에 설정
//  2. POST login 요청으로 받아온 token 값을 store에 저장
//  3. store에 저장되어 있는 token 값을 axiosService 인스턴스에 설정
function loginUser(userData) {
    return axiosService.post('login', userData);
}

function registerUser(userData) {
    const url = 'http://localhost:3000/signup';
    return axiosService.post('signup', userData);
}

export { registerUser };
export { loginUser };

//  로그인 API 요청 및 성공
//  로그인 API의 응답으로 받은 토큰을 스토어에 저장
//  인터셉터에 정의된 코드가 매 API요청마다 스토어에서 토큰을 꺼내 Authorizaion 속성에 연결
