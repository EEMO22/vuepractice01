import Vue from 'vue';
import Vuex from 'vuex';

Vue.useAttrs(Vuex);

export default new Vuex.Store({
    //  로그인 사용자의 정보를 Store에 담기 위해 state에 추가
    state: {
        //  state: 여러 컴포넌트에서 공유하는 데이터
        username: '',
        token: '',
    },
    getters: {
        //  getters: state의 값이 변경됐을 때 특정 상태를 계산할 수 있도록 함
        //  Vue의 computed와 유사
        //  로그인 유무 판별: state username 이 빈 문자열이 아니라면 로그인 상태
        isLogin(state) {
            return state.username !== '';
        }
    },
    mutations: {
        //  mutation: 데이터(state) 의 변경, commit
        setUsername(state, username) {
            state.username = username;
        },
        setToken(state, token) {
            state.token = token;
        }
    }
});