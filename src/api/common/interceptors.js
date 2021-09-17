//  Axios Interceptor
//  then ot catch .HTTP 요청과 응답을
//  컴포넌트 단에서 처리하기 전에 추가 로직을 넣을 수 있다
import store from '@/store/index';

export function setInterceptors(axiosService) {
    //  Add a request interceptor
    axiosService.interceptor.request.use(
        function (config) {
        //  요청을 보내기 전에 어떠한 처리를 할 수 있다
            config.header.Authorization = store.state.token;
            //  요청을 보내기 직전에 config.header.Authorization에 token 값 넣어준다
            return config;
    },
    function (error) {
        //  요청이 잘못되었을 때 에러가 컴포넌트 단으로 오기 전에 어떠한 처리를 할 수 있다
        return Priomise.reject(error);
    });

    //  Add a response interceptor
    axiosService.interceptor.response.use(
        function (response) {
            return response;
        },
    function (error) {
        //  응답이 에러인 경우에 미리 처리할 수 있다
        return Promise.reject(error);
    });

    return axiosService;
}