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
                const { data } = await loginUser(userData);
                this.$store.commit('setToken', data.token);
                this.$store.commit('setUsername', data.user.username);
                //  mutations를 호출하여 Store의 state 데이터 값 변경
                saveAuthToCookie(data.token);
                saveUserToCookie(data.user.username);
                //  POST login 후 서버로부터 가져오는 token 값과 
                //  user.username값을 cookie에 저장
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