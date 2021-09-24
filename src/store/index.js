import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie, getUserFromCookie } from '@/utils/cookies';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';
import { loginUser } from '@/api/index';

Vue.useAttrs(Vuex);

export default new Vuex.Store({
    //  로그인 사용자의 정보를 Store에 담기 위해 state에 추가
    state: {
    //  state: 여러 컴포넌트에서 공유하는 데이터
        username: getUserFromCookie || '',
        token: getUserFromCookie || '',
        //  Cookie에 저장되어 있는 값이 있으면 가져와서 Store에 저장,
        //  그렇지 않으면 빈 문자열로 저장한다
        //  페이지를 새로고침 하더라도 Cookie에 있는 값으로
        //  Store의 token에 다시 저장하기 때문에 API 요청시 문제 없이 동작
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
    },
    actions: {
        async LOGIN({ commit }, userData) {
            const { data } = await loginUser(userData); //  api 호출
            commit('setToken', data.token);
            commit('setUsername', data.user.username);
            saveAuthToCookie(data.token);
            saveUserToCookie(data.user.username);
            return data;
        }
        //  actions - 비동기 처리를 위함
        //  LoginForm.vue 컴포넌트에 로그인 이후 처리에 대한 비즈니스 로직 너무 많음
        //  컴포넌트단의 코드를 최대한 간결히 -> Vuex Store의 Actions 속성 이용
        //  return data -> 나중에 활용 가능성 열어두기
    }
});