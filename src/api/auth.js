import http from '@/api/http'

export async function login(userid, password) {
    return http.post('/api/auth/login', {
        userid,
        password
    });
}