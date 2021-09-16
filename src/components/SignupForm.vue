<template>
    <form>
        <label for="name">이름</label>
        <input type="text">
        <button :disabled="!isUsernameValid || !password" type="submit">회원가입</button>
        <!-- 형식에 맞지 않거나 값이 없을 경우 버튼 비활성화 -->
    </form>
</template>

<script>
    import { registerUser } from '@/api/index';
    import { validationEmail } from '@utils/validation';

    export default {
        methods: {
            async submitForm() {
                //  회원가입 완료 이후의 동작을 위해 sumitForm 비동기 처리
                try{
                    //  try - catch 문 에러 처리
                    const userData = {
                        username: this.username,
                        password: this.password,
                        nickname: this.nickname
                    }
                    const { data } = await registerUser(userData);
                    this.logMessage = `${data.user.username}님 회원 가입이 완료되었습니다.`
                } catch (error) {
                    console.log(error.response);
                    this.logMessage = error.response.data;
                } finally {
                    this.initForm();
                }
            },
            initForm() {
                this.username = '';
                this.password = '';
                this.nickname = '';
            }
        },
        computed: {
            isUsernameValid() {
                return validationEmail(this.username);
                //  this.username이 한 글자 바뀔 때마다 validateEmail 함수 실행
            }
        }
    }
</script>