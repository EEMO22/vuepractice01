<script>

export default {
    methods: {
        async submitForm() {
            const userData = {
                username: this.username,
                password: this.password,
            }
            const { data } = await loginUser(userData);
            this.$store.commit('setUsername', data.user.username);
            //  mutations를 호출하여 Store의 state 데이터 값 변경
            this.$router.push('/main');
        }
    },
}

</script>