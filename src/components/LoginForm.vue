<script>

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
                // this.$store.commit('setUsername', data.user.username);
                //  mutations를 호출하여 Store의 state 데이터 값 변경
            } catch (error) {
                console.log(error.response);
                this.logMessage = error.response.data;
            } finally {
                this.$router.push('/main');
            }
        }
    },
}

</script>