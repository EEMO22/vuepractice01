<template>
    
    <template v-if="isUserLogin">
        <span>{{ $store.state.username }}</span>
    </template>
        <!-- Store의 state 데이터 중 username 값 출력 -->
    <template>
        <router-link to="/login">로그인</router-link>
    </template>
</template>

<script>
export default {
    computed: {
        isUserLogin() {
            return this.getters.isLogin;
        }
    }
}
</script>