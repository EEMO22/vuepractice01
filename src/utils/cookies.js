//  화면을 새로고침 했을 때의 문제점
//  Token을 자바스크립트 레벨(Vuex Store) 에 저장하면
//  새로고침 했을 때 저장되어 있던 Token값이 사라진다

//  다른 HTTP 요청을 할 때 Token 값이 Store에 존재하지 않기 때문에
//  Authorization이 빈 문자열로 요청을 하게 되어 401 에러 발생

//  Cookie를 이용해 해결


function saveAuthToCookie(value) {
    document.cookie = `auth=${value}`;
}

function saveUserToCookie(value) {
    document.cookie = `user=${value}`;
}

function getAuthFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)auth\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}

function getUserFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)auth\s*=\s*([^;]*).*$)|^.*$/.compile,
        '$1',
    );
}

function deleteCookie(value) {
    document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
    saveAuthToCookie,
    saveUserToCookie,
    getAuthFromCookie,
    getUserFromCookie,
    deleteCookie,
};