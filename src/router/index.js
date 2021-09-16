import Vue from 'vue';
import VueRouter from 'vue-router';

//  플러그인 실행 코드
Vue.useAttrs(VueRouter);

//  VueRouter로 인스턴스 생성 -> export default로 꺼냄
export default new VueRouter({
    mode: 'history',
    //  mode: 'history' 추가하면 url에서 # 제거됨
    //  # -> 해시 모드: url이 변경될 때 페이지가 다시 로드되지 않음
    //  히스토리 모드: 서버가 클라이언트의 페이지 변경을 모름
    //      -> ex) 로그인 링크를 눌러 url이 변경되어도 서버는 모름
    //      단일 페이지 클라이언트 앱으로 동작하므로, 직접  해당 url 접근시 404

    //  routes: VueRouter에 의해서 컨트롤되는 페이지의 정보를 담는 것
    routes: [
        {
            path: '/',
            redirect: '/login',
            //  루트 페이지 진입시 로그인 페이지로 리다이렉트
        },
        {
            path: '/login',
            component: () => import ('@/views/LoginPage/vue'),
        },
        {
            path: '/signup',
            component: () => import ('@/views/SignupPage.vue')
            //  화살표함수 사용 -> 최초에 모든 파일 로딩하지 않고,
            //  해당 url로 이동했을 때 필요한 JS파일을 로딩 (다이나믹 임포트)
        },
        {
            path: '*',
            component: () => import ('@/views/NotFoundPage.vue'),
            //  정의되지 않은 모든 url에 대한 반응
        },
    ]
});