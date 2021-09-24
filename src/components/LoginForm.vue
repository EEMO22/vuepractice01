<script>

import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

export default {
    methods: {
        async submitForm() {
            try {
                //  제대로 된 try ~ catch 인지 모르겠음
                const userData = {
                    username: this.username,
                    password: this.password,
                }

                // const { data } = await loginUser(userData);
                // this.$store.commit('setToken', data.token);
                // this.$store.commit('setUsername', data.user.username);
                // //  mutations를 호출하여 Store의 state 데이터 값 변경
                // saveAuthToCookie(data.token);
                // saveUserToCookie(data.user.username);
                //  POST login 후 서버로부터 가져오는 token 값과 
                //  user.username값을 cookie에 저장
                    //  store/index.js로 기능 이전
                await this.$store.dispatch('LOGIN', userData);
                    //  dispatch -> Store Actions 호출 가능 --> store/index
                    //  Actions 처리(API 호출이 끝나고 store와 cookies에 token 저장하는 등)
                    //  가 끝나고 나서 '/main' 페이지로 이동해야 하기 때문에
                    //  dispatch할 때 await 필요
                this.$router.push('/main');
            } catch (error) {
                console.log(error.response);
                this.logMessage = error.response.data;
            } finally {
                
            }
        }
    },
}

</script>